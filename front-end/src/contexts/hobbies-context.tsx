import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getHobbies, saveHobby } from '../actions/hobbyActions';
import { Hobby } from '../models/hobby';
import { HobbyFormValues } from '../components/hobbies/hobbyForm';

interface ContextProps { //Define the props of our hobbies context.
  hobbies: Hobby[],
  updateHobby: any,
}

export const HobbiesContext = createContext<ContextProps>({ //Create the application context with default values.
  hobbies: [],
  updateHobby: () => { }
});

const HobbiesProvider: React.FC = props => { //Create the provider that will give accessibility to his props to his cild components.
  const { i18n } = useTranslation();
  const [hobbies, setHobbies] = useState<Hobby[]>([])
  const [filteredHobbies, setFilteredHobbies] = useState<Hobby[]>([])

  function updateHobby(hobbyValues: HobbyFormValues) {
    const hobbyIndex = hobbies.findIndex(hobby => {
      return hobby.id === hobbyValues.id;
    });
    const detailsIndex = hobbies[hobbyIndex].details.findIndex(detail => {
      return detail.language === hobbyValues.language;
    });
    hobbies[hobbyIndex].imageUrl = hobbyValues.imageUrl;
    hobbies[hobbyIndex].details[detailsIndex].description = hobbyValues.description;
    hobbies[hobbyIndex].details[detailsIndex].name = hobbyValues.name;
    saveHobby(hobbies[hobbyIndex]);
    setHobbies(hobbies);
  }

  useEffect(() => {
    getHobbies(setHobbies);
  }, []); //Execute get request to the backend, only once on the first rendering.

  useEffect(() => {
    const languageHobbies: Hobby[] = hobbies.map(hobby => {
      var details = hobby.details.filter(function (detail) {
        return detail.language === i18n.language
      })
      const newHobby: Hobby = {
        id: hobby.id,
        imageUrl: hobby.imageUrl,
        details: details
      }
      return newHobby;
    });
    setFilteredHobbies(languageHobbies);
  }, [hobbies, i18n.language]); //Execute everytime hobbies or selected language change.

  return (
    <HobbiesContext.Provider value={{
      hobbies: filteredHobbies,
      updateHobby: updateHobby,
    }}>
      {props.children}
    </HobbiesContext.Provider>
  )
}

export default HobbiesProvider;