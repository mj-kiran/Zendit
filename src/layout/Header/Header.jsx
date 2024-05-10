import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import { drawerWidth, drawerWidthXL } from '../../config';
import { Profile } from './components';

export const Header = () => {
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          zIndex: 1000,
          marginLeft: { xs: drawerWidth, xl: drawerWidthXL },
          width: {
            xs: `calc(100% - ${drawerWidth})`,
            xl: `calc(100% - ${drawerWidthXL})`,
          },
        }}
      >
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Profile />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
