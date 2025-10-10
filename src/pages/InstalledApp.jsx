import React from 'react';
import r from '../assets/icon-ratings.png';
import d from '../assets/icon-downloads.png';
import { removeFromDB } from '../utility/addToDB';

const InstalledApp = ({app,remove}) => {

const handleRemove=()=>{
    removeFromDB(app.id)
    remove(app.id)
  };


    return (
        <div className=' flex justify-between items-center rounded-lg p-3 bg-white gap-3'>
            <div className='flex gap-3 '>
                <img className='h-12 rounded-lg' src={app.image} alt="" />
            <div className='space-y-1'>
                <h1 className='font-semibold '>{app.title}</h1>
                <div className='flex font-semibold text-sm gap-12'>
                    <span className='flex items-center text-[#00D390] gap-1'><img className='h-4' src={d} alt="" />{app.downloads}</span>
                    <span className='flex items-center text-[#FF8811] gap-1'><img className='h-4' src={r} alt="" />{app.ratingAvg}</span>
                    <span className='flex items-center text-gray-500 gap-1'>{app.size}</span>
                </div>

            </div>
            </div>
            <button onClick={handleRemove}  className="btn text-white bg-[#00D390]">Uninstall</button>

        </div>
    );
};

export default InstalledApp;