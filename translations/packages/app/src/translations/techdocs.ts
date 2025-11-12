import { createTranslationMessages, createTranslationResource } from '@backstage/core-plugin-api/alpha';

import { techdocsTranslationRef } from '@backstage/plugin-techdocs/alpha';

const de = createTranslationMessages({
  ref: techdocsTranslationRef,
  full: true,
  messages: {
    'aboutCard.viewTechdocs': 'TechDocs anzeigen',

    // New
    'docsTable.allTitle': 'Alle',
    'docsTable.columns.document': 'Dokument',
    'docsTable.columns.owner': 'Besitzer',
    'docsTable.columns.kind': 'Art',
    'docsTable.columns.type': 'Typ',
    'docsTable.emptyState.title': 'Keine Dokumente zum Anzeigen',
    'docsTable.emptyState.description': 'Erstellen Sie Ihr eigenes Dokument. Schauen Sie sich unsere Einstiegshilfe an.',
    'docsTable.emptyState.readMoreButton': 'Mehr lesen',
    'techDocsBuildLogs.title': 'Build-Details',
    'techDocsBuildLogs.showBuildLogsButton': 'Build-Protokolle anzeigen',
    'techDocsBuildLogs.closeDrawerTooltip': 'Schublade schließen',
    'techDocsBuildLogs.waitingForLogsMessage': 'Warte auf Protokolle...',
    'techDocsPageWrapper.title': 'Dokumentation',
    'techDocsPageWrapper.subtitle': 'Dokumentation verfügbar in {{ organizationName }}',
  },
});

export const techdocsTranslationResource = createTranslationResource({
  ref: techdocsTranslationRef,
  translations: {
    de: () => Promise.resolve({ default: de }),
  },
})
