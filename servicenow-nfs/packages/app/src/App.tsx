import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { navModule } from './modules/nav';

import servicenowPlugin from '@backstage-community/plugin-servicenow/alpha';

export default createApp({
  features: [catalogPlugin, navModule, servicenowPlugin],
});
