import * as React from 'react';
import { useTranslation } from 'react-i18next';
import useReactRouter from 'use-react-router';

import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, createStyles, Toolbar, Button, Grid, Switch, Avatar } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '40px',
      backgroundColor: 'white',
      color: 'black',
    },
    title: {
      flexGrow: 1,
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

interface TabsBarOwnProps {}

export const TopBar: React.FC<TabsBarOwnProps> = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const { history, location, match } = useReactRouter();
  
  const classes = useStyles();
  const { loginWithPopup, logout, user, isAuthenticated, isLoading } = useAuth0();
  console.log("user: ", user)

  const switchLanguage = () => () => {
    switch (i18n.language) {
      case 'fr':
        i18n.changeLanguage('en');
        break;
      case 'en':
        i18n.changeLanguage('fr');
        break;
      default:
        i18n.changeLanguage('fr');
        break;
    }
  }

  return (
    <Toolbar className={classes.root}>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item container direction="row" alignItems="center" md={6}>
          <Avatar alt='logo' src={require("../images/logo.png")} className={classes.avatar}/>
          <Typography className={classes.name}>Loup OLLIVIER</Typography>
        </Grid>
        <Grid item>
          {!isAuthenticated && (
            <Button color="inherit" onClick={() => loginWithPopup ()}>{t('app.login')}</Button>
          )}
          {!isLoading && isAuthenticated && (
            <Button color="inherit" onClick={() => logout({ returnTo: window.location.origin })} size='medium'>{t('app.logout')}</Button>
          )}
        </Grid>
        <Grid item>
          {isAuthenticated ? (
            <Typography variant="h6" className={classes.title}>
              {t('app.welcome')} {user.name}
            </Typography>
          ) : (
              <Typography variant="h6" className={classes.title}>
                {t('app.welcome.default')}
              </Typography>
            )
          }
        </Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={1}>
            <Grid item><Typography>Fr</Typography></Grid>
            <Grid item>
              <Switch
                size="small"
                value="language"
                checked={i18n.language === 'en'}
                color="primary"
                onChange={switchLanguage()}
              />
            </Grid>
            <Grid item><Typography>En</Typography></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  )
}

