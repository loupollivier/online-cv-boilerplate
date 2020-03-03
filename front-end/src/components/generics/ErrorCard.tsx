import React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      maxWidth: 345,
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

interface ErrorOwnProps {
  message: string
}

export const ErrorCard: React.FC<ErrorOwnProps> = ({ message }) => {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <ErrorOutlineIcon />
          </Avatar>
        }
        title="An error occured, please read below for more information"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
}