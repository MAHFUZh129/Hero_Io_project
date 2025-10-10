import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Apps from './Apps';

const AllApps = () => {

    const data =useLoaderData()
    // console.log(data)
    return (
        <div className='px-6 bg-[#e8e5e5]  py-12 space-y-10'>
            <div className='text-center'>
         <h2 className='text-4xl font-bold'>Our All Applications</h2>
         <h3>Explore All Apps on the Market developed by us. We code for Millions</h3>
            </div>
            <div className='flex justify-between'>
                <span className='text-xl font-bold'>({data.length})Apps Found</span>
                <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search Apps" />
</label>
      </div>
            <div className='grid grid-cols-1 md:grid-cols-4  gap-4 '>
                   
                    <Suspense fallback={<span>Loading</span>}>
                       {
                        data.map((app)=><Apps app={app}></Apps>)
                       }
                    </Suspense> 
                      </div>
        </div>
    );
};

export default AllApps;