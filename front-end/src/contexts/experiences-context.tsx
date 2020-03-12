import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getExperiences } from '../actions/experienceActions';
import { Experience } from '../models/experience';

type SetValue = (value: any) => void;

interface ContextProps { //Define the props of our application context.
  experiences: Experience[],
  setExperiences: SetValue,
}

export const ExperiencesContext = createContext<ContextProps>({ //Create the application context with default values.
  experiences: [],
  setExperiences: () => { }
});

const ExperiencesProvider: React.FC = props => { //Create the provider that will give accessibility to his props to his cild components.
  const { i18n } = useTranslation();
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [filteredExperiences, setFilteredExperiences] = useState<Experience[]>([])

  useEffect(() => {
    getExperiences(setExperiences);
  }, []); //Execute once on the first rendering.

  useEffect(() => {
    var languageExperiences = experiences.filter(function (experience) {
      return experience.language === i18n.language
    })
    setFilteredExperiences(languageExperiences);
  }, [experiences, i18n.language]); //Execute everytime experiences or selected language change.

  return (
    <ExperiencesContext.Provider value={{
      experiences: filteredExperiences,
      setExperiences: setFilteredExperiences
    }}>
      {props.children}
    </ExperiencesContext.Provider>
  )
}

export default ExperiencesProvider;