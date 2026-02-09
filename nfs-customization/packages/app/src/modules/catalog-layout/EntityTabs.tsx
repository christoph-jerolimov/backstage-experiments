/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { matchRoutes, useParams, useRoutes } from 'react-router-dom';

import { permissionApiRef } from '@backstage/plugin-permission-react';
import { createPermission } from '@backstage/plugin-permission-common';

import useAsync from 'react-use/esm/useAsync';

import { EntityTabsPanel } from './EntityTabsPanel';
import { EntityTabsList } from './EntityTabsList';
import { useApi } from '@backstage/frontend-plugin-api';
import { Progress } from '@backstage/core-components';

type SubRoute = {
  group: string;
  path: string;
  title: string;
  children: JSX.Element;
};

export const todoListUpdatePermission = createPermission({
  name: 'todo.list.update',
  attributes: { action: 'update' },
  resourceType: 'link',
});

export function useSelectedSubRoute(subRoutes: SubRoute[]): {
  index: number;
  route?: SubRoute;
  element?: JSX.Element;
} {
  const params = useParams();

  const routes = subRoutes.map(({ path, children }) => ({
    caseSensitive: false,
    path: `${path}/*`,
    element: children,
  }));

  // TODO: remove once react-router updated
  const sortedRoutes = routes.sort((a, b) =>
    // remove "/*" symbols from path end before comparing
    b.path.replace(/\/\*$/, '').localeCompare(a.path.replace(/\/\*$/, '')),
  );

  const element = useRoutes(sortedRoutes) ?? subRoutes[0]?.children;

  // TODO(Rugvip): Once we only support v6 stable we can always prefix
  // This avoids having a double / prefix for react-router v6 beta, which in turn breaks
  // the tab highlighting when using relative paths for the tabs.
  let currentRoute = params['*'] ?? '';
  if (!currentRoute.startsWith('/')) {
    currentRoute = `/${currentRoute}`;
  }

  const [matchedRoute] = matchRoutes(sortedRoutes, currentRoute) ?? [];
  const foundIndex = matchedRoute
    ? subRoutes.findIndex(t => `${t.path}/*` === matchedRoute.route.path)
    : 0;

  return {
    index: foundIndex === -1 ? 0 : foundIndex,
    element,
    route: subRoutes[foundIndex] ?? subRoutes[0],
  };
}

type EntityTabsProps = {
  routes: SubRoute[];
};

export function EntityTabs(props: EntityTabsProps) {
  const permissionApi = useApi(permissionApiRef);

  const { value: routes, loading } = useAsync(async () => {
    const permissionCheckedRoutes: typeof props.routes = [];

    for (const route of props.routes) {
      try {
        await new Promise((resolve) => {
          setTimeout(() => resolve(null), 2500);
        });

        const authResponse = await permissionApi.authorize({
          permission: todoListUpdatePermission,
          resourceRef: route.path,
        });
        if (authResponse.result !== 'ALLOW') {
          continue;
        }

        permissionCheckedRoutes.push(route);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(
          `NavItem: unable to resolve permissions`, error
        );
      }
    }

    return permissionCheckedRoutes;
  }, [props.routes]);

  const { index, route, element } = useSelectedSubRoute(routes || []);

  const tabs = useMemo(
    () =>
      routes?.map(t => {
        const { path, title, group } = t;
        let to = path;
        // Remove trailing /*
        to = to.replace(/\/\*$/, '');
        // And remove leading / for relative navigation
        to = to.replace(/^\//, '');
        return {
          group,
          id: path,
          path: to,
          label: title,
        };
      }),
    [routes],
  );

  return (
    <>
      <EntityTabsList tabs={tabs || []} selectedIndex={index} />
      <EntityTabsPanel>
        <Helmet title={route?.title} />
        {loading ? <Progress /> : null}
        {element}
      </EntityTabsPanel>
    </>
  );
}
