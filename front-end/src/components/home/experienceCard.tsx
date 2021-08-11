import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import { Theme, createStyles, Grid, Avatar, Divider, Typography, Stepper, Step, StepLabel, StepContent, List, ListItem, Card, CardContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useAuth0 } from '@auth0/auth0-react';

import { colors, fontSizes } from '../../constants/styles';
import { Experience } from '../../models/experience';
import { ExperiencesContext } from '../../contexts/experiences-context';
import { AUTH_CONFIG } from '../../config/authConfig';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    descriptionList: {
      paddingTop: '30px',
      height: 'calc(100% - 100px)',
      overflow: 'auto'
    },
    listItem: {
      padding: '0px',
      paddingBottom: '40px'
    },
    avatar: {
      width: theme.spacing(10),
      height: theme.spacing(10)
    },
    name: {
      padding: theme.spacing(1),
      color: colors.info,
    },
    divider: {
      width: '45%',
    },
    body: {
      width: '90%',
      paddingTop: '15px'
    },
    experiences: {
      backgroundColor: 'rgba(0,0,0,0)',
      padding: '0px',
    },
    title: {
      fontWeight: 'bold'
    },
    description: {
      fontSize: fontSizes.regular,
      width: '95%'
    },
    edit: {
      marginTop: '10px',
      marginLeft: '8px'
    }
  })
);

const useStepIconStyles = makeStyles({
  root: {
    backgroundColor: colors.warning,
    color: 'white',
    borderRadius: '50%'
  },
})

interface ExperienceProps {
  experience: Experience,
  onEdit: () => void,
}

function RenderDate(experience: Experience, t: any) {
  var startYear = new Date(experience.startDate).getFullYear()
  var endYear = new Date(experience.endDate).getFullYear()
  return (
    <>
      {!experience.endDate ? (
        <Typography style={{ fontWeight: 'bold', fontSize: fontSizes.regular }}>
          {moment(experience.startDate).format(t('dateFormat.monthYear'))}
          {t('experience.date.today')} : {experience.details[0].title}
        </Typography>
      ) : (
          <>
            {startYear === endYear ? (
              <Typography style={{ fontWeight: 'bold', fontSize: fontSizes.regular }}>
                {moment(experience.startDate).format(t('dateFormat.month'))}
                {t('experience.date.to')}
                {moment(experience.endDate).format(t('dateFormat.monthYear'))} : {experience.details[0].title}
              </Typography>
            ) : (
                <Typography style={{ fontWeight: 'bold', fontSize: fontSizes.regular }}>
                  {moment(experience.startDate).format(t('dateFormat.monthYear'))}
                  {t('experience.date.to')}
                  {moment(experience.endDate).format(t('dateFormat.monthYear'))} : {experience.details[0].title}
                </Typography>
              )}
          </>
        )
      }
    </>
  )
}

export const ExperienceList: React.FC<ExperienceProps> = ({experience, onEdit}) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { user } = useAuth0();

  return (
    <Grid>
      <Grid item>
          <Typography align='justify' className={classes.description}>{experience.details[0].description}</Typography>
      </Grid>
      <Grid item >
        {user && (user[AUTH_CONFIG.roleUrl] === "admin") &&
          <Button size='small' variant="outlined" color="primary" className={classes.edit} onClick={onEdit}>
            {t('project.button.edit')}
          </Button>
        }
      </Grid>
    </Grid>
  );
}