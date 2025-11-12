import { createTranslationMessages, createTranslationResource } from '@backstage/core-plugin-api/alpha';

import { apiDocsTranslationRef } from '@backstage/plugin-api-docs/alpha';

const de = createTranslationMessages({
  ref: apiDocsTranslationRef,
  full: true,
  messages: {
    'apiDefinitionDialog.closeButtonTitle': 'Schließen',
    'apiDefinitionDialog.tabsAriaLabel': 'API-Definitionsoptionen',
    'apiDefinitionDialog.toggleButtonAriaLabel': 'API-Definitionsdialog umschalten',
    'defaultApiExplorerPage.title': 'APIs',
    'defaultApiExplorerPage.subtitle': '{{orgName}} API-Explorer',
    'defaultApiExplorerPage.pageTitleOverride': 'APIs',
    'defaultApiExplorerPage.createButtonTitle': 'Bestehende API registrieren',
    'defaultApiExplorerPage.supportButtonTitle': 'Alle Ihre APIs',
    'consumedApisCard.error.title': 'APIs konnten nicht geladen werden',
    'consumedApisCard.title': 'Genutzte APIs',
    'consumedApisCard.emptyContent.title': 'Dieses {{entity}} nutzt keine APIs.',
    'hasApisCard.error.title': 'APIs konnten nicht geladen werden',
    'hasApisCard.title': 'APIs',
    'hasApisCard.emptyContent.title': 'Dieses {{entity}} enthält keine APIs.',
    'providedApisCard.error.title': 'APIs konnten nicht geladen werden',
    'providedApisCard.title': 'Bereitgestellte APIs',
    'providedApisCard.emptyContent.title': 'Dieses {{entity}} stellt keine APIs bereit.',
    'apiEntityColumns.typeTitle': 'Typ',
    'apiEntityColumns.apiDefinitionTitle': 'API-Definition',
    'consumingComponentsCard.error.title': 'Komponenten konnten nicht geladen werden',
    'consumingComponentsCard.title': 'Nutzende Komponenten',
    'consumingComponentsCard.emptyContent.title': 'Keine Komponente nutzt diese API.',
    'providingComponentsCard.error.title': 'Komponenten konnten nicht geladen werden',
    'providingComponentsCard.title': 'Bereitstellende Komponenten',
    'providingComponentsCard.emptyContent.title': 'Keine Komponente stellt diese API bereit.',
    apisCardHelpLinkTitle: 'Erfahren Sie, wie Sie dies ändern',

    // New
    ...{
      'apiDefinitionCard.error.title': 'API konnte nicht abgerufen werden',
      'apiDefinitionCard.rawButtonTitle': 'Roh',
      'apiDefinitionDialog.rawButtonTitle': 'Roh',
    },
  },
});

export const apiDocsTranslationResource = createTranslationResource({
  ref: apiDocsTranslationRef,
  translations: {
    de: () => Promise.resolve({ default: de }),
  },
})
