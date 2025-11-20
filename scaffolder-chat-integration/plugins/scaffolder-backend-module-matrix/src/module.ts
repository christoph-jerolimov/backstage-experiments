import { coreServices, createBackendModule } from "@backstage/backend-plugin-api";
import { CatalogApi, CatalogClient } from '@backstage/catalog-client';
import { ScaffolderApi, ScaffolderClient } from '@backstage/plugin-scaffolder-common';
import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node';

import { createDebugAction } from "./actions/debug";
import { createStartTemplatesAction } from "./actions/start-templates";

/**
 * A backend module that registers the action into the scaffolder
 */
export const scaffolderModule = createBackendModule({
  moduleId: 'example-action',
  pluginId: 'scaffolder',
  register({ registerInit }) {
    registerInit({
      deps: {
        auth: coreServices.auth,
        discoveryApi: coreServices.discovery,
        scaffolderActions: scaffolderActionsExtensionPoint,
      },
      async init({
        auth,
        discoveryApi,
        scaffolderActions,
      }) {
        const catalogApi: CatalogApi = new CatalogClient({ discoveryApi });

        const scaffolderApi: ScaffolderApi = new ScaffolderClient({
          discoveryApi,
        } as any);

        scaffolderActions.addActions(
          createDebugAction(),
          createStartTemplatesAction({ auth, catalogApi, scaffolderApi }),
        );
      }
    });
  },
});
