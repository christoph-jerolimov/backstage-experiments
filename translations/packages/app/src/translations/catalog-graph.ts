import { createTranslationMessages, createTranslationResource } from '@backstage/core-plugin-api/alpha';

import { catalogGraphTranslationRef } from '@backstage/plugin-catalog-graph/alpha';

const de = createTranslationMessages({
  ref: catalogGraphTranslationRef,
  full: true,
  messages: {
    'catalogGraphCard.title': 'Beziehungen',
    'catalogGraphCard.deepLinkTitle': 'Diagramm anzeigen',
    'catalogGraphPage.title': 'Katalog-Diagramm',
    'catalogGraphPage.filterToggleButtonTitle': 'Filter',
    'catalogGraphPage.supportButtonDescription': 'Beginnen Sie mit der Verfolgung Ihrer Komponente, indem Sie sie dem Softwarekatalog hinzufügen.',
    'catalogGraphPage.simplifiedSwitchLabel': 'Vereinfacht',
    'catalogGraphPage.mergeRelationsSwitchLabel': 'Beziehungen zusammenführen',
    'catalogGraphPage.zoomOutDescription': 'Verwenden Sie Pinch & Zoom, um sich im Diagramm zu bewegen. Klicken, um den aktiven Knoten zu ändern; Shift-Klick, um zur Entität zu navigieren.',
    'catalogGraphPage.curveFilter.title': 'Kurve',
    'catalogGraphPage.curveFilter.curveStepBefore': 'Stufen (vorher)',
    'catalogGraphPage.curveFilter.curveMonotoneX': 'Monoton X',
    'catalogGraphPage.directionFilter.title': 'Richtung',
    'catalogGraphPage.directionFilter.leftToRight': 'Links nach rechts',
    'catalogGraphPage.directionFilter.rightToLeft': 'Rechts nach links',
    'catalogGraphPage.directionFilter.topToBottom': 'Oben nach unten',
    'catalogGraphPage.directionFilter.bottomToTop': 'Unten nach oben',
    'catalogGraphPage.maxDepthFilter.title': 'Maximale Tiefe',
    'catalogGraphPage.maxDepthFilter.inputPlaceholder': '∞ Unendlich',
    'catalogGraphPage.maxDepthFilter.clearButtonAriaLabel': 'maximale Tiefe löschen',
    'catalogGraphPage.selectedKindsFilter.title': 'Arten',
    'catalogGraphPage.selectedRelationsFilter.title': 'Beziehungen',
  },
});

export const catalogGraphTranslationResource = createTranslationResource({
  ref: catalogGraphTranslationRef,
  translations: {
    de: () => Promise.resolve({ default: de }),
  },
})
