import React from 'react';
import logo from '../assets/logo.png'
import git from '../assets/Vector1.png'
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         

      <li className='font-semibold text-lg'><a href='/'>Home</a></li>
      <li className='font-semibold text-lg'><a>Apps</a></li>
      <li className='font-semibold text-lg'><a>Installation</a></li>   
      </ul>
    </div>
    <a href='/' className="btn btn-ghost text-xl"><img className='h-7' src={logo} alt="" /><span className='text-[#785abd] font-bold'>HERO.IO</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     

      <li className='font-semibold text-lg'><a href='/'>Home</a></li>
      <li className='font-semibold text-lg'><a >Apps</a></li>
      <li className='font-semibold text-lg'><a>Installation</a></li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/MAHFUZh129' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold"> <img src={git} alt="" />Contribute</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;