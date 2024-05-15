import { coreServices, createBackendModule } from '@backstage/backend-plugin-api';
import { searchIndexRegistryExtensionPoint } from '@backstage/plugin-search-backend-node/alpha';
import { CollatorFactory } from './collator';

export const searchBackendModule = createBackendModule({
  pluginId: 'search',
  moduleId: 'search-backend-module-files',
  register(reg) {
    reg.registerInit({
      deps: {
        logger: coreServices.logger,
        scheduler: coreServices.scheduler,
        indexRegistry: searchIndexRegistryExtensionPoint,
      },
      async init({ logger, scheduler, indexRegistry }) {
        logger.info('Init search-backend-module-files...');

        const schedule = {
          frequency: { seconds: 10 },
          timeout: { seconds: 15 },
          initialDelay: { seconds: 3 },
        };

        indexRegistry.addCollator({
          schedule: scheduler.createScheduledTaskRunner(schedule),
          factory: CollatorFactory.fromConfig({
            logger,
          }),
        });
      },
    });
  },
});
