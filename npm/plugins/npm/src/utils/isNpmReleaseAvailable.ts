import { type Entity } from '@backstage/catalog-model';

import { NPM_PACKAGE_ANNOTATION } from '../annotations';

export const isNpmReleaseAvailable = (entity: Entity): boolean => {
  return Boolean(entity.metadata.annotations?.[NPM_PACKAGE_ANNOTATION]);
};
