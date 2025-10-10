
import React from 'react';
import d from '../assets/icon-downloads.png';
import r from '../assets/icon-ratings.png';
import { Link } from 'react-router';


const Apps = ({app}) => {
    
    return (
        <Link to={`/appdetails/${app.id}`}>
        <div className='bg-white rounded-lg p-4'>
            <div className='space-y-3 '>
            <img className='rounded-lg' src={app.image} alt="" />
            <h3 className='font-bold'>{app.title}</h3>
            <div className='flex justify-between'>
                <span className='bg-[#F1F5E8] rounded-sm font-bold flex items-center gap-2 px-2 py-1 text-[#00D390]'><img className='h-4' src={d} alt="" />{app.downloads}</span>
                <span className='bg-[#FFF0E1] rounded-sm font-bold flex items-center gap-2 px-2 py-1 text-[#FF8811]'><img className='h-4' src={r} alt="" />{app.ratingAvg}</span>
                
            </div>     
            </div>
        </div>
        </Link>
    );
};

export default Apps;