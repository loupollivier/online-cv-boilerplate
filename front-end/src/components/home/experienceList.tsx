import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import { Theme, createStyles, Grid, Avatar, Divider, Typography, Stepper, Step, StepLabel, StepContent, List, ListItem, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { colors, fontSizes } from '../../constants/styles';
import { Experience } from '../../models/experience';
import { ExperiencesContext } from '../../contexts/experiences-context';

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

interface ExperienceListProps { }

function StepIcon() {
  const classes = useStepIconStyles();
  return (
    <ChevronRightIcon className={classes.root} />
  )
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

export const ExperienceList: React.FC<ExperienceListProps> = () => {
  const { experiences } = useContext(ExperiencesContext);
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <List className={classes.descriptionList}>
      <ListItem className={classes.listItem}>
        <Grid container direction='column' alignItems='center'>
          <Grid item className={classes.body}>
            <Stepper orientation="vertical" className={classes.experiences}>
              {experiences.map((experience: Experience, index: number) => (
                <Step key={index} active={true} >
                  <StepLabel StepIconComponent={StepIcon}>
                    {RenderDate(experience, t)}
                  </StepLabel>
                  <StepContent>
                    <Card elevation={0} style={{ borderRadius: "10px" }}>
                      <CardContent>
                        <Typography align='justify' className={classes.description}>{experience.details[0].description}</Typography>
                      </CardContent>
                    </Card>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
      </ListItem>
    </List>
  );
}