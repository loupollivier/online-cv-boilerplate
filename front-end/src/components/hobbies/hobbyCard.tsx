import React from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/styles';
import { Typography, Button, Grid, Paper } from '@material-ui/core';

import { fontSizes, colors } from '../../constants/styles';
import { HobbyFormValues } from './hobbyForm';
import { useAuth0 } from '../../contexts/auth0-context';

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
    padding: '8px',
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
    marginLeft: '8px'
  }
});

interface HobbyProps {
  hobby: HobbyFormValues;
  onEdit: () => void;
}

export const HobbyCard: React.FC<HobbyProps> = ({ hobby, onEdit }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { user } = useAuth0();

  return (
    <Grid container>
      <Paper className={classes.background} style={{ backgroundImage: `url(${hobby.imageUrl})` }} elevation={0} square>
        <Grid item className={classes.hobby} container justify='flex-end'>
          <Grid item className={classes.text}>
            <Typography className={classes.title}>{hobby.name}</Typography>
            <Typography className={classes.description}>{hobby.description}</Typography>
          </Grid>
        </Grid>
      </Paper>
      {user && (user.nickname === 'loup.ollivier') &&
        <Grid item>
          <Button size='small' variant="outlined" color="primary" className={classes.edit} onClick={onEdit}>
            {t('project.button.edit')}
          </Button>
        </Grid>
      }
    </Grid>
  );
}