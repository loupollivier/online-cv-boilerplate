import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Grid, makeStyles, createStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { ProjectContainer } from './projectContainer';
import { Project } from '../../models/project';
import { colors } from '../../constants/styles';
import { getProjectsByLanguage } from '../../actions/projectActions';

const useStyles = makeStyles(() =>
  createStyles({
    list: {
      marginTop: '32px'
    },
    project: {
      width: '50%'
    },
    icon: {
      backgroundColor: colors.info,
      borderRadius: '50%',
      color: 'white'
    }
  })
);

interface ProjectListProps { }

export const ProjectList: React.FC<ProjectListProps> = () => {

  const { i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const classes = useStyles();

  useEffect(() => {
    getProjectsByLanguage(i18n.language, setProjects);
  }, [i18n.language]);

  console.log('new projects: ', projects)

  return (
    <Grid container spacing={3} direction='column' alignItems='center' className={classes.list}>
      {
        projects.map((project: Project) => (
          <Grid item key={project.id} container spacing={3} direction='column' alignItems='center'>
            <Grid item className={classes.project}>
              <ProjectContainer values={project} />
            </Grid>
            {projects.length !== project.id &&
              < Grid item >
                <ExpandMoreIcon className={classes.icon} />
              </Grid>
            }
          </Grid>
        ))
      }
    </Grid >
  )
}