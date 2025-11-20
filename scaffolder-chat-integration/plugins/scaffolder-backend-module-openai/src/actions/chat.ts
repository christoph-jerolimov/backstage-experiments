import { createTemplateAction } from '@backstage/plugin-scaffolder-node';

import OpenAI from 'openai';

/**
 * Creates an `openai:chat` scaffolder action.
 *
 * @public
 */
export function createChatAction() {
  return createTemplateAction({
    id: 'openai:chat',
    description: 'Triggers a chat',
    schema: {
      input: {
        prompt: z =>
          z.string({
            description: 'User prompt to send to the OpenAI API for text generation',
          }),
      },
      output: {
        model: z =>
          z.string({
            description: 'The model used by OpenAI to generate the text',
          }),
        text: z =>
          z.string({
            description: 'User prompt to send to the OpenAI API for text generation',
          }),
      },
    },
    async handler(ctx) {
      ctx.logger.info(
        `Running example template with parameters: ${ctx.input.prompt}`,
      );

      if (ctx.input.prompt === 'foo') {
        throw new Error(`prompt cannot be 'foo'`);
      }

      const client = new OpenAI();
      const response = await client.responses.create({
          model: 'gpt-5-nano',
          input: ctx.input.prompt,
      });
      ctx.logger.info(
        `Running example template with parameters: ${response.output_text}`,
      );

      ctx.output('model', response.model);
      ctx.output('text', response.output_text);
    },
  });
}
