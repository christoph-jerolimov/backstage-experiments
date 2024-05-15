import { coreServices, createBackendModule } from '@backstage/backend-plugin-api';
import { catalogProcessingExtensionPoint } from '@backstage/plugin-catalog-node/alpha';
import { FilesProvider } from './provider';

export const catalogModuleFiles = createBackendModule({
  pluginId: 'catalog',
  moduleId: 'files',
  register(reg) {
    reg.registerInit({
      deps: {
        logger: coreServices.logger,
        catalog: catalogProcessingExtensionPoint,
        scheduler: coreServices.scheduler,
      },
      async init({ logger, catalog, scheduler }) {
        logger.info('Init catalogModuleFiles...');

        const provider = new FilesProvider({ logger });

        catalog.addEntityProvider(provider);

        const schedule = {
          frequency: { seconds: 10 },
          timeout: { seconds: 15 },
          initialDelay: { seconds: 3 },
        };

        scheduler.scheduleTask({
          ...schedule,
          id: 'catalog:module:files',
          fn: async () => {
            try {
              await provider.run();
            } catch (error) {
              logger.error('catalogModuleFiles failed:', error as Error);
              throw error;
            }
          },
        });
      },
    });
  },
});
