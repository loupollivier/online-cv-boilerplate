import React from 'react';
import moment from 'moment';

import { useAuth0 } from './contexts/auth0-context';
import { TabsBar } from './components/Tabs';
import { useTranslation } from 'react-i18next';
import hobbiesBackground from './images/hobbiesBackground50perc.jpg';
import homeBackground from './images/homeBackground50perc.jpg';
import projectsBackground from './images/projectsBackground50perc.jpg';

const backgrounds = [homeBackground, projectsBackground, hobbiesBackground]

function App() {

  const { isLoading, user, loginWithRedirect, logout } = useAuth0();
  const { i18n } = useTranslation();
  moment.locale(i18n.language);

  return (
    <TabsBar
      isLoading={isLoading}
      user={user}
      login={loginWithRedirect}
      logout={logout}
      backgrounds={backgrounds}
    />
  )
}

export default App as React.ComponentType;
