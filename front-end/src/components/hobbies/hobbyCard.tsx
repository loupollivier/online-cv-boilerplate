import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

import { Hobby } from '../../models/hobby';
import { fontSizes, colors } from '../../constants/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  title: {
    fontSize: fontSizes.title,
    color: colors.success,
  },
  content: {
    fontSize: fontSizes.regular,
  }
});

interface HobbyProps {
}

export const HobbyCard: React.FC<HobbyProps> = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://cnet1.cbsistatic.com/img/bM6_8sk2-FFgxrr4E9jgyJLyeNY=/644x0/2019/08/26/84874730-13f8-42e9-8885-3c23c08c358c/gettyimages-1127551032.jpg"
      />
      <CardContent>
        <Typography className={classes.title}>Escalade</Typography>
        <Typography className={classes.content}>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
          </Typography>
      </CardContent>
    </Card>
  );
}