import React from 'react'
import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { Stack } from '@mui/material'
import "./Sidebar/Style/main.style.scss"
export const MainLayout = () => {
  return (
      <React.Fragment>
          <Stack display={"flex"}>
              <Header />
              <Sidebar />
              <Stack className="main">
                  <Outlet/>
              </Stack>
          </Stack>
    </React.Fragment>
  )
}
