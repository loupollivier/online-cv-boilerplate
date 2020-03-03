import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, createStyles, Toolbar, Button, Grid, Switch } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'white',
      color: 'black',
    },
    title: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1
    }
  })
);

interface TabsBarOwnProps {
  isLoading: boolean,
  user: any,
  login: any,
  logout: any,
}

export const TopBar: React.FC<TabsBarOwnProps> = ({ isLoading, user, login, logout }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const classes = useStyles();

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
    <Toolbar className={classes.root} variant='dense'>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item>
          {!user && (
            <Button color="inherit" onClick={login}>{t('app.login')}</Button>
          )}
          {!isLoading && user && (
            <Button color="inherit" onClick={() => logout({ returnTo: window.location.origin })} size='medium'>{t('app.logout')}</Button>
          )}
        </Grid>
        <Grid item>
          {user ? (
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

