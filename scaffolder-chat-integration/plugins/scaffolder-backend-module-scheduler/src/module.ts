import {
  coreServices,
  createBackendModule,
  readSchedulerServiceTaskScheduleDefinitionFromConfig,
  SchedulerServiceTaskInvocationDefinition,
  SchedulerServiceTaskScheduleDefinitionConfig,
} from '@backstage/backend-plugin-api';
import { ConfigReader } from '@backstage/config';
import { ScaffolderApi, ScaffolderClient } from '@backstage/plugin-scaffolder-common';

import { Config } from '../config';

export const scaffolderModuleScheduler = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'scheduler',
  register(reg) {
    reg.registerInit({
      deps: {
        auth: coreServices.auth,
        discoveryApi: coreServices.discovery,
        rootConfig: coreServices.rootConfig,
        logger: coreServices.logger,
        scheduler: coreServices.scheduler,
      },
      async init({ auth, discoveryApi, rootConfig, logger, scheduler }) {
        const scaffolderApi: ScaffolderApi = new ScaffolderClient({
          discoveryApi,
        } as any);

        rootConfig.get<Config>().scaffolder?.scheduled?.map((scheduled, index, { length }) => {

          logger.info(
            `Found scaffolder scheduled config ${index + 1} / ${length}: ${JSON.stringify(scheduled)}`,
          );

          const defaultScheduleConfig: SchedulerServiceTaskScheduleDefinitionConfig = {
            frequency: { trigger: 'manual' },
            timeout: { minutes: 1 },
            initialDelay: { seconds: 10 },
          };

          const schedule = readSchedulerServiceTaskScheduleDefinitionFromConfig(
            new ConfigReader({ ...defaultScheduleConfig, ...scheduled.schedule }),
          );

          logger.info(
            `Schedule config: ${JSON.stringify(scheduled)}`,
          );

          const invocation: SchedulerServiceTaskInvocationDefinition = {
            id: `_scaffolder-scheduled-app-config-index-${index}`,
            fn: async () => {
              const { token } = await auth.getPluginRequestToken({
                onBehalfOf: await auth.getOwnServiceCredentials(),
                targetPluginId: 'scaffolder',
              });

              await scaffolderApi.scaffold({
                templateRef: scheduled.templateRef,
                values: scheduled.values || {},
                secrets: scheduled.secrets,
              }, {
                token,
              });
            },
          };

          scheduler.scheduleTask({ ...schedule, ...invocation });
        });
      },
    });
  },
});
