import { createFrontendModule } from '@backstage/frontend-plugin-api';
import {
  EntityContentLayoutBlueprint,
} from '@backstage/plugin-catalog-react/alpha';

import { catalogEntityPage } from './catalogEntityPage';

import { DefaultEntityContentLayout } from './DefaultEntityContentLayout';

export const customEntityContent = createFrontendModule({
  pluginId: 'catalog',
  extensions: [
    catalogEntityPage,
  ],
});

export const customEntityContentOverviewStickyLayoutModule = createFrontendModule({
  pluginId: 'app',
  extensions: [
    EntityContentLayoutBlueprint.make({
      name: 'sticky',
      params: {
        // (optional) defaults the `() => false` filter function
        filter: 'kind:component',
        loader: async () => DefaultEntityContentLayout,
      },
    }),
  ],
});
