import React, { useState } from 'react';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { authentification } from '../firebase/firebase';
import { SimplePopover, Profile } from '../shared';
import { useDashBoardStyles } from '../hooks/useDashboardStyles';
import { useAuthContext } from '../firebase/firebaseContext';

type Props = {
  sideBarOpen: boolean;
  openSideBar: () => void;
};

export function DashboardToolbar({ sideBarOpen, openSideBar }: Props) {
  const classes = useDashBoardStyles();
  const { currentUser } = useAuthContext();

  const handleLogout = () => {
    return authentification.signOut();
  };

  return (
    <AppBar position='absolute' className={clsx(classes.appBar, sideBarOpen && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={openSideBar}
          className={clsx(classes.menuButton, sideBarOpen && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component='h1' variant='h6' color='inherit' noWrap className={classes.title}>
          Dashboard
        </Typography>
        <SimplePopover>
          <Profile name={currentUser?.displayName} email={currentUser?.email} handleLogout={handleLogout} />
        </SimplePopover>
      </Toolbar>
    </AppBar>
  );
}
