import * as React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import ClearIcon from '@material-ui/icons/Clear';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import { createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles(() =>
  createStyles({
    field: {
      width: '100%',
      margin: '0px'
    },
  })
);

interface DateFieldProps {
  label: string;
  handleChange: any;
  handleBlur: any;
  initialDateValue: string | Date | null;
  name: string;
}

export const DatePickerWrap: React.FC<DateFieldProps> = (props: DateFieldProps) => {
  const { label, handleChange, handleBlur, initialDateValue, name, ...rest } = props;
  const [selectedDate, setSelectedDate] = React.useState(initialDateValue);
  const { t } = useTranslation();
  const classes = useStyles();

  const handleDateChange = (date: any): void => {
    setSelectedDate(date);
    console.log("date: ", date)
    console.log("format: ", t('dateFormat.backFormat'))
    console.log("change date: ", moment(date).format(t('dateFormat.backFormat')))
    handleChange(name, moment(date).format(t('dateFormat.backFormat')));
  };

  const onDateClear = (e: any): void => {
    e.stopPropagation();
    setSelectedDate(null);
    handleChange(name, '');
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        autoOk
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        id={name}
        name={name}
        label={label}
        onChange={handleDateChange}
        onBlur={handleBlur}
        value={selectedDate}
        KeyboardButtonProps={{ 'aria-label': 'change date' }}
        keyboardIcon={
          <>
            {
              selectedDate ? (
                <ClearIcon onClick={onDateClear} />
              ) : (
                  <CalendarIcon />
                )
            }
          </>
        }
        {...rest}
        className={classes.field}
      />
    </MuiPickersUtilsProvider >
  )
}