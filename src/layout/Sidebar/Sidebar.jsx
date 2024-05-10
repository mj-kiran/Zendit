import { Box, Drawer, useTheme } from '@mui/material'
import React from 'react'

import { drawerWidth, drawerWidthXL } from "../../config";
import { SidebarContent, SidebarLogo} from './components';

export const Sidebar = () => {
    const theme = useTheme();
    const drawerSX = (theme) => ({
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: { xs: drawerWidth, xl: drawerWidthXL },
        backgroundImage: "none",
        boxShadow: "inherit",
      },
    });
  return (
    <React.Fragment>
      <Box component="nav" sx={{ zIndex: 1000 }}>
        <Drawer variant="permanent" sx={drawerSX(theme)}>
          <SidebarLogo />
<SidebarContent />
        </Drawer>
      </Box>
    </React.Fragment>
  );
}
