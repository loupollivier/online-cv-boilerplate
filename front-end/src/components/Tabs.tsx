import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Tab, AppBar, Tabs, createStyles, withStyles } from '@material-ui/core';

import { colors } from '../constants/styles';
import { ProjectList } from './projects/projectList';
import { DescriptionCard } from './description/descriptionCard';
import { TopBar } from './TopBar';
import { HobbyCard } from './hobbies/hobbyCard';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    homeTab: {
      height: '30px',
      backgroundColor: colors.warning,
    },
    projectsTab: {
      height: '30px',
      backgroundColor: colors.info,
    },
    hobbiesTab: {
      height: '30px',
      backgroundColor: colors.success,
    },
  })
);

const StyledTab = withStyles({
  root: {
    minHeight: "46px",
    padding: 0
  }
})(Tab);

interface TabsBarOwnProps {
  isLoading: boolean;
  user: any;
  login: any;
  logout: any;
}

interface TabPanelProps {
  index: any;
  value: any;
  children?: React.ReactNode;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;
  return (
    <Typography
      component="div"
      role="tabpannel"
      hidden={value !== index}
      id={`nav-tab-${index}`}
      aria-labelledby={`nav-tab-${index}`}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function setTabProps(index: any) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpannel-${index}`,
  };
}

export const TabsBar: React.FC<TabsBarOwnProps> = ({ isLoading, user, login, logout }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <TopBar isLoading={isLoading} user={user} login={login} logout={logout} />
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav-tabs">
          <StyledTab label={t('tabs.home')} {...setTabProps(0)} className={classes.homeTab} />
          <StyledTab label={t('tabs.projects')} {...setTabProps(1)} className={classes.projectsTab} />
          <StyledTab label={t('tabs.hobbies')} {...setTabProps(2)} className={classes.hobbiesTab} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DescriptionCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProjectList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HobbyCard />
      </TabPanel>
    </div>
  )
}

