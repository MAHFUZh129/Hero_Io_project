import React, { Suspense } from 'react';
import TrendApp from './TrendApp';

const TrendingApps = ({data}) => {
    return (
        <div className='bg-[#e8e5e5] py-13' >
            <div className='text-center'>
            <h1 className='text-3xl font-bold'>Trending Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4  gap-4 m-10'>
             <Suspense fallback={<span>Loading</span>}>
                {
                    data.map((app)=><TrendApp key={app.id} app={app}></TrendApp>)
                }
             </Suspense>
               </div>
               <div className='text-center'>
               <button className="btn text-white bg-[#7746ea]">Show All</button>

               </div>
        </div> 
    );
};

export default TrendingApps;