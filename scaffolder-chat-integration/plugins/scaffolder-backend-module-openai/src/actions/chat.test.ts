import { createMockActionContext } from '@backstage/plugin-scaffolder-node-test-utils'

import { createChatAction } from './chat';

jest.mock('openai', () => {
  return jest.fn().mockImplementation(() => ({
    responses: {
      create: async () => ({
        model: 'a-model',
        output_text: 'generated text',
      }),
    },
  }));
});

describe('createChatAction', () => {
  it('should call action', async () => {
    const action = createChatAction();

    await expect(action.handler(createMockActionContext({
      input: {
        prompt: 'test',
      },
    }))).resolves.toBeUndefined()
  });
});
