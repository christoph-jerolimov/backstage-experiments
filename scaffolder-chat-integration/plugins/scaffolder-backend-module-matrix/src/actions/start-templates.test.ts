import { CatalogApi } from '@backstage/catalog-client';
import { ScaffolderApi } from '@backstage/plugin-scaffolder-common';
import { createMockActionContext } from '@backstage/plugin-scaffolder-node-test-utils'

import { createStartTemplatesAction } from './start-templates';

const mockCatalogApi = {
};

const mockScaffolderApi = {
  scaffold: jest.fn(),
};

describe('createStartTemplatesAction', () => {
  it('should call action', async () => {
    const action = createStartTemplatesAction({
      catalogApi: mockCatalogApi as never as CatalogApi,
      scaffolderApi: mockScaffolderApi as never as ScaffolderApi,
    });

    await expect(action.handler(createMockActionContext({
      input: {
        template: 'test',
        matrix: {
          param1: ['value1', 'value2'],
          param2: [1, 2, 3],
        },
      },
    }))).resolves.toBeUndefined()

    expect(mockScaffolderApi.scaffold).toHaveBeenCalledTimes(6);
  });
});
