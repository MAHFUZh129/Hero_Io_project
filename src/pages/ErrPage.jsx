import React from 'react';
import err from '../assets/error-404.png';
import { Link } from 'react-router';

const ErrPage = () => {
    return (
        <div className='text-center space-y-16 py-24 bg-[#e8e5e5] '>
            <img className='mx-auto' src={err} alt="" />
            <div className='text-center space-y-2'>
                <h2 className='text-4xl font-bold'>Oops, page not found!</h2>
                <h3 className='text-gray-700' >The page you are looking for is not available.</h3>
               
              <a href="/">
              <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold">Go Back!</button></a> 
            
            </div>
        </div>
    );
};

export default ErrPage;