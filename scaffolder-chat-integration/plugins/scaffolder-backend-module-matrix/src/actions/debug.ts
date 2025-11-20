import { createTemplateAction } from '@backstage/plugin-scaffolder-node';

import { getCombinations } from '../utils/getCombinations';

/**
 * Creates an `matrix:debug` Scaffolder action.
 *
 * @public
 */
export function createDebugAction() {
  // For more information on how to define custom actions, see
  //   https://backstage.io/docs/features/software-templates/writing-custom-actions
  return createTemplateAction({
    id: 'matrix:debug',
    description: 'Debug n templates with some parameters',
    supportsDryRun: true,
    schema: {
      input: {
        matrix: z =>
          z.record(
            z.string(),
            z.array(z.union([z.string(), z.number(), z.boolean()])),
          ),
      },
    },
    async handler(ctx) {
      ctx.logger.info(
        `Debug output for matrix input parameter: ${JSON.stringify(ctx.input.matrix)}`,
      );

      const combinations = getCombinations(ctx.input.matrix);

      let i = 0;
      const total = combinations.length;
      for (const combination of combinations) {
        i++;
        ctx.logger.info(`Debug output: Combination ${i} / ${total}: ${JSON.stringify(combination)}`);
      }

    },
  });
}
