import React from 'react';
import moment from 'moment';
import { createBrowserHistory } from 'history';
import { useTranslation } from 'react-i18next';
import { Route, Router, Switch } from 'react-router-dom';

import { HomePage } from './components/home/homePage';
import { TopBar } from './components/TopBar';

function App() {

  const { i18n } = useTranslation();
  const history = createBrowserHistory();
  moment.locale(i18n.language);

  return (
    <Router history={history}>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <HomePage />
        </Route>
        <Route path="/dashboard">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App as React.ComponentType;
