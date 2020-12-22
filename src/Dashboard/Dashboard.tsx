import React, { useState } from 'react';
import clsx from 'clsx';
import { Route, useRouteMatch } from 'react-router';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { useDashBoardStyles } from '../hooks/useDashboardStyles';
import { useAuthContext } from '../firebase/firebaseContext';
import { Navigation } from '../Layout/Navigation';
import { DashboardContent } from './DashboardContent';
import { Copyright, SimplePopover, Profile } from '../shared';
import { authentification } from '../firebase/firebase';

export function Dashboard() {
  const classes = useDashBoardStyles();
  const [open, setOpen] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const { currentUser } = useAuthContext();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    return authentification.signOut();
  };

  const { path } = useRouteMatch();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='absolute' className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
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
      <Drawer
        variant='permanent'
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Navigation />
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Grid container spacing={3}>
            <Route path={`${path}/:recipeCategoryID`} component={DashboardContent} />
          </Grid>
          <Box pt={4}>
            <Copyright copyrightText='My recipes' />
          </Box>
        </Container>
      </main>
    </div>
  );
}

// Todo : add correct links for Recipe categories
