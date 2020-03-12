import React from 'react';
import 'moment/locale/fr';

import { createStyles, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { HobbyForm, HobbyFormValues } from './hobbyForm';
import { Hobby } from '../../models/hobby';
import { HobbyCard } from './hobbyCard';

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      width: '100%',
      padding: '10px'
    },
  })
);

interface HobbyOwnProps {
  values: HobbyFormValues;
}

export const HobbyContainer: React.FC<HobbyOwnProps> = ({ values }) => {
  const [isEditMode, setEditMode] = React.useState(false);
  const classes = useStyles();

  function handleEditClick(): void {
    setEditMode(!isEditMode);
  };

  function handleSubmitHobby(values: any): void {
    const hobby: Hobby = values;
    console.log('submit hobby:', hobby);
    setEditMode(!isEditMode);
  }

  return (
    <>
      {isEditMode ? (
        <Paper className={classes.paper} variant="outlined">
          <HobbyForm
            onSubmit={handleSubmitHobby}
            onCancel={handleEditClick}
            initialFormValues={values}
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