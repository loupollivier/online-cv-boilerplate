import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getProjects, saveProject } from '../actions/projectActions';
import { Project } from '../models/project';
import { ProjectFormValues } from '../components/projects/projectForm';

interface ContextProps { //Define the props of our application context.
  projects: Project[],
  updateProject: any,
}

export const ProjectsContext = createContext<ContextProps>({ //Create the application context with default values.
  projects: [],
  updateProject: () => { }
});

const ProjectsProvider: React.FC = props => { //Create the provider that will give accessibility to his props to his cild components.
  const { i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])

  function updateProject(projectValues: ProjectFormValues) {
    const projectIndex = projects.findIndex(project => {
      return project.id === projectValues.id;
    });
    const detailsIndex = projects[projectIndex].details.findIndex(detail => {
      return detail.language === projectValues.language;
    });
    projects[projectIndex].client = projectValues.client;
    projects[projectIndex].startDate = projectValues.startDate;
    projects[projectIndex].endDate = projectValues.endDate;
    projects[projectIndex].teamSize = projectValues.teamSize;
    projects[projectIndex].technologies = projectValues.technologies;
    projects[projectIndex].tools = projectValues.tools;
    projects[projectIndex].details[detailsIndex].title = projectValues.title;
    projects[projectIndex].details[detailsIndex].description = projectValues.description;
    projects[projectIndex].details[detailsIndex].position = projectValues.position;
    saveProject(projects[projectIndex]);
    setProjects(projects);
  }

  useEffect(() => {
    getProjects(setProjects);
  }, []); //Execute get request to the backend, only once on the first rendering.

  useEffect(() => {
    const languageProjects: Project[] = projects.map(project => {
      var details = project.details.filter(function (detail) {
        return detail.language === i18n.language
      })
      const newProject: Project = {
        id: project.id,
        client: project.client,
        teamSize: project.teamSize,
        startDate: project.startDate,
        endDate: project.endDate,
        technologies: project.technologies,
        tools: project.tools,
        details: details
      }
      return newProject;
    });
    setFilteredProjects(languageProjects);
  }, [projects, i18n.language]); //Execute everytime projects or selected language change.

  return (
    <ProjectsContext.Provider value={{
      projects: filteredProjects,
      updateProject: updateProject,
    }}>
      {props.children}
    </ProjectsContext.Provider>
  )
}

export default ProjectsProvider;