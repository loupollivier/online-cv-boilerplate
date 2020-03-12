import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles, createStyles, List, ListItem, Grid } from '@material-ui/core';

import { HobbyContainer } from './hobbyContainer';
import { Hobby } from '../../models/hobby';
import { colors } from '../../constants/styles';
import { getHobbies } from '../../actions/hobbyActions';

const useStyles = makeStyles(() =>
  createStyles({
    hobbyList: {
      paddingTop: '30px',
      height: 'calc(100% - 100px)',
      overflow: 'auto'
    },
    hobbyContainer: {
      width: '100%',
      minWidth: '300px'
    },
    icon: {
      backgroundColor: colors.info,
      borderRadius: '50%',
      color: 'white'
    }
  })
);

interface HobbyListProps { }

export const HobbyList: React.FC<HobbyListProps> = () => {

  const { i18n } = useTranslation();
  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const classes = useStyles();

  useEffect(() => {
    getHobbies(setHobbies);
  }, [i18n.language]);

  console.log('new hobbies: ', hobbies)

  return (
    <List className={classes.hobbyList}>
      {
        hobbies.map((hobby: Hobby) => (
          <ListItem key={hobby.id}>
            <Grid container className={classes.hobbyContainer}>
              <HobbyContainer values={hobby} />
            </Grid>
          </ListItem>
        ))}
    </List >
  )
}