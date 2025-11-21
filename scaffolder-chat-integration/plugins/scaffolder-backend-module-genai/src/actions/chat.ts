import { createTemplateAction } from '@backstage/plugin-scaffolder-node';

import { GoogleGenAI } from "@google/genai";

/**
 * Creates an `openai:chat` scaffolder action.
 *
 * @public
 */
export function createChatAction() {
  return createTemplateAction({
    id: 'genai:chat',
    description: 'Triggers a chat',
    schema: {
      input: {
        prompt: z =>
          z.string({
            description: 'User prompt to send to the OpenAI API for text generation',
          }),
      },
      output: {
        text: z =>
          z.string({
            description: 'User prompt to send to the OpenAI API for text generation',
          }).optional(),
      },
    },
    async handler(ctx) {
      ctx.logger.info(
        `Running example template with parameters: ${ctx.input.prompt}`,
      );

      if (ctx.input.prompt === 'foo') {
        throw new Error(`prompt cannot be 'foo'`);
      }

      const genai = new GoogleGenAI({});
      const response = await genai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: ctx.input.prompt,
      });
      ctx.logger.info(
        `Running example template with parameters: ${response.text}`,
      );

      ctx.output('text', response.text);
    },
  });
}
