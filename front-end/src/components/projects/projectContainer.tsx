import React from 'react';
import 'moment/locale/fr';

import { createStyles, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { ProjectForm, ProjectFormValues } from './projectForm';
import { Project } from '../../models/project';
import { ProjectCard } from './projectCard';

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      padding: '10px'
    },
  })
);

interface ProjectOwnProps {
  values: ProjectFormValues,
}

export const ProjectContainer: React.FC<ProjectOwnProps> = ({ values }) => {
  const [isEditMode, setEditMode] = React.useState(false);
  const classes = useStyles();

  function handleEditClick(): void {
    setEditMode(!isEditMode);
  };

  function handleSubmitProject(values: any): void {
    const project: Project = values;
    console.log('submit project:', project)
    setEditMode(!isEditMode);
  }

  return (
    <>
      {isEditMode ? (
        <Paper className={classes.paper} variant="outlined">
          <ProjectForm
            onSubmit={handleSubmitProject}
            onCancel={handleEditClick}
            initialFormValues={values}
          />
        </Paper>
      ) : (
          <ProjectCard
            project={values}
            onEdit={handleEditClick}
          />
        )
      }
    </>
  );
}