import { createChatAction } from './chat';
import {createMockActionContext} from '@backstage/plugin-scaffolder-node-test-utils'

describe('createChatAction', () => {
  it('should call action', async () => {
    const action = createChatAction();

    await expect(action.handler(createMockActionContext({
      input: {
        prompt: 'test',
      },
    }))).resolves.toBeUndefined()
  });

  it('should fail when passing foo', async () => {
    const action = createChatAction();

    await expect(action.handler(createMockActionContext({
      input: {
        prompt: 'foo',
      },
    }))).rejects.toThrow("prompt cannot be 'foo'")
  });
});
