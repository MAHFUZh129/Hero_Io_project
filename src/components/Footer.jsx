import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className='bg-[#001931]'>
            <footer className="footer  sm:footer-horizontal text-white   p-10">
  <nav>
    <h6 className=" flex gap-2 items-center font-bold text-white text-3xl"> <img className='h-8' src={logo} alt="" />HERO</h6>
    <p className='text-gray-400'>At HERO.IO, We specialize in app design and development, combining creativity <br /> with cutting-edge technology to deliver seamless, user-focused solutions.  Whether <br />it’s a mobile app, web platform, or digital tool, HERO.IO turns visionary concepts<br /> into products people love to use.</p>
  </nav>
  <nav>
    <h6 className="text-white text-2xl font-semibold ">Services</h6>
    <a className="link link-hover font-semibold  ">Branding & Digital Identity</a>
    <a className="link link-hover font-semibold">Mobile App Development</a>
    <a className="link link-hover font-semibold">Emerging Technologies</a>
    <a className="link link-hover font-semibold">UI/UX Design</a>
  </nav>
  <nav>
    <h6 className="text-white text-2xl font-semibold">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="text-white text-2xl font-semibold">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
 <div className='text-center pb-7'>
 <span className='text-gray-400 '>Copyright © 2025 - All right reserved</span>
</div>
        </div>
    );
};

export default Footer;