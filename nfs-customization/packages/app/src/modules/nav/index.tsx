import { useMemo } from 'react';
import { useAsync } from 'react-use';

import { coreExtensionData, createExtension, createExtensionInput, createFrontendModule, IconComponent, NavContentBlueprint, NavContentComponent, NavItemBlueprint, RouteRef, routeResolutionApiRef, useApi } from '@backstage/frontend-plugin-api';

import { createPermission } from '@backstage/plugin-permission-common';
import { permissionApiRef } from '@backstage/plugin-permission-react';

import { SidebarContent } from './Sidebar';
import { Progress } from '@backstage/core-components';

export const todoListUpdatePermission = createPermission({
  name: 'todo.list.update',
  attributes: { action: 'update' },
  resourceType: 'link',
});

// This helps defer rendering until the app is being rendered, which is needed
// because the RouteResolutionApi can't be called until the app has been fully initialized.
function NavContentRenderer(props: {
  Content: NavContentComponent;
  items: Array<{
    title: string;
    icon: IconComponent;
    routeRef: RouteRef<undefined>;
  }>;
}) {
  const permissionApi = useApi(permissionApiRef);
  const routeResolutionApi = useApi(routeResolutionApiRef);

  const { value: items, loading } = useAsync(async () => {
    const permissionCheckedItems = [];

    for (const item of props.items) {
      try {
        await new Promise((resolve) => {
          setTimeout(() => resolve(null), 500);
        });

        const link = routeResolutionApi.resolve(item.routeRef);
        if (!link) {
          // eslint-disable-next-line no-console
          console.warn(
            `NavItemBlueprint: unable to resolve route ref ${item.routeRef}`,
          );
          continue;
        }

        const authResponse = await permissionApi.authorize({
          permission: todoListUpdatePermission,
          resourceRef: link(),
        });
        if (authResponse.result !== 'ALLOW') {
          continue;
        }

        permissionCheckedItems.push({
          to: link(),
          text: item.title,
          icon: item.icon,
          title: item.title,
          routeRef: item.routeRef,
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(
          `NavItem: unable to resolve permissions`, error
        );
      }
    }

    return permissionCheckedItems;
  }, [props.items, routeResolutionApi]);

  // if (loading) {
  //   return <Progress />
  // }
  return <props.Content items={items || []} />;
}

export const AppNav = createExtension({
  name: 'nav',
  attachTo: { id: 'app/layout', input: 'nav' },
  inputs: {
    items: createExtensionInput([NavItemBlueprint.dataRefs.target]),
    content: createExtensionInput([NavContentBlueprint.dataRefs.component], {
      singleton: true,
      // optional: true,
    }),
  },
  output: [coreExtensionData.reactElement],
  *factory({ inputs }) {
    const Content = inputs.content.get(NavContentBlueprint.dataRefs.component);
    
    console.log('items xxx', inputs);
    console.log('items xxx 2', inputs.items.map(item =>
      item.get(NavItemBlueprint.dataRefs.target),
    ));
    console.log('items xxx 3', inputs.items.map(item =>
      item.node.spec.config,
    ));

    const items = inputs.items
      .splice(0)
      .sort((itemA, itemB) => {
        const prioA = (itemA.node.spec.config as any)?.priority ?? 0;
        const prioB = (itemB.node.spec.config as any)?.priority ?? 0;
        return prioA - prioB;
      })
      .map(item =>
        item.get(NavItemBlueprint.dataRefs.target),
      );

    yield coreExtensionData.reactElement(
      <NavContentRenderer
        items={items}
        Content={Content}
      />,
    );
  },
});

export const navModule = createFrontendModule({
  pluginId: 'app',
  extensions: [AppNav, SidebarContent],
});
