import * as React from 'react';
import * as _ from 'lodash';

import { createStyles, InputLabel, Select, MenuItem, Input, Theme, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    field: {
      maxWidth: '100%',
      minWidth: '50%',
      margin: '0px',
    },
    label: {
      fontSize: 12,
      paddingTop: '2px'
    },
  })
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface MultiSelectFieldProps {
  label: string;
  handleChange: any;
  handleBlur: any;
  initialValues: any[];
  options: any[];
  name: string;
  displayedProps: string;
}

function getStyles(item: string, items: string[], theme: Theme) {
  return {
    fontWeight:
      items.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function convertListToStringArray(list: any[], displayedProps: string): string[] {
  const selectedObjectsList: string[] = [];
  list.map(object => {
    return selectedObjectsList.push(object[displayedProps]);
  });
  return selectedObjectsList;
}

function convertStringArrayToList(options: any[], array: string[], displayedProps: string): any[] {
  const selectedStringList: any[] = [];
  var itemIndex: number;
  array.map(string => {
    itemIndex = _.findIndex(options, [displayedProps, string])
    return selectedStringList.push(options[itemIndex])
  });
  return selectedStringList;
}

export const MultiSelectWrap: React.FC<MultiSelectFieldProps> = (props: MultiSelectFieldProps) => {
  const { label, handleChange, handleBlur, initialValues, options, name, displayedProps, ...rest } = props;
  const [itemArray, setItemArray] = React.useState<string[]>(convertListToStringArray(initialValues, displayedProps));

  const classes = useStyles();
  const theme = useTheme();

  const handleValuesChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
    var newSelection = event.target.value as string[];
    setItemArray(newSelection);
    handleChange(name, convertStringArrayToList(options, newSelection, displayedProps));
  };

  return (
    <div>
      <InputLabel id="label" className={classes.label}>{label}</InputLabel>
      <Select
        labelId="label"
        id={name}
        multiple
        value={itemArray}
        onChange={handleValuesChange}
        input={<Input />}
        MenuProps={MenuProps}
        className={classes.field}
        {...rest}
      >
        {options.map(item => (
          <MenuItem key={item[displayedProps]} value={item[displayedProps]} style={getStyles(item[displayedProps], itemArray, theme)}>
            {item[displayedProps]}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}