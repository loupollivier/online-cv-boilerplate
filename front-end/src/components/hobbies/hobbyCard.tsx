import React from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/styles';
import { Typography, Button, Grid, Paper } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";

import { fontSizes, colors } from '../../constants/styles';
import { Hobby } from '../../models/hobby';
import { AUTH_CONFIG } from '../../config/authConfig';

const useStyles = makeStyles({
  hobby: {
    width: '100%',
  },
  background: {
    height: '100%',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  text: {
    backgroundColor: 'rgba(255,255,255,.90)',
    padding: '15px',
    marginLeft: '50%',
    width: '50%'
  },
  content: {
    flex: '1 0 auto',
  },
  title: {
    fontWeight: 'bold',
    fontSize: fontSizes.title,
    color: colors.success,
  },
  description: {
    fontSize: fontSizes.regular,
  },
  edit: {
    marginTop: '10px'
  }
});

interface HobbyProps {
  hobby: Hobby;
  onEdit: () => void;
}

export const HobbyCard: React.FC<HobbyProps> = ({ hobby, onEdit }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { user } = useAuth0();
  if(user) {
    console.log("is admin: ", user[AUTH_CONFIG.roleUrl] === "admin");
  };

  return (
    <Grid container direction='column' alignItems='center'>
      <Grid item className={classes.hobby} container>
        <Paper className={classes.background} style={{ backgroundImage: `url(${hobby.imageUrl})` }} elevation={0} square>
          <Grid item className={classes.text}>
            <Typography className={classes.title}>{hobby.details[0].name}</Typography>
            <Typography align='justify' className={classes.description}>{hobby.details[0].description}</Typography>
          </Grid>
        </Paper>
      </Grid>
      {user && (user[AUTH_CONFIG.roleUrl] === "admin") &&
        <Grid item>
          <Button size='small' variant="outlined" color="primary" className={classes.edit} onClick={onEdit}>
            {t('project.button.edit')}
          </Button>
        </Grid>
      }
    </Grid>
  );
}