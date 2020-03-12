import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';

import { Button, Grid, createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { TextFieldWrap } from '../generics/TextFieldWrap';
import { colors } from '../../constants/styles';

const useStyles = makeStyles(() =>
  createStyles({
    save: {
      marginTop: '20px',
      alignItems: 'flexStart',
      backgroundColor: colors.success
    },
    cancel: {
      marginTop: '20px',
      alignItems: 'flexEnd',
      backgroundColor: colors.warning
    },
  })
);

export interface HobbyFormValues {
  name: string,
  description: string,
  imageUrl: string,
}

interface FormProps {
  onSubmit: (values: HobbyFormValues) => void,
  onCancel: () => void,
  initialFormValues: HobbyFormValues,
}

export const HobbyForm: React.FC<FormProps> = ({ initialFormValues, onSubmit, onCancel }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Formik initialValues={initialFormValues} onSubmit={values => { onSubmit(values); }} enableReinitialize>
      {({ values, setFieldValue, handleBlur }) => (
        <Form>
          <Grid container direction='row' spacing={3}>
            <Grid item md={6} xs={12}>
              <Field
                label={t('project.label.position')}
                name="name"
                component={TextFieldWrap}
              />
              <Field
                label={t('project.label.teamSize')}
                name="description"
                component={TextFieldWrap}
              />
            </Grid>
          </Grid>
          <Grid container justify='space-between'>
            <Grid item>
              <Button
                color='primary'
                variant="contained"
                className={classes.cancel}
                onClick={onCancel}
                disableElevation
              >
                cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                color='primary'
                variant="contained"
                className={classes.save}
                disableElevation
              >
                save
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik >
  )
}