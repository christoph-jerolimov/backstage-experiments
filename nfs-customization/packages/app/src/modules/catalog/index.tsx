import { lazy as reactLazy } from 'react';

import {
  coreExtensionData,
  createExtensionInput,
  ExtensionBoundary,
} from '@backstage/frontend-plugin-api';
import {
  EntityCardBlueprint,
  EntityContentBlueprint,
  EntityContentLayoutBlueprint,
  EntityContentLayoutProps,
} from '@backstage/plugin-catalog-react/alpha';
// import { buildFilterFn } from './filter/FilterWrapper';
import { useEntity } from '@backstage/plugin-catalog-react';
import { buildFilterFn } from './FilterWrapper';

export const catalogOverviewEntityContent =
  EntityContentBlueprint.makeWithOverrides({
    name: 'overview',
    inputs: {
      layouts: createExtensionInput([
        EntityContentLayoutBlueprint.dataRefs.filterFunction.optional(),
        EntityContentLayoutBlueprint.dataRefs.filterExpression.optional(),
        EntityContentLayoutBlueprint.dataRefs.component,
      ]),
      cards: createExtensionInput([
        coreExtensionData.reactElement,
        EntityContentBlueprint.dataRefs.filterFunction.optional(),
        EntityContentBlueprint.dataRefs.filterExpression.optional(),
        EntityCardBlueprint.dataRefs.type.optional(),
      ]),
    },
    factory: (originalFactory, { node, inputs }) => {
      return originalFactory({
        path: '/',
        title: 'Overview',
        group: 'overview',
        loader: async () => {
          const LazyDefaultLayoutComponent = reactLazy(() =>
            import('./DefaultEntityContentLayout').then(m => ({
              default: m.DefaultEntityContentLayout,
            })),
          );

          const DefaultLayoutComponent = (props: EntityContentLayoutProps) => {
            return (
              <ExtensionBoundary node={node}>
                <LazyDefaultLayoutComponent {...props} />
              </ExtensionBoundary>
            );
          };

          const layouts = [
            ...inputs.layouts.map(layout => ({
              filter: buildFilterFn(
                layout.get(
                  EntityContentLayoutBlueprint.dataRefs.filterFunction,
                ),
                layout.get(
                  EntityContentLayoutBlueprint.dataRefs.filterExpression,
                ),
              ),
              Component: layout.get(
                EntityContentLayoutBlueprint.dataRefs.component,
              ),
            })),
            {
              filter: buildFilterFn(),
              Component: DefaultLayoutComponent,
            },
          ];

          const cards = inputs.cards.map(card => ({
            element: card.get(coreExtensionData.reactElement),
            type: card.get(EntityCardBlueprint.dataRefs.type),
            filter: buildFilterFn(
              card.get(EntityContentBlueprint.dataRefs.filterFunction),
              card.get(EntityContentBlueprint.dataRefs.filterExpression),
            ),
          }));

          const Component = () => {
            const { entity } = useEntity();

            // Use the first layout that matches the entity filter
            const layout = layouts.find(l => l.filter(entity));
            if (!layout) {
              throw new Error('No layout found for entity'); // Shouldn't be able to happen
            }

            return (
              <layout.Component
                cards={cards.filter(card => card.filter(entity))}
              />
            );
          };

          return <Component />;
        },
      });
    },
  });
