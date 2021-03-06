import React, { useState, useContext } from 'react';
import 'moment/locale/fr';

import { createStyles, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { HobbyForm, HobbyFormValues } from './hobbyForm';
import { Hobby } from '../../models/hobby';
import { HobbyCard } from './hobbyCard';
import { HobbiesContext } from '../../contexts/hobbies-context';

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      width: '100%',
      padding: '10px'
    },
  })
);

interface HobbyOwnProps {
  values: Hobby;
}

export const HobbyContainer: React.FC<HobbyOwnProps> = ({ values }) => {
  const [isEditMode, setEditMode] = useState(false);
  const { updateHobby } = useContext(HobbiesContext);
  const classes = useStyles();
  const hobbyForm: HobbyFormValues = {
    id: values.id,
    imageUrl: values.imageUrl,
    language: values.details[0].language,
    name: values.details[0].name,
    description: values.details[0].description,
  }

  function handleEditClick(): void {
    setEditMode(!isEditMode);
  };

  function handleSubmitHobby(values: HobbyFormValues): void {
    console.log('submit hobby:', values);
    updateHobby(values);
    setEditMode(!isEditMode);
  }

  return (
    <>
      {isEditMode ? (
        <Paper className={classes.paper} variant="outlined">
          <HobbyForm
            onSubmit={handleSubmitHobby}
            onCancel={handleEditClick}
            initialFormValues={hobbyForm}
          />
        </Paper>
      ) : (
          <HobbyCard
            hobby={values}
            onEdit={handleEditClick}
          />
        )
      }
    </>
  );
}