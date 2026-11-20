import {
  createFrontendPlugin,
  PageBlueprint,
} from '@backstage/frontend-plugin-api';

import { rootRouteRef } from './routes';

export const page = PageBlueprint.make({
  params: {
    path: '/n-pages',
    routeRef: rootRouteRef,
    loader: () =>
      import('./components/TodoPage').then(m => (
        <m.TodoPage />
      )),
  },
});

export const nPagesPlugin = createFrontendPlugin({
  pluginId: 'n-pages',
  info: { packageJson: () => import('../package.json') },
  extensions: [page],
  routes: {
    root: rootRouteRef,
  }
});
