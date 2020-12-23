import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Route, useHistory, useRouteMatch } from 'react-router';
import { RecipePage } from '../Pages/RecipePage';

type Props = {
  title: string;
  image: string;
  category: string;
  // editRecipe: () => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      marginRight: 16,
      marginBottom: 16,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    // expand: {
    //   transform: 'rotate(0deg)',
    //   marginLeft: 'auto',
    //   transition: theme.transitions.create('transform', {
    //     duration: theme.transitions.duration.shortest,
    //   }),
    // },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    icon: {
      color: red[500],
    },
  }),
);

export function Recipe({ image, title, category }: Props) {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const { path } = useRouteMatch();
  const history = useHistory();
  console.log(path, 'recipe path');
  console.log(url);
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            R
          </Avatar>
        }
        title={title}
        subheader='September 14, 2016' // could be category
      />
      <CardMedia className={classes.media} image={image} title='Paella dish' />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {category}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='delete' color='secondary'>
          <DeleteIcon className={classes.icon} />
        </IconButton>
        <IconButton
          aria-label='edit'
          onClick={() => {
            history.push('/dashboard/recipe');
          }}
        >
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
