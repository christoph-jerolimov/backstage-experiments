import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { apiDocsPlugin, ApiExplorerPage } from '@backstage/plugin-api-docs';
import {
  CatalogEntityPage,
  CatalogIndexPage,
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
  OAuthRequestDialog,
  SignInPage,
} from '@backstage/core-components';
import { createApp } from '@backstage/app-defaults';
import { AppRouter, FlatRoutes } from '@backstage/core-app-api';
import { CatalogGraphPage } from '@backstage/plugin-catalog-graph';
import { RequirePermission } from '@backstage/plugin-permission-react';
import { catalogEntityCreatePermission } from '@backstage/plugin-catalog-common/alpha';

import { getAllThemes } from '@red-hat-developer-hub/backstage-plugin-theme';

import ButtonV4 from '@material-ui/core/Button';
import ButtonV5 from '@mui/material/Button';
import AutocompleteV4 from '@material-ui/lab/Autocomplete';
import AutocompleteV5 from '@mui/material/Autocomplete';
import TextFieldV4 from '@material-ui/core/TextField';
import TextFieldV5 from '@mui/material/TextField';

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
  themes: getAllThemes(),
});

const ButtonTest = () => {
  const movies = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
  ];

  return (
    <div>
      <h1>Material UI v4 buttons</h1>
      <div>
        <ButtonV4 variant="contained">Default</ButtonV4>
        <ButtonV4 variant="contained" color="primary">
          Primary
        </ButtonV4>
        <ButtonV4 variant="contained" color="secondary">
          Secondary
        </ButtonV4>
        <ButtonV4 variant="contained" disabled>
          Disabled
        </ButtonV4>
        <ButtonV4 variant="contained" color="primary" href="#contained-buttons">
          Link
        </ButtonV4>
      </div>

      <h1>MUI v5 buttons</h1>
      <div>
        <ButtonV5 variant="contained">Default</ButtonV5>
        <ButtonV5 variant="contained" color="primary">
          Primary
        </ButtonV5>
        <ButtonV5 variant="contained" color="secondary">
          Secondary
        </ButtonV5>
        <ButtonV5 variant="contained" disabled>
          Disabled
        </ButtonV5>
        <ButtonV5 variant="contained" color="primary" href="#contained-buttons">
          Link
        </ButtonV5>
      </div>

      <h1>Material UI v4 Autocomplete</h1>
      <div>
        <AutocompleteV4
          options={movies}
          renderInput={(params) => <TextFieldV4 {...params} label="Movie" />}
          getOptionLabel={(option) => option.title}
        />
      </div>

      <h1>MUI v5 Autocomplete</h1>
      <div>
        <AutocompleteV5
          options={movies}
          renderInput={(params) => <TextFieldV5 {...params} label="Movie" />}
          getOptionLabel={(option) => option.title}
        />
      </div>
    </div>
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
    <Route path="/button-test" element={<ButtonTest />} />
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
