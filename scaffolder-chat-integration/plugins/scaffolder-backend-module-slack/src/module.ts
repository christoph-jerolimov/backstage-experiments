import { coreServices, createBackendModule } from "@backstage/backend-plugin-api";
import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node';

import {
  createSendSlackMessageViaSlackApiAction,
  createSendSlackMessageViaWebhookAction,
} from '@mdude2314/backstage-plugin-scaffolder-backend-module-slack';

/**
 * A backend module that registers the action into the scaffolder
 */
export const scaffolderModule = createBackendModule({
  moduleId: 'slack-actions',
  pluginId: 'scaffolder',
  register({ registerInit }) {
    registerInit({
      deps: {
        rootConfig: coreServices.rootConfig,
        scaffolderActions: scaffolderActionsExtensionPoint
      },
      async init({ rootConfig, scaffolderActions}) {
        scaffolderActions.addActions(
          createSendSlackMessageViaSlackApiAction({ config: rootConfig }) as any,
          createSendSlackMessageViaWebhookAction({ config: rootConfig }) as any,
        );
      }
    });
  },
})
