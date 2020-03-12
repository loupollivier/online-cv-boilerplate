import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import App from './App';
import * as serviceWorker from './serviceWorker';
import i18n from './locales/i18n';
import { Auth0Provider } from './contexts/auth0-context';
import ContextProvider from './contexts/projects-context';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0874bb',
    },
    secondary: {
      main: '#e16e48',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#fff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 14,
  },
});

render(
  <Auth0Provider>
    <MuiThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={null}>
          <ContextProvider>
            <App />
          </ContextProvider>
        </Suspense>
      </I18nextProvider>
    </MuiThemeProvider>
  </Auth0Provider >,
  document.getElementById('root'),
);

serviceWorker.unregister();
