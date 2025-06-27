import { createBackendPlugin } from '@backstage/backend-plugin-api';

import { actionsRegistryServiceRef } from '@backstage/backend-plugin-api/alpha';

/**
 * actionTestPlugin backend plugin
 *
 * @public
 */
export const actionTestPlugin = createBackendPlugin({
  pluginId: 'action-test',
  register(env) {
    env.registerInit({
      deps: {
        actionsRegistry: actionsRegistryServiceRef,
      },
      async init({ actionsRegistry }) {
        actionsRegistry.register({
          name: 'greet-user',
          title: 'Greet User',
          description: 'Generate a personalized greeting',
          schema: {
            input: z =>
              z.object({
                name: z.string().describe('The name of the person to greet'),
              }),
            output: z =>
              z.object({
                greeting: z.string().describe('The generated greeting'),
              }),
          },
          action: async ({ input }) => ({
            output: { greeting: `Hello ${input.name}!` },
          }),
        });
      },
    });
  },
});
