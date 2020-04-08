import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Tab, AppBar, Tabs, createStyles, withStyles } from '@material-ui/core';

import { colors } from '../constants/styles';
import { ProjectList } from './projects/projectList';
import { DescriptionCard } from './description/descriptionCard';
import { TopBar } from './TopBar';
import { HobbyList } from './hobbies/hobbyList';
import ProjectsProvider from '../contexts/projects-context';
import ExperiencesProvider from '../contexts/experiences-context';
import HobbiesProvider from '../contexts/hobbies-context';

const useStyles = makeStyles(() =>
  createStyles({
    pageBackground: {
      height: '100%',
      width: '100%',
      position: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    },
    pageContent: {
      height: '100%',
      backgroundColor: 'rgba(255,255,255,.95)',
      marginLeft: '18%',
      marginRight: '18%'
    },
    appBar: {
      height: '80px'
    },
    homeTab: {
      backgroundColor: colors.warning,
    },
    projectsTab: {
      backgroundColor: colors.info,
    },
    hobbiesTab: {
      backgroundColor: colors.success,
    },
    root: {
      flexGrow: 1
    }
  })
);

const StyledTab = withStyles({
  root: {
    minHeight: "40px",
    padding: 0,
    opacity: 1
  }
})(Tab);

interface TabsBarOwnProps {
  isLoading: boolean;
  user: any;
  login: any;
  logout: any;
  backgrounds: any;
}

interface TabPanelProps {
  index: any;
  value: any;
  children?: React.ReactNode;
  background: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, background } = props;
  const classes = useStyles();
  return (
    <Typography
      component="div"
      role="tabpannel"
      hidden={value !== index}
      id={`nav-tab-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      className={classes.pageBackground}
      style={{ backgroundImage: `url(${background})` }}
    >
      <Box className={classes.pageContent}>{children}</Box>
    </Typography>
  );
}

function setTabProps(index: any) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpannel-${index}`,
  };
}

export const TabsBar: React.FC<TabsBarOwnProps> = ({ isLoading, user, login, logout, backgrounds }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <TopBar isLoading={isLoading} user={user} login={login} logout={logout} />
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav-tabs">
          <StyledTab label={t('tabs.home')} {...setTabProps(0)} className={classes.homeTab} />
          <StyledTab label={t('tabs.projects')} {...setTabProps(1)} className={classes.projectsTab} />
          <StyledTab label={t('tabs.hobbies')} {...setTabProps(2)} className={classes.hobbiesTab} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} background={backgrounds[0]}>
        <ExperiencesProvider>
          <DescriptionCard />
        </ExperiencesProvider>
      </TabPanel>
      <TabPanel value={value} index={1} background={backgrounds[1]}>
        <ProjectsProvider>
          <ProjectList />
        </ProjectsProvider>
      </TabPanel>
      <TabPanel value={value} index={2} background={backgrounds[2]}>
        <HobbiesProvider>
          <HobbyList />
        </HobbiesProvider>
      </TabPanel>
    </div>
  )
}

