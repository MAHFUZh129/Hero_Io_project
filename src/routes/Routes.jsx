import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root';
import ErrPage from '../pages/ErrPage';
import Home from '../pages/Home';
import AppDetails from '../pages/AppDetails';
import AllApps from '../pages/AllApps';
import Installation from '../pages/Installation';



export const router = createBrowserRouter([
  {
     path:'/',
     Component:Root,
    // errorElement:<ErrPage></ErrPage>,
    errorElement: <Root />,

     children:[
        {
            index:true,
            path:'/',
            Component:Home,
            loader:()=>fetch('/Trending.json')
        },
        {
            path:'/appdetails/:id',
            Component:AppDetails,
            loader:()=>fetch('/Data.json')
            
            
        },
        {
          path:'/allapps',
          Component:AllApps,
          loader:()=>fetch('/Data.json')

        },
        {
          path:'/installation',
          Component:Installation,
          loader:()=>fetch('/Data.json')
        }

     ]
  },
  
]);