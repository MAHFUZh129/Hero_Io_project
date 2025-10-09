import React from 'react';
import rat from '../assets/icon-ratings.png';
import rev from '../assets/icon-review.png';
import d from '../assets/icon-downloads.png';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    
     const {id} = useParams();
     const appId =parseInt(id);
     const data =useLoaderData();
     const app =data.find(ap=>ap.id===appId);
    console.log(app,data,appId)
    return (
      
        <div className=' m-10'>
        <div className='flex '>
          <img className='h-58 rounded-lg mr-10' src={app.image} alt="" />
          <div className='space-y-4'>
          <div className=''>
          <h1 className='text-2xl font-bold'>{app.title}</h1> 
          <h3 className='font-semibold text-gray-500'>Developed by <span className='text-[#632EE3]'>{app.companyName}</span></h3> 
          </div>
            <div className="divider"></div>

          <div className='flex gap-16'>
            <div className='space-y-1'>
              <img className='h-5' src={d} alt="" />
              <h4 className='text-sm font-semibold text-gray-500'>Downloads</h4>
              <span className='text-xl font-bold'>{app.downloads}</span>
            </div>
            <div className='space-y-1'>
              <img className='h-5' src={rat} alt="" />
              <h4 className='text-sm font-semibold text-gray-500'>Ratings</h4>
              <span className='text-xl font-bold'>{app.ratingAvg}</span>
            </div>
            <div className='space-y-1'>
              <img className='h-5' src={rev} alt="" />
              <h4 className='text-sm font-semibold text-gray-500'>Total Reveiws</h4>
              <span className='text-xl font-bold'>{app.reviews}</span>
            </div>
          </div>
          <button className="btn bg-[#00D390] text-white">Install Now ({app.size})</button>
          </div>
        </div>
    <div className="divider"></div>
     <h5 className='text-xl font-semibold mb-2'>Description</h5>
  <p>{app.description}</p>
        </div>
    );
};

export default AppDetails;