import React from 'react';
import moment from 'moment';

import { TabsBar } from './components/Tabs';
import { useTranslation } from 'react-i18next';


function App() {

  const { i18n } = useTranslation();
  moment.locale(i18n.language);

  return (
    <TabsBar />
  )
}

export default App as React.ComponentType;
