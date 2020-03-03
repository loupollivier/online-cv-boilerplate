import React from 'react';
import moment from 'moment';

import { useAuth0 } from './contexts/auth0-context';
import { TabsBar } from './components/Tabs';
import { useTranslation } from 'react-i18next';

function App() {

  const { isLoading, user, loginWithRedirect, logout } = useAuth0();
  const { i18n } = useTranslation();
  moment.locale(i18n.language);

  return (
    <>
      <TabsBar
        isLoading={isLoading}
        user={user}
        login={loginWithRedirect}
        logout={logout}
      />
    </>
  )
}

export default App as React.ComponentType;
