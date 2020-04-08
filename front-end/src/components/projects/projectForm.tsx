import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import useAxios from 'axios-hooks';

import { Button, Grid, createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { TextFieldWrap } from '../generics/TextFieldWrap';
import { DatePickerWrap } from '../generics/DatePickerWrap';
import { colors } from '../../constants/styles';
import { MultiSelectWrap } from '../generics/MultiSelectWrap';
import { Technology } from '../../models/technology';
import { Tool } from '../../models/tool';
import { api } from '../../constants/apiEndpoints';

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

export interface ProjectFormValues {
  id: number,
  language: string,
  client: string,
  startDate: Date,
  endDate: Date,
  technologies: Technology[],
  tools: Tool[],
  teamSize: number,
  title: string,
  description: string,
  position: string,
}

interface FormProps {
  onSubmit: (values: ProjectFormValues) => void,
  onCancel: () => void,
  initialFormValues: ProjectFormValues,
}

export const ProjectForm: React.FC<FormProps> = ({ initialFormValues, onSubmit, onCancel }) => {
  const [{ data: toolsOptions, loading: getToolsLoading, error: getToolsError }] = useAxios(api.tools);
  const [{ data: technologiesOptions, loading: getTechnologiesLoading, error: getTechnologiesError }] = useAxios(api.technologies);
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Formik initialValues={initialFormValues} onSubmit={values => { onSubmit(values); }} enableReinitialize>
      {({ values, setFieldValue, handleBlur }) => (
        <Form>
          <Grid container direction='row' spacing={3}>
            <Grid item md={6} xs={12}>
              <Field
                label={t('project.label.client')}
                name="client"
                component={TextFieldWrap}
              />
              <Field
                label={t('project.label.title')}
                name="title"
                component={TextFieldWrap}
              />
              <Field
                label={t('project.label.position')}
                name="position"
                component={TextFieldWrap}
              />
              <Field
                label={t('project.label.teamSize')}
                name="teamSize"
                component={TextFieldWrap}
              />
              <DatePickerWrap
                label={t('project.label.startDate')}
                name="startDate"
                handleChange={setFieldValue}
                initialDateValue={values.startDate}
                handleBlur={handleBlur}
              />
              <DatePickerWrap
                label={t('project.label.endDate')}
                name="endDate"
                handleChange={setFieldValue}
                initialDateValue={values.endDate}
                handleBlur={handleBlur}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Field
                label={t('project.label.description')}
                name="description"
                multiline
                component={TextFieldWrap}
              />
              {!getTechnologiesLoading && !getTechnologiesError && (
                <MultiSelectWrap
                  label={t('project.label.technologies')}
                  handleChange={setFieldValue}
                  handleBlur={handleBlur}
                  initialValues={values.technologies}
                  options={technologiesOptions}
                  name="technologies"
                  displayedProps="name"
                />
              )}
              {!getToolsLoading && !getToolsError && (
                <MultiSelectWrap
                  label={t('project.label.tools')}
                  handleChange={setFieldValue}
                  handleBlur={handleBlur}
                  initialValues={values.tools}
                  options={toolsOptions}
                  name="tools"
                  displayedProps="name"
                />
              )}
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