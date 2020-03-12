import React, { useContext } from 'react';

import { Grid, makeStyles, createStyles, List, ListItem } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { ProjectContainer } from './projectContainer';
import { Project } from '../../models/project';
import { colors } from '../../constants/styles';
import { ProjectsContext } from '../../contexts/projects-context';

const useStyles = makeStyles(() =>
  createStyles({
    projectList: {
      paddingTop: '30px',
      height: 'calc(100% - 100px)',
      overflow: 'auto'
    },
    listItem: {
      padding: '0px',
      paddingBottom: '20px'
    },
    projectContainer: {
      width: '100%',
      minWidth: '300px',
    },
    project: {
      width: '90%',
      paddingBottom: '20px'
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

  const { projects } = useContext(ProjectsContext);
  const classes = useStyles();

  console.log('new projects: ', projects)

  return (
    <List className={classes.projectList}>
      {
        projects.map((project: Project) => (
          <ListItem key={project.id} className={classes.listItem}>
            <Grid container className={classes.projectContainer} direction='column' alignItems='center'>
              <Grid item className={classes.project}>
                <ProjectContainer values={project} />
              </Grid>
              {projects.length !== project.id &&
                < Grid item >
                  <ExpandMoreIcon className={classes.icon} />
                </Grid>
              }
            </Grid>
          </ListItem>
        ))
      }
    </List >
  )
}