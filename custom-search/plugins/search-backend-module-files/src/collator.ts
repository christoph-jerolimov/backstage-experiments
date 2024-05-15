import { DocumentCollatorFactory, SearchDocument } from '@backstage/plugin-search-common';
import { Readable } from 'stream';
import { readdir, stat } from 'fs/promises';
import { LoggerService } from '@backstage/backend-plugin-api';

export type FilesCollatorFactoryOptions = {
  logger: LoggerService;
};

/**
 * @public
 */
export class FilesCollatorFactory implements DocumentCollatorFactory {
  private readonly logger: LoggerService;

  public readonly type: string = 'search-backend-module-files';

  private constructor(options: FilesCollatorFactoryOptions) {
    this.logger = options.logger.child({ documentType: this.type });
  }

  static fromConfig(options: FilesCollatorFactoryOptions) {
    return new FilesCollatorFactory(options);
  }

  async getCollator() {
    this.logger.info('Create search-backend-module-files collactor...');
    return Readable.from(this.execute());
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
