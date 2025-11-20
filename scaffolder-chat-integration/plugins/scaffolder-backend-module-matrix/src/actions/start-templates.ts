import { CatalogApi } from '@backstage/catalog-client';
import { ScaffolderApi, TemplateEntityV1beta3 } from '@backstage/plugin-scaffolder-common';
import { createTemplateAction } from '@backstage/plugin-scaffolder-node';

import { getCombinations } from '../utils/getCombinations';

/**
 * Creates an `matrix:start-template` Scaffolder action.
 *
 * @public
 */
export function createStartTemplatesAction({ catalogApi, scaffolderApi }: { catalogApi: CatalogApi; scaffolderApi: ScaffolderApi }) {
  // For more information on how to define custom actions, see
  //   https://backstage.io/docs/features/software-templates/writing-custom-actions
  return createTemplateAction({
    id: 'matrix:start-templates',
    description: 'Start n templates with some parameters',
    supportsDryRun: true,
    schema: {
      input: {
        template: z =>
          z.string({
            description: 'The name of the template to start',
          }),
        // z call with an object that contains array of strings
        matrix: z =>
          z.record(
            z.string(),
            z.array(z.union([z.string(), z.number()])),
          ),
        otherValues: z =>
          z.record(
            z.string(),
            z.union([z.string(), z.number(), z.boolean()]),
          ).optional(),
      },
    },
    async handler(ctx) {
      const combinations = getCombinations(ctx.input.matrix);
      ctx.logger.info(
        `Running example template with parameters: ${ctx.input.template}`,
      );

      let i = 0;
      const total = combinations.length;
      for (const combination of combinations) {
        i++;

        const values = {
          ...combination,
          ...ctx.input.otherValues,
        };
        const secrets = ctx.secrets;

        if (ctx.isDryRun) {
          ctx.logger.info(`[DRY-RUN] Would start software template ${i} / ${total} with parameters ${JSON.stringify(values)}...`);

          // TODO fetch template and run it with scaffolderApi.dryRun
          const template = await catalogApi.getEntityByRef(
            ctx.input.template,
            {
              token: ctx.secrets?.backstageToken,
            }
          ) as TemplateEntityV1beta3 | undefined;

          // FIXME: untested!!!
          if (template && scaffolderApi.dryRun) {
            await scaffolderApi.dryRun({
              template,
              values,
              secrets,
              directoryContents: [],
            }, {
              token: ctx.secrets?.backstageToken,
            });
          }

        } else {
          ctx.logger.info(`Start software template ${i} / ${total} with parameters ${JSON.stringify(values)}`);

          await scaffolderApi.scaffold({
            templateRef: ctx.input.template,
            values,
            secrets,
          }, {
            token: ctx.secrets?.backstageToken,
          });
        }
      }
    },
  });
}
