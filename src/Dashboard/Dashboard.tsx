import React, { useState } from 'react';

import { Route, useParams, useRouteMatch } from 'react-router';

import CssBaseline from '@material-ui/core/CssBaseline';

import { useDashBoardStyles } from '../hooks/useDashboardStyles';
import { Sidebar } from '../Layout/Sidebar';
import { Navigation } from '../Layout/Navigation';

import { DashboardContent } from './DashboardContent';
import { DashboardToolbar } from '../Layout/DashboardToolbar';
import { DashboardContentWrapper } from '../Layout/DashboardContentWrapper';
import { RecipePage } from '../Pages/RecipePage';

export function Dashboard() {
  const classes = useDashBoardStyles();
  const [isSideBarOpen, setSidebarOpen] = useState<boolean>(true);
  const { path } = useRouteMatch();
  const [isEditRecipe, setEditRecipe] = useState<boolean>(false);

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  console.log(path, 'path');
  return (
    <div className={classes.root}>
      <CssBaseline />
      <DashboardToolbar sideBarOpen={isSideBarOpen} openSideBar={handleSidebarOpen} />
      <Sidebar sideBarOpen={isSideBarOpen} closeSideBar={handleSidebarClose}>
        <Navigation />
      </Sidebar>
      <DashboardContentWrapper>
        <Route path={`${path}/:recipeCategoryID`} component={() => <DashboardContent />} />
        <Route exact path={`${path}`} component={() => <div>Dashboard home</div>} />
        <Route exact path={`${path}/recipe`} component={() => <div>Recipe page</div>} />
      </DashboardContentWrapper>
    </div>
  );
}

// Todo : add correct links for Recipe categories
