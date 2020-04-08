import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getExperiences } from '../actions/experienceActions';
import { Experience } from '../models/experience';

interface ContextProps { //Define the props of our application context.
  experiences: Experience[],
}

export const ExperiencesContext = createContext<ContextProps>({ //Create the application context with default values.
  experiences: [],
});

const ExperiencesProvider: React.FC = props => { //Create the provider that will give accessibility to his props to his cild components.
  const { i18n } = useTranslation();
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [filteredExperiences, setFilteredExperiences] = useState<Experience[]>([])

  useEffect(() => {
    getExperiences(setExperiences);
  }, []); //Execute get request to the backend, only once on the first rendering.

  useEffect(() => {
    const languageExperiences: Experience[] = experiences.map(experience => {
      var details = experience.details.filter(function (detail) {
        return detail.language === i18n.language
      })
      const newExperience: Experience = {
        id: experience.id,
        startDate: experience.startDate,
        endDate: experience.endDate,
        details: details
      }
      return newExperience;
    });
    setFilteredExperiences(languageExperiences);
  }, [experiences, i18n.language]); //Execute everytime experiences or selected language change.

  return (
    <ExperiencesContext.Provider value={{
      experiences: filteredExperiences,
    }}>
      {props.children}
    </ExperiencesContext.Provider>
  )
}

export default ExperiencesProvider;