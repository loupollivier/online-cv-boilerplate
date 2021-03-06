import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import { createStyles, Typography, Grid, Breadcrumbs, Divider, Button, Hidden } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from '@material-ui/styles';

import { colors, fontSizes } from '../../constants/styles';
import { Technology } from '../../models/technology';
import { Tool } from '../../models/tool';
import { Project } from '../../models/project';
import { AUTH_CONFIG } from '../../config/authConfig';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontSize: fontSizes.title,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: fontSizes.regular,
      paddingBottom: '16px',
      color: colors.subtitle
    },
    description: {
      fontSize: fontSizes.regular
    },
    info: {
      fontSize: fontSizes.regular,
      fontWeight: 'bold'
    },
    contentRight: {
      width: '49%',
      paddingLeft: '14px',
      borderLeftColor: 'black',
      borderLeftWidth: 1
    },
    divider: {
      width: '2px'
    },
    contentLeft: {
      width: '49%',
      paddingRight: '16px',
    },
    edit: {
      marginTop: '10px',
      marginLeft: '8px'
    }
  })
);


interface ProjectProps {
  project: Project,
  onEdit: () => void,
}

export const ProjectCard: React.FC<ProjectProps> = ({ project, onEdit }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { user } = useAuth0();

  return (
    <Grid container direction='column' alignItems='center'>
      <Grid item container direction="row" justify='center'>
        <Grid item className={classes.contentLeft}>
          <Typography className={classes.title}>{project.details[0].title}</Typography>
          {project.endDate ? (
            <Typography className={classes.subtitle}>
              {moment(project.startDate).format(t('dateFormat.monthYear'))} - {moment(project.endDate).format(t('dateFormat.monthYear'))}
              {t('project.subtitleDate.for')} {project.client}
            </Typography>
          ) : (
              <Typography className={classes.subtitle}>
                {t('project.subtitleDate.since')} {moment(project.startDate).format(t('dateFormat.monthYear'))} {t('project.subtitleDate.for')} {project.client}
              </Typography>
            )}
          <Typography className={classes.info}>{project.details[0].position}</Typography>
          <Typography className={classes.info}>{project.teamSize} {t('project.infos.teamSize')}</Typography>
          <div style={{ height: '8px' }} />
          <Breadcrumbs aria-label='technologies' maxItems={4} itemsBeforeCollapse={3} itemsAfterCollapse={1}>
            {project.technologies.map((technology: Technology, index: any) => {
              return (
                <Typography key={index} className={classes.info}>{technology.name}</Typography>
              )
            })}
          </Breadcrumbs>
          <Breadcrumbs aria-label='tools' maxItems={2} itemsBeforeCollapse={3} itemsAfterCollapse={1}>
            {project.tools.map((tool: Tool, index: any) => {
              return (
                <Typography key={index} className={classes.info}>{tool.name}</Typography>
              )
            })}
          </Breadcrumbs>
        </Grid>
        <Hidden smDown>
          <Grid item className={classes.divider}>
            <Divider orientation="vertical" />
          </Grid>
        </Hidden>
        <Grid item className={classes.contentRight}>
          <Typography className={classes.description} align='justify'>
            {project.details[0].description}
          </Typography>
        </Grid>
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