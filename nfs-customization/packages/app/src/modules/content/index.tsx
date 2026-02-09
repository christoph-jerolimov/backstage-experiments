import { coreExtensionData, createExtensionInput, createFrontendModule, NotFoundErrorPage } from '@backstage/frontend-plugin-api';

import { AppRootWrapperBlueprint, RouterBlueprint } from '@backstage/plugin-app-react';

import { useRoutes } from 'react-router';

// const appWrapper = AppRootWrapperBlueprint.make({
//   params: {
//     component: ({ children }) => {
//       return <div>app wrapper</div>
//     },
//   },
// });

const router = RouterBlueprint.make({
  params: {
    component: ({ children }) => {
      return (
        <div>
          hallo
          {/* {children} */}
        </div>
      );
    },
  },
});

const routerWithOverrides = RouterBlueprint.makeWithOverrides({
  name: 'routes',
  attachTo: { id: 'app/layout', input: 'content' },
  inputs: {
    routes: createExtensionInput([
      coreExtensionData.routePath,
      coreExtensionData.routeRef.optional(),
      coreExtensionData.reactElement,
    ]),
  },
  output: [coreExtensionData.reactElement],
  factory(_originalFactory, context) {
    const Routes = () => {
      const element = useRoutes([
        ...(context.inputs as any).routes.map(route => {
          const routePath = route.get(coreExtensionData.routePath);

          return {
            path:
              routePath === '/'
                ? routePath
                : `${routePath.replace(/\/$/, '')}/*`,

            element: route.get(coreExtensionData.reactElement),
          };
        }),
        {
          path: '*',
          element: <NotFoundErrorPage />,
        },
      ]);

      return element;
    };

    return [coreExtensionData.reactElement(<Routes />)];
  },
});


export const contentModule = createFrontendModule({
  pluginId: 'app',
  extensions: [],
});
