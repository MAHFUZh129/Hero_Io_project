import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useRouteError } from 'react-router';
import ErrPage from './ErrPage';

const Root = () => {
      const error = useRouteError();

    return (
        <div>
     <Navbar></Navbar>
        {error ? (
          <ErrPage error={error} /> 
        ) : (
          <Outlet /> 
        )}
      <Footer></Footer>
        </div>
    );
};

export default Root;



