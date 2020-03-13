import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getHobbies } from '../actions/hobbyActions';
import { Hobby } from '../models/hobby';

type SetValue = (value: any) => void;

interface ContextProps { //Define the props of our application context.
  hobbies: Hobby[],
  setHobbies: SetValue,
}

export const HobbiesContext = createContext<ContextProps>({ //Create the application context with default values.
  hobbies: [],
  setHobbies: () => { }
});

const HobbiesProvider: React.FC = props => { //Create the provider that will give accessibility to his props to his cild components.
  const { i18n } = useTranslation();
  const [hobbies, setHobbies] = useState<Hobby[]>([])
  const [filteredHobbies, setFilteredHobbies] = useState<Hobby[]>([])

  useEffect(() => {
    getHobbies(setHobbies);
  }, []); //Execute once on the first rendering.

  useEffect(() => {
    var languageHobbies = hobbies.filter(function (hobby) {
      return hobby.language === i18n.language
    })
    setFilteredHobbies(languageHobbies);
  }, [hobbies, i18n.language]); //Execute everytime hobbies or selected language change.

  return (
    <HobbiesContext.Provider value={{
      hobbies: filteredHobbies,
      setHobbies: setFilteredHobbies
    }}>
      {props.children}
    </HobbiesContext.Provider>
  )
}

export default HobbiesProvider;