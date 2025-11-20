import { createMockActionContext } from '@backstage/plugin-scaffolder-node-test-utils'

import { createDebugAction } from './debug';

describe('createDebugAction', () => {
  it('should call action', async () => {
    const action = createDebugAction();

    await expect(action.handler(createMockActionContext({
      input: {
        matrix: {
          param1: ['value1', 'value2'],
          param2: [1, 2, 3],
        },
      },
    }))).resolves.toBeUndefined()
  });
});
