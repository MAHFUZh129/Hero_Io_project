import React from 'react';
import hero from '../assets/hero.png';
import play from '../assets/fi16076057.png';
import app from '../assets/Group.png';

const Banner = () => {
    return (
        <div className='text-center space-y-4 pt-10 bg-[#e8e5e5]'>
            <h1 className='text-5xl font-bold'>We Build <br /> <span className='text-[#9774e8]'>Productive</span> Apps</h1>
            <p className='text-gray-700'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='space-x-3'>
            
                <a href='https://play.google.com/store/games?hl=en&pli=1' className="btn font-bold"><img className='h-5' src={play} alt="" /> Google Play</a>
                <a href='https://www.apple.com/app-store/' className="btn font-bold"><img className='h-5 rounded-sm bg-[#5290d7] p-1'  src={app} alt="" /> App Store</a>       
            </div > 
                  <img className='mx-auto px-7 md:px-0 h-[350px]' src={hero} alt="" />
            </div>
    );
};

export default Banner;