import * as React from 'react';
import { FieldProps } from 'formik';

import { TextField } from '@material-ui/core';
import { createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { fontSizes } from '../../constants/styles';

const useStyles = makeStyles(() =>
  createStyles({
    field: {
      width: '100%',
      paddingBottom: '10px'
    },
    input: {
      fontSize: fontSizes.regular,
    }
  })
);

interface Props extends FieldProps {
  label: string;
  multiline?: boolean
}

export const TextFieldWrap: React.FC<Props> = ({ label, field, multiline }) => {
  const classes = useStyles();
  return <TextField label={label} {...field} multiline={multiline} className={classes.field} InputProps={{ classes: { input: classes.input } }} />
}