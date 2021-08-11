import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Tab, AppBar, Tabs, createStyles, withStyles, Grid, Avatar, Theme, Button } from '@material-ui/core';

import { ProjectList } from './projects/projectList';
import { DescriptionCard } from './home/descriptionCard';
import { HobbyList } from './hobbies/hobbyList';
import ProjectsProvider from '../contexts/projects-context';
import ExperiencesProvider from '../contexts/experiences-context';
import HobbiesProvider from '../contexts/hobbies-context';
import hobbiesBackground from '../images/backgrounds/hobbiesBackground50perc.jpg';
import homeBackground from '../images/backgrounds/homeBackground50perc.jpg';
import projectsBackground from '../images/backgrounds/projectsBackground50perc.jpg';
import { useAuth0 } from '@auth0/auth0-react';


const useStyles = makeStyles((theme: Theme) =>
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
    },
    appBar: {
      backgroundColor: 'white',
      height: '100%',
      paddingLeft: '5%',
      paddingRight: '5%'
    },
    root: {
      flexGrow: 1,
      height: "15%"
    },
    avatar: {
      width: theme.spacing(10),
      height: theme.spacing(10)
    },
    name: {
      color: "black",
      marginLeft: "32px",
      fontSize: "20px"
    }
  })
);

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
  root: {
    minHeight: "40px",
    padding: 0,
    opacity: 1,
    backgroundColor: 'white',
    color: 'lightgrey',
    fontWeight: 'normal',
    '&$selected': {
      color: 'black',
      fontWeight: '800',
    },
  },
  selected: {},
}),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
}

interface TabsBarOwnProps {
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

export const TabsBar: React.FC<TabsBarOwnProps> = () => {

  const backgrounds = [homeBackground, projectsBackground, hobbiesBackground]
  const { t } = useTranslation();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="sticky" style={{height: "100%"}}>
        <Grid container direction="row" justify="flex-start" alignItems="center"  className={classes.appBar}>
          <Grid item container direction="row" alignItems="center" md={6}>
            <Avatar alt='logo' src={require("../images/logo.png")} className={classes.avatar}/>
            <Typography className={classes.name}>Loup OLLIVIER</Typography>
          </Grid>
          <Grid item md={6}>
            <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav-tabs" TabIndicatorProps={{}}>
              <StyledTab label={t('tabs.home')} {...setTabProps(0)} />
              <StyledTab label={t('tabs.projects')} {...setTabProps(1)} />
              <StyledTab label={t('tabs.hobbies')} {...setTabProps(2)} />
            </Tabs>
          </Grid>
        </Grid>
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

