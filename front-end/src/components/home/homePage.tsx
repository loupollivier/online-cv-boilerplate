import React from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";


const useStyles = makeStyles({
  root: {
    width: '100%',
  }
});

export const HomePage: React.FC<{}> = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { user } = useAuth0();

  return (
    <>
      <Typography>Hello</Typography>
    </>
  );
}