import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { apiDocsPlugin, ApiExplorerPage } from '@backstage/plugin-api-docs';
import {
  CatalogEntityPage,
  CatalogIndexPage,
  CatalogTable,
  catalogPlugin,
} from '@backstage/plugin-catalog';
import {
  CatalogImportPage,
  catalogImportPlugin,
} from '@backstage/plugin-catalog-import';
import { ScaffolderPage, scaffolderPlugin } from '@backstage/plugin-scaffolder';
import { orgPlugin } from '@backstage/plugin-org';
import { SearchPage } from '@backstage/plugin-search';
import {
  TechDocsIndexPage,
  techdocsPlugin,
  TechDocsReaderPage,
} from '@backstage/plugin-techdocs';
import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';
import { UserSettingsPage } from '@backstage/plugin-user-settings';
import { apis } from './apis';
import { entityPage } from './components/catalog/EntityPage';
import { searchPage } from './components/search/SearchPage';
import { Root } from './components/Root';

import {
  AlertDisplay,
  Content,
  OAuthRequestDialog,
  PageWithHeader,
  Select,
  SignInPage,
} from '@backstage/core-components';
import { createApp } from '@backstage/app-defaults';
import { AppRouter, FlatRoutes } from '@backstage/core-app-api';
import { CatalogGraphPage } from '@backstage/plugin-catalog-graph';
import { RequirePermission } from '@backstage/plugin-permission-react';
import { catalogEntityCreatePermission } from '@backstage/plugin-catalog-common/alpha';

import { EntityKindPicker, UserListPicker, EntityOwnerPicker, EntityLifecyclePicker, EntityTagPicker, EntityListProvider, CatalogFilterLayout, useEntityTypeFilter } from '@backstage/plugin-catalog-react';
import { Box } from '@material-ui/core';

const app = createApp({
  apis,
  bindRoutes({ bind }) {
    bind(catalogPlugin.externalRoutes, {
      createComponent: scaffolderPlugin.routes.root,
      viewTechDoc: techdocsPlugin.routes.docRoot,
      createFromTemplate: scaffolderPlugin.routes.selectedTemplate,
    });
    bind(apiDocsPlugin.externalRoutes, {
      registerApi: catalogImportPlugin.routes.importPage,
    });
    bind(scaffolderPlugin.externalRoutes, {
      registerComponent: catalogImportPlugin.routes.importPage,
      viewTechDoc: techdocsPlugin.routes.docRoot,
    });
    bind(orgPlugin.externalRoutes, {
      catalogIndex: catalogPlugin.routes.catalogIndex,
    });
  },
  components: {
    SignInPage: props => <SignInPage {...props} auto providers={['guest']} />,
  },
});

enum BackstagePluginTypes {
  Meta = 'backstage-plugin',
  Frontend = 'backstage-frontend-plugin',
  Backend = 'backstage-backend-plugin',
  CommonLibrary = 'backstage-common-library',
  NodeLibrary = 'backstage-node-library',
}

export const PluginTypePicker = () => {
  const { availableTypes, selectedTypes, setSelectedTypes } = useEntityTypeFilter();

  React.useEffect(() => {
    setSelectedTypes(['backstage-plugin']);
  }, [setSelectedTypes]);

  if (availableTypes.length === 0) return null;

  const items: Array<{ label: string, value: string }> = [
    { label: 'All types', value: 'all' },
    { label: 'Meta', value: BackstagePluginTypes.Meta },
    { label: 'Frontend', value: BackstagePluginTypes.Frontend },
    { label: 'Backend', value: BackstagePluginTypes.Backend },
    { label: 'Common library', value: BackstagePluginTypes.CommonLibrary },
    { label: 'Node library', value: BackstagePluginTypes.NodeLibrary },
  ];

  return (
    <Box pb={1} pt={1}>
      <Select
        label={'Plugin type'}
        items={items}
        selected={(items.length > 1 ? selectedTypes[0] : undefined) ?? 'all'}
        onChange={value =>
          setSelectedTypes(value === 'all' ? [BackstagePluginTypes.Meta, BackstagePluginTypes.Frontend, BackstagePluginTypes.Backend, BackstagePluginTypes.CommonLibrary, BackstagePluginTypes.NodeLibrary] : [String(value)])
        }
      />
    </Box>
  );
}

export const PluginsPage = () => {
  return (
    <PageWithHeader
      themeId="plugins"
      title="Plugins"
      pageTitleOverride="APIs"
    >
      <Content>
        <EntityListProvider>
          <CatalogFilterLayout>
            <CatalogFilterLayout.Filters>
              <EntityKindPicker initialFilter="component" hidden />
              <PluginTypePicker />
              <UserListPicker />
              <EntityOwnerPicker />
              <EntityLifecyclePicker />
              <EntityTagPicker />
            </CatalogFilterLayout.Filters>
            <CatalogFilterLayout.Content>
              <CatalogTable />
            </CatalogFilterLayout.Content>
          </CatalogFilterLayout>
        </EntityListProvider>
      </Content>
    </PageWithHeader>
  );

}

const routes = (
  <FlatRoutes>
    <Route path="/" element={<Navigate to="catalog" />} />

    <Route path="/catalog" element={<CatalogIndexPage />} />
    <Route
      path="/catalog/:namespace/:kind/:name"
      element={<CatalogEntityPage />}
    >
      {entityPage}
    </Route>

    <Route path="/plugins" element={<PluginsPage />} />
    <Route
      path="/plugins/:namespace/:kind/:name"
      element={<CatalogEntityPage />}
    >
      {entityPage}
    </Route>

    <Route path="/docs" element={<TechDocsIndexPage />} />
    <Route
      path="/docs/:namespace/:kind/:name/*"
      element={<TechDocsReaderPage />}
    >
      <TechDocsAddons>
        <ReportIssue />
      </TechDocsAddons>
    </Route>
    <Route path="/create" element={<ScaffolderPage />} />
    <Route path="/api-docs" element={<ApiExplorerPage />} />
    <Route
      path="/catalog-import"
      element={
        <RequirePermission permission={catalogEntityCreatePermission}>
          <CatalogImportPage />
        </RequirePermission>
      }
    />
    <Route path="/search" element={<SearchPage />}>
      {searchPage}
    </Route>
    <Route path="/settings" element={<UserSettingsPage />} />
    <Route path="/catalog-graph" element={<CatalogGraphPage />} />
  </FlatRoutes>
);

export default app.createRoot(
  <>
    <AlertDisplay />
    <OAuthRequestDialog />
    <AppRouter>
      <Root>{routes}</Root>
    </AppRouter>
  </>,
);
