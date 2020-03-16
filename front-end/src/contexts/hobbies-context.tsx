import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getHobbies } from '../actions/hobbyActions';
import { Hobby } from '../models/hobby';

type SetValue = (value: any) => void;

interface ContextProps { //Define the props of our hobbies context.
  hobbies: Hobby[],
  updateHobbies: any,
}

export const HobbiesContext = createContext<ContextProps>({ //Create the application context with default values.
  hobbies: [],
  updateHobbies: () => { }
});

const HobbiesProvider: React.FC = props => { //Create the provider that will give accessibility to his props to his cild components.
  const { i18n } = useTranslation();
  const [hobbies, setHobbies] = useState<Hobby[]>([])
  const [filteredHobbies, setFilteredHobbies] = useState<Hobby[]>([])

  function updateHobbies(newHobby: Hobby) {

  }

  useEffect(() => {
    getHobbies(setHobbies);
  }, []); //Execute once on the first rendering.

  useEffect(() => {
    const languageHobbies: Hobby[] = hobbies.map(hobby => {
      var details = hobby.details.filter(function (detail) {
        return detail.language === i18n.language
      })
      const newHobby: Hobby = { id: hobby.id, imageUrl: hobby.imageUrl, details: details }
      return newHobby;
    });
    setFilteredHobbies(languageHobbies);
  }, [hobbies, i18n.language]); //Execute everytime hobbies or selected language change.

  return (
    <HobbiesContext.Provider value={{
      hobbies: filteredHobbies,
      updateHobbies: updateHobbies,
    }}>
      {props.children}
    </HobbiesContext.Provider>
  )
}

export default HobbiesProvider;

/*
var languageHobbies: Hobby[] = hobbies;
    languageHobbies.map(hobby => {
      hobby.details = hobby.details.filter(detail => detail.language === i18n.language);
      return hobby;
    });*/