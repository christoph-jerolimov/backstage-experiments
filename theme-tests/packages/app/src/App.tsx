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
import { TechRadarPage } from '@backstage/plugin-tech-radar';
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

import { AlertDisplay, OAuthRequestDialog } from '@backstage/core-components';
import { createApp } from '@backstage/app-defaults';
import { AppRouter, FlatRoutes } from '@backstage/core-app-api';
import { CatalogGraphPage } from '@backstage/plugin-catalog-graph';
import { RequirePermission } from '@backstage/plugin-permission-react';
import { catalogEntityCreatePermission } from '@backstage/plugin-catalog-common/alpha';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LightIcon from '@material-ui/icons/Brightness4';
import DarkIcon from '@material-ui/icons/Brightness7';

import ButtonV4 from '@material-ui/core/Button';
import ButtonV5 from '@mui/material/Button';

import {
  createTheme,
  genPageTheme,
  lightTheme,
  darkTheme,
} from '@backstage/theme';

const myLightTheme = createTheme({
  palette: {
    ...lightTheme.palette,
    primary: {
      main: '#343b58',
    },
    secondary: {
      main: '#565a6e',
    },
    error: {
      main: '#8c4351',
    },
    warning: {
      main: '#8f5e15',
    },
    info: {
      main: '#34548a',
    },
    success: {
      main: '#485e30',
    },
    background: {
      default: '#d5d6db',
      paper: '#d5d6db',
    },
    banner: {
      info: '#34548a',
      error: '#8c4351',
      text: '#343b58',
      link: '#565a6e',
    },
    errorBackground: '#8c4351',
    warningBackground: '#8f5e15',
    infoBackground: '#343b58',
    navigation: {
      background: '#343b58',
      indicator: '#8f5e15',
      color: '#d5d6db',
      selectedColor: '#ffffff',
    },
  },
  defaultPageTheme: 'all',
  // fontFamily: 'Comic Sans MS',
  /* below drives the header colors */
  pageTheme: {
    all: genPageTheme({
      colors: ['#343b58'],
      shape: 'url("")',
      options: {
        fontColor: 'white',
      }
    }),
  },
});

const myDarkTheme = createTheme({
  palette: {
    ...darkTheme.palette,
    secondary: {
      main: '#565a6e',
    },
    error: {
      main: '#8c4351',
    },
    warning: {
      main: '#8f5e15',
    },
    info: {
      main: '#34548a',
    },
    success: {
      main: '#485e30',
    },
    // background: {
    //   default: '#d5d6db',
    //   paper: '#d5d6db',
    // },
    banner: {
      info: '#34548a',
      error: '#8c4351',
      text: '#343b58',
      link: '#565a6e',
    },
    errorBackground: '#8c4351',
    warningBackground: '#8f5e15',
    infoBackground: '#343b58',
    navigation: {
      background: '#343b58',
      indicator: '#8f5e15',
      color: '#d5d6db',
      selectedColor: '#ffffff',
    },
  },
  defaultPageTheme: 'all',
  // fontFamily: 'Comic Sans MS',
  /* below drives the header colors */
  pageTheme: {
    all: genPageTheme({
      colors: ['#343b58'],
      shape: 'url("")',
      options: {
        fontColor: 'white',
      }
    }),
  },
});

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
  themes: [
    {
      id: 'my-light-theme',
      title: 'My Light Theme',
      variant: 'light',
      icon: <LightIcon />,
      Provider: ({ children }) => (
        <ThemeProvider theme={myLightTheme}>
          <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
      ),
    },
    {
      id: 'my-dark-theme',
      title: 'My Dark Theme',
      variant: 'dark',
      icon: <DarkIcon />,
      Provider: ({ children }) => (
        <ThemeProvider theme={myDarkTheme}>
          <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
      ),
    }
  ]
});

const ButtonTest = () => {
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
      path="/tech-radar"
      element={<TechRadarPage width={1500} height={800} />}
    />
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
