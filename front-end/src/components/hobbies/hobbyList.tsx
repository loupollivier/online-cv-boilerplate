import React, { useContext } from 'react';

import { makeStyles, createStyles, List, ListItem, Grid } from '@material-ui/core';

import { HobbyContainer } from './hobbyContainer';
import { Hobby } from '../../models/hobby';
import { colors } from '../../constants/styles';
import { HobbiesContext } from '../../contexts/hobbies-context';

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

  const { hobbies } = useContext(HobbiesContext);
  const classes = useStyles();

  console.log('hobbies: ', hobbies)

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