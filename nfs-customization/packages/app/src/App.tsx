import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { navModule } from './modules/nav';

import npmPlugin from '@backstage-community/plugin-npm/alpha';

export default createApp({
  features: [catalogPlugin, navModule, npmPlugin],
});
