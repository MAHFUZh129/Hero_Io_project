import React, { useState } from 'react';
import rat from '../assets/icon-ratings.png';
import rev from '../assets/icon-review.png';
import d from '../assets/icon-downloads.png';
import { useLoaderData, useParams } from 'react-router';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { addToStoreDB } from '../utility/addToDB';


const AppDetails = () => {
    
     const {id} = useParams();
     const appId =parseInt(id);
     const data =useLoaderData();
     const app =data.find(ap=>ap.id===appId);
     const [isInstalled, setIsInstalled] = useState(false);
     
     const handleInstlledApps=id=>{
           
         addToStoreDB(id)
         setIsInstalled(true);
     }     


    return (
      
        <div className=' m-10'>
        <div className='md:flex '>
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
          {
            isInstalled ?
            (<button disabled className="btn bg-[#00D390] text-white">Installed</button>):
          (<button onClick={()=>handleInstlledApps(id)} className="btn bg-[#00D390] text-white">Install Now ({app.size})</button>)
          }
          </div>
        </div>
    <div className="divider"></div>
    
 <div 
        style={{ 
            width: '100%', 
            height: 350, 
            padding: '2px',
            marginTop:'5px' 
        }}
    >
      <h2 className='font-semibold text-xl' style={{ marginBottom: '20px', color: '#333' }}>Ratings</h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={app.ratings}
          layout="vertical" 
          margin={{ top: 0, right: 30, left: 10, bottom: 20 }} 
        >
          <CartesianGrid 
            stroke="#e0e0e0" 
            strokeDasharray="3 3" 
            horizontal={false} 
            opacity={0.5}
          />

          <YAxis 
            dataKey={app.ratings.name} 
            type="category" 
            stroke="#333"
            style={{ fontWeight: 'normal', fontSize: '14px' }}
          />

          <XAxis 
            dataKey={app.ratings.count}  
            type="number" 
            stroke="#333" 
            axisLine={false}
            tickLine={false}
          />
           <Bar 
            dataKey="count" 
            fill="#ff8c01" 
            barSize={32} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className="divider"></div>
    <div className='mt-10'>
    <h5 className='text-xl font-semibold mb-2'>Description</h5>
  <p>{app.description}</p>
    </div>
     
        </div>
    );
};

export default AppDetails;