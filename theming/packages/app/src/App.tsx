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

import LightIcon from '@material-ui/icons/WbSunnySharp';
import DarkIcon from '@material-ui/icons/Brightness2';

import ButtonV4 from '@material-ui/core/Button';
import ButtonV5 from '@mui/material/Button';
import AutocompleteV4 from '@material-ui/lab/Autocomplete';
import AutocompleteV5 from '@mui/material/Autocomplete';
import TextFieldV4 from '@material-ui/core/TextField';
import TextFieldV5 from '@mui/material/TextField';

import { AppTheme } from '@backstage/core-plugin-api';
import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes as backstagePalettes,
  defaultComponentThemes as backstageComponents,
  themes as backstageThemes,
  UnifiedThemeOptions,
  UnifiedThemeProvider,
} from '@backstage/theme';

import RedHatDisplayVFwoff2 from './assets/fonts/RedHatDisplay/RedHatDisplayVF.woff2';
import RedHatDisplayVFItalicwoff2 from './assets/fonts/RedHatDisplay/RedHatDisplayVF-Italic.woff2';
import RedHatTextVFwoff2 from './assets/fonts/RedHatText/RedHatTextVF.woff2';
import RedHatTextVFItalicwoff2 from './assets/fonts/RedHatText/RedHatTextVF-Italic.woff2';
import RedHatMonoVFwoff2 from './assets/fonts/RedHatMono/RedHatMonoVF.woff2';
import RedHatMonoVFItalicwoff2 from './assets/fonts/RedHatMono/RedHatMonoVF-Italic.woff2';
import { CSSObject } from '@mui/material';

const RedHatDisplayVF = {
  fontFamily: 'RedHatDisplay',
  src: `url(${RedHatDisplayVFwoff2}) format('woff2-variations')`,
  fontWeight: '300 900',
  fontStyle: 'normal',
  fontDisplay: 'fallback',
};

const RedHatDisplayVFItalic = {
  fontFamily: 'RedHatDisplay',
  src: `url(${RedHatDisplayVFItalicwoff2}) format('woff2-variations')`,
  fontWeight: '300 900',
  fontStyle: 'italic',
  fontDisplay: 'fallback',
};

const RedHatTextVF = {
  fontFamily: 'RedHatText',
  src: `url(${RedHatTextVFwoff2}) format('woff2-variations')`,
  fontWeight: '300 700',
  fontStyle: 'normal',
  fontDisplay: 'fallback',
};

const RedHatTextVFItalic = {
  fontFamily: 'RedHatText',
  src: `url(${RedHatTextVFItalicwoff2}) format('woff2-variations')`,
  fontWeight: '300 700',
  fontStyle: 'italic',
  fontDisplay: 'fallback',
};

const RedHatMonoVF = {
  fontFamily: 'RedHatMono',
  src: `url(${RedHatMonoVFwoff2}) format('woff2-variations')`,
  fontWeight: '300 700',
  fontStyle: 'normal',
  fontDisplay: 'fallback',
};

const RedHatMonoVFItalic = {
  fontFamily: 'RedHatMono',
  src: `url(${RedHatMonoVFItalicwoff2}) format('woff2-variations')`,
  fontWeight: '300 700',
  fontStyle: 'italic',
  fontDisplay: 'fallback',
};

const redHatFonts = {
  text: [
    'RedHatText',
    '"Helvetica Neue"',
    '-apple-system',
    '"Segoe UI"',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ].join(', '),

  heading: [
    'RedHatDisplay',
    '"Helvetica Neue"',
    '-apple-system',
    '"Segoe UI"',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ].join(', '),

  monospace: [
    'RedHatMono',
    '"Liberation Mono"',
    'consolas',
    '"SFMono-Regular"',
    'menlo',
    'monaco',
    '"Courier New"',
    'monospace',
  ].join(', '),
};

console.log('xxx redHatFonts', redHatFonts);
console.log('xxx backstageComponents', backstageComponents);

const components: UnifiedThemeOptions['components'] = {
  MuiCssBaseline: {
    styleOverrides: (theme) => {
      const backstageOverrides = backstageComponents!.MuiCssBaseline!.styleOverrides!;
      const backstageStyles = typeof backstageOverrides === 'function' ?
        backstageOverrides(theme) as CSSObject :
        backstageOverrides as CSSObject;

      console.log('xxx MuiCssBaseline backstageStyles', theme.typography.fontFamily, backstageStyles);
      
      return {
        ...backstageStyles,
        '@font-face': [
          RedHatDisplayVF,
          RedHatDisplayVFItalic,
          RedHatTextVF,
          RedHatTextVFItalic,
          RedHatMonoVF,
          RedHatMonoVFItalic,
        ],
        'body': {
          ...backstageStyles.body as CSSObject,
          fontFamily: redHatFonts.text,
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: redHatFonts.heading,
        },
        'pre, code': {
          fontFamily: redHatFonts.monospace,
        }
      };
    },
  },
  MuiButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
      },
    },
  },
  MuiToggleButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        // backgroundColor: 'red',
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        // backgroundColor: 'blue',
      },
    },
  },
  MuiTab: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        minWidth: 'initial !important',
      },
      // @ts-ignore: Tab contains a span 'wrapper'
      wrapper: {
        textTransform: 'none',
      },
    },
  },
  BackstageHeaderTabs: {
    styleOverrides: {
      defaultTab: {
        // This overrides just specified values and keep everything
        // else from the component defaults.
        // This increases the font-size for readability
        // and to align it with PatternFly 5.
        // Increase fontSize from 0.75rem (12px) to 1rem (16px). 
        fontSize: '1rem',
        // Reduce fontWeight from 700 to 500 to make the bigger size
        // better visible.
        fontWeight: '500',
      },
    },
  },
  BackstageSidebarItem: {
    styleOverrides: {
      label: {
        // This overrides just specified values and keep everything
        // else from the component defaults.
        // This increases the font-size for readability
        // and to align it with PatternFly 5.
        // Increase fontSize from 0.875rem (14px) to 1rem (16px). 
        fontSize: '1rem',
        // Reduce fontWeight from bold to normal to make the bigger size
        // better visible.
        fontWeight: 'normal',
      }
    },
  },
  BackstageIconLinkVertical: {
    styleOverrides: {
      label: {
        textTransform: 'none',
      },
    },
  },
}

const myLightPalette: UnifiedThemeOptions["palette"] = {
  ...backstagePalettes.light,
  primary: {
    main: 'rgb(0, 102, 204)',
  },
  secondary: {
    main: 'rgb(0, 64, 128)',
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
    default: '#F0F0F0',
    paper: '#FFFFFF',
  },
  banner: {
    info: '#34548a',
    error: '#8c4351',
    text: '#343b58',
    link: '#565a6e',
  },
  errorBackground: '#FAEAE8',
  warningBackground: '#FDF7E7',
  infoBackground: '#E7F1FA',
  navigation: {
    background: 'rgb(33, 36, 39)',
    indicator: 'rgb(115, 188, 247)',
    color: '#ffffff',
    selectedColor: 'rgb(78, 82, 85)',
  },
};

const myDarkPalette: UnifiedThemeOptions["palette"] = {
  ...backstagePalettes.dark,
  primary: {
    main: 'rgb(0, 102, 204)',
  },
  secondary: {
    main: 'rgb(0, 64, 128)',
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
    default: 'rgb(15, 18, 20)',
    paper: 'rgb(27, 29, 33)',
  },
  banner: {
    info: '#34548a',
    error: '#8c4351',
    text: '#343b58',
    link: '#565a6e',
  },
  errorBackground: '#FAEAE8',
  warningBackground: '#FDF7E7',
  infoBackground: '#E7F1FA',
  navigation: {
    background: 'rgb(33, 36, 39)',
    indicator: 'rgb(115, 188, 247)',
    color: '#ffffff',
    selectedColor: 'rgb(78, 82, 85)',
  },
};

console.log('xxx myLightPalette', myLightPalette)
console.log('xxx myLightTheme', createBaseThemeOptions({ palette: myLightPalette }))

const myLightThemeOptions: UnifiedThemeOptions = {
  // palette: myLightPalette,
  ...createBaseThemeOptions({ palette: myLightPalette }),

  // does nothing?
  fontFamily: redHatFonts.text,
  typography: {
    fontFamily: redHatFonts.text,
    h1: { fontFamily: redHatFonts.heading, fontSize: 54, fontWeight: 700, marginBottom: 10 },
    h2: { fontFamily: redHatFonts.heading, fontSize: 40, fontWeight: 700, marginBottom: 8 },
    h3: { fontFamily: redHatFonts.heading, fontSize: 32, fontWeight: 700, marginBottom: 6 },
    h4: { fontFamily: redHatFonts.heading, fontSize: 28, fontWeight: 700, marginBottom: 6 },
    h5: { fontFamily: redHatFonts.heading, fontSize: 24, fontWeight: 700, marginBottom: 4 },
    h6: { fontFamily: redHatFonts.heading, fontSize: 20, fontWeight: 700, marginBottom: 2 },
    htmlFontSize: 16,
  },

  defaultPageTheme: 'all',
  /* below drives the header colors */
  pageTheme: {
    all: genPageTheme({
      colors: ['rgb(21, 21, 21)'],
      shape: 'url("")',
      options: {
        fontColor: '#ffffff',
      },
    }),
  },

  components,
};

const myDarkThemeOptions: UnifiedThemeOptions = {
  // palette: myDarkPalette,
  ...createBaseThemeOptions({ palette: myDarkPalette  }),

  // does nothing?
  fontFamily: redHatFonts.text,
  typography: {
    fontFamily: redHatFonts.text,
    h1: { fontFamily: redHatFonts.heading, fontSize: 54, fontWeight: 700, marginBottom: 10 },
    h2: { fontFamily: redHatFonts.heading, fontSize: 40, fontWeight: 700, marginBottom: 8 },
    h3: { fontFamily: redHatFonts.heading, fontSize: 32, fontWeight: 700, marginBottom: 6 },
    h4: { fontFamily: redHatFonts.heading, fontSize: 28, fontWeight: 700, marginBottom: 6 },
    h5: { fontFamily: redHatFonts.heading, fontSize: 24, fontWeight: 700, marginBottom: 4 },
    h6: { fontFamily: redHatFonts.heading, fontSize: 20, fontWeight: 700, marginBottom: 2 },
    htmlFontSize: 16,
  },

  defaultPageTheme: 'all',
  /* below drives the header colors */
  pageTheme: {
    all: genPageTheme({
      colors: ['rgb(3, 3, 3)'],
      shape: 'url("")',
      options: {
        fontColor: '#ffffff',
      }
    }),
  },

  components,
};

const myLightTheme = createUnifiedTheme(myLightThemeOptions);
const myDarkTheme = createUnifiedTheme(myDarkThemeOptions);

const themes: AppTheme[] = [
  {
    id: 'light',
    title: 'Backstage Light',
    variant: 'light',
    icon: <LightIcon />,
    Provider: ({ children }) => (
      <UnifiedThemeProvider theme={backstageThemes.light}>
        {children}
      </UnifiedThemeProvider>
    ),
  },
  {
    id: 'dark',
    title: 'Backstage Dark',
    variant: 'dark',
    icon: <DarkIcon />,
    Provider: ({ children }) => (
      <UnifiedThemeProvider theme={backstageThemes.dark}>
        {children}
      </UnifiedThemeProvider>
    ),
  },
  {
    id: 'my-light',
    title: 'My Light',
    variant: 'light',
    icon: <LightIcon />,
    Provider: ({ children }) => (
      <UnifiedThemeProvider theme={myLightTheme}>
        {children}
      </UnifiedThemeProvider>
    ),
  },
  {
    id: 'my-dark',
    title: 'My Dark',
    variant: 'dark',
    icon: <DarkIcon />,
    Provider: ({ children }) => (
      <UnifiedThemeProvider theme={myDarkTheme}>
        {children}
      </UnifiedThemeProvider>
    ),
  },
];

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
  themes,
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
