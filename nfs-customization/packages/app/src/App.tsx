import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';

import { navModule } from './modules/nav';
import { contentModule } from './modules/content';

import npmPlugin from '@backstage-community/plugin-npm/alpha';
import { customEntityContent, customEntityContentOverviewStickyLayoutModule } from './modules/catalog-layout';

export default createApp({
  features: [
    catalogPlugin,
    customEntityContent,
    customEntityContentOverviewStickyLayoutModule,
    navModule,
    contentModule,
    npmPlugin,
  ],
});
