import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getProjects } from '../actions/projectActions';
import { Project } from '../models/project';

type SetValue = (value: any) => void;

interface ContextProps { //Define the props of our application context.
  projects: Project[],
  setProjects: SetValue,
}

export const ProjectsContext = createContext<ContextProps>({ //Create the application context with default values.
  projects: [],
  setProjects: () => { }
});

const ProjectsProvider: React.FC = props => { //Create the provider that will give accessibility to his props to his cild components.
  const { i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])

  useEffect(() => {
    getProjects(setProjects);
  }, []); //Execute once on the first rendering.

  useEffect(() => {
    var languageProjects = projects.filter(function (project) {
      return project.language === i18n.language
    })
    setFilteredProjects(languageProjects);
  }, [projects, i18n.language]); //Execute everytime projects or selected language change.

  return (
    <ProjectsContext.Provider value={{
      projects: filteredProjects,
      setProjects: setFilteredProjects
    }}>
      {props.children}
    </ProjectsContext.Provider>
  )
}

export default ProjectsProvider;