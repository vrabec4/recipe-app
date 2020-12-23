import { Box, Container, Grid } from '@material-ui/core';
import React, { ReactNode } from 'react';

import { useDashBoardStyles } from '../hooks/useDashboardStyles';
import { Copyright } from '../shared';

type Props = {
  children: ReactNode;
};

export function DashboardContentWrapper({ children }: Props) {
  const classes = useDashBoardStyles();
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          {children}
        </Grid>
        <Box pt={4}>
          <Copyright copyrightText='My recipes' />
        </Box>
      </Container>
    </main>
  );
}
