import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root';
import ErrPage from '../pages/ErrPage';
import Home from '../pages/Home';
import AppDetails from '../pages/AppDetails';
import AllApps from '../pages/AllApps';



export const router = createBrowserRouter([
  {
     path:'/',
     Component:Root,
     errorElement:<ErrPage></ErrPage>,
     children:[
        {
            index:true,
            path:'/',
            Component:Home,
            loader:()=>fetch('Trending.json')
        },
        {
            path:'/bookdetails/:id',
            Component:AppDetails,
            loader:()=>fetch('Data.json')
            
            
        },
        {
          path:'/allapps',
          Component:AllApps,
          loader:()=>fetch('Data.json')

        }
     ]
  },
  
]);