import { DocumentCollatorFactory, SearchDocument } from '@backstage/plugin-search-common';
import { Readable } from 'stream';
import { readdir, stat } from 'fs/promises';
import { LoggerService } from '@backstage/backend-plugin-api';

export type CollatorFactoryOptions = {
  logger: LoggerService;
};

/**
 * Search collator responsible for collecting stack overflow questions to index.
 *
 * @public
 */
export class CollatorFactory implements DocumentCollatorFactory {
  private readonly logger: LoggerService;

  public readonly type: string = 'stack-overflow';

  private constructor(options: CollatorFactoryOptions) {
    this.logger = options.logger.child({ documentType: this.type });
  }

  static fromConfig(options: CollatorFactoryOptions) {
    return new CollatorFactory(options);
  }

  async getCollator() {
    this.logger.info('Run collactor...');
    const x = Readable.from(this.execute());
    this.logger.info('x');
    return x;
  }

  async *execute(): AsyncGenerator<SearchDocument> {
    const files = await readdir('.');
    for (const file of files) {
      const isFile = (await stat(file)).isFile();
      this.logger.info('Found file', { file });
      yield {
        title: file,
        text: isFile ? 'File' : 'Folder',
        location: '/read-file?file=' + encodeURIComponent(file),
      };
    }
  }
}
