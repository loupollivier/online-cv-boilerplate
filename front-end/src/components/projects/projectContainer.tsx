import React, { useContext, useState } from 'react';
import 'moment/locale/fr';

import { createStyles, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { ProjectForm, ProjectFormValues } from './projectForm';
import { Project } from '../../models/project';
import { ProjectCard } from './projectCard';
import { ProjectsContext } from '../../contexts/projects-context';

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      padding: '10px'
    },
  })
);

interface ProjectOwnProps {
  values: Project,
}

export const ProjectContainer: React.FC<ProjectOwnProps> = ({ values }) => {
  const [isEditMode, setEditMode] = useState(false);
  const { updateProject } = useContext(ProjectsContext);
  const classes = useStyles();
  const projectFormValues: ProjectFormValues = {
    id: values.id,
    client: values.client,
    startDate: values.startDate,
    endDate: values.endDate,
    teamSize: values.teamSize,
    technologies: values.technologies,
    tools: values.tools,
    language: values.details[0].language,
    title: values.details[0].title,
    description: values.details[0].description,
    position: values.details[0].position
  }

  function handleEditClick(): void {
    setEditMode(!isEditMode);
  };

  function handleSubmitProject(values: ProjectFormValues): void {
    console.log('submit project:', values);
    updateProject(values);
    setEditMode(!isEditMode);
  }

  return (
    <>
      {isEditMode ? (
        <Paper className={classes.paper} variant="outlined">
          <ProjectForm
            onSubmit={handleSubmitProject}
            onCancel={handleEditClick}
            initialFormValues={projectFormValues}
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