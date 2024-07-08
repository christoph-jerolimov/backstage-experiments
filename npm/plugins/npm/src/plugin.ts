import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const npmPlugin = createPlugin({
  id: 'npm',
  routes: {
    root: rootRouteRef,
  },
});

export const NpmPage = npmPlugin.provide(
  createRoutableExtension({
    name: 'NpmPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
