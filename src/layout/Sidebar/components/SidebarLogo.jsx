import { Stack } from '@mui/material'
import React from 'react'
import logo from "../../../assets/svg/zendit-logo.svg"
export const SidebarLogo = () => {
  return (
    <>
      <Stack sx={{ width: "100%", height: "120px" }}>
        <img src={logo} />
      </Stack>
    </>
  );
}
