import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';

import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';

import { useDashBoardStyles } from '../hooks/useDashboardStyles';

type Props = {
  children: ReactNode;
  sideBarOpen: boolean;
  closeSideBar: () => void;
};

export function Sidebar({ children, sideBarOpen, closeSideBar }: Props) {
  const classes = useDashBoardStyles();

  return (
    <Drawer
      variant='permanent'
      classes={{
        paper: clsx(classes.drawerPaper, !sideBarOpen && classes.drawerPaperClose),
      }}
      open={sideBarOpen}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={closeSideBar}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      {children}
      <Divider />
    </Drawer>
  );
}
