import React from 'react';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AddIcon from '@material-ui/icons/Add';
import { List } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';

// Todo: create menu using map an NavLinkListITem

export function Navigation() {
  const { url } = useRouteMatch();

  return (
    <List>
      <ListItem button component={Link} to={`${url}`}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItem>
      <ListItem button component={Link} to={`${url}/add`}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary='Add recipe' />
      </ListItem>
      <ListItem button component={Link} to={`${url}/meat`}>
        <ListItemIcon>
          <ArrowRightIcon />
        </ListItemIcon>
        <ListItemText primary='Meat' />
      </ListItem>
      <ListItem button component={Link} to={`${url}/fish`}>
        <ListItemIcon>
          <ArrowRightIcon />
        </ListItemIcon>
        <ListItemText primary='Fish' />
      </ListItem>
      <ListItem button component={Link} to={`${url}/soups`}>
        <ListItemIcon>
          <ArrowRightIcon />
        </ListItemIcon>
        <ListItemText primary='Soups' />
      </ListItem>
      <ListItem button component={Link} to={`${url}/vegie`}>
        <ListItemIcon>
          <ArrowRightIcon />
        </ListItemIcon>
        <ListItemText primary='Vegie' />
      </ListItem>
      <ListItem button component={Link} to={`${url}/all-recipes`}>
        <ListItemIcon>
          <ArrowRightIcon />
        </ListItemIcon>
        <ListItemText primary='All recipes' />
      </ListItem>
    </List>
  );
}
