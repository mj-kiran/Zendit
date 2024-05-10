import React from 'react'
import { MainLayout } from '../layout/MainLayout';
import { CreateOrEditTemplate, Template } from '../pages';

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    { path: "/", element: <Template /> },
    { path: "detailPage", element: <CreateOrEditTemplate /> },
    { path:"/detailPage/:id", element:<CreateOrEditTemplate />} ,
  ],
};


export default MainRoutes