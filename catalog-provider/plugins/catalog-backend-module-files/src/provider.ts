import { readdir } from 'fs/promises';
import { LoggerService } from '@backstage/backend-plugin-api';
import {
  EntityProvider,
  EntityProviderConnection,
  DeferredEntity,
} from '@backstage/plugin-catalog-node';
import {
  ANNOTATION_LOCATION,
  ANNOTATION_ORIGIN_LOCATION,
  DEFAULT_NAMESPACE,
  ComponentEntityV1alpha1,
} from '@backstage/catalog-model'

export type FilesProviderOptions = {
  logger: LoggerService;
};

export class FilesProvider implements EntityProvider {
  private readonly logger: LoggerService;

  private connection?: EntityProviderConnection;

  public constructor(options: FilesProviderOptions) {
    this.logger = options.logger.child({ type: this.getProviderName() });
  }

  getProviderName(): string {
    return `catalog-backend-module-files`;
  }

  async connect(connection: EntityProviderConnection): Promise<void> {
    this.connection = connection;
  }

  async run(): Promise<void> {
    this.logger.info('run');
    const files = await readdir('.');
    this.logger.info('Found files', { files });

    const entities = files.map<DeferredEntity>(file => {
      const locationKey = `${this.getProviderName()}:${file}`;
      const location = `file:${file}`;

      const entity: ComponentEntityV1alpha1 = {
        apiVersion: 'backstage.io/v1alpha1',
        kind: 'Component',
        metadata: {
          name: file,
          namespace: DEFAULT_NAMESPACE,
          annotations: {
            [ANNOTATION_LOCATION]: location,
            [ANNOTATION_ORIGIN_LOCATION]: location,
          },
        },
        spec: {
          type: 'file',
          lifecycle: 'production',
          owner: 'guests',
        },
      };
      return {
        locationKey,
        entity,
      };
    });

    this.logger.info('Apply entities...');

    await this.connection!.applyMutation({
      type: 'full',
      entities,
    });

    this.logger.info('Done!');
  }
}
