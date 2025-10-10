import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../utility/addToDB';
import InstalledApp from './InstalledApp';

const Installation = () => {

    const[installedApp,setInstalledApp]=useState([])
     const data = useLoaderData()
    //  console.log(data)
    useEffect(()=>{
    const storedAppData =getStoredApp();
    const convtApps= storedAppData.map(id=>parseInt(id))
    const AppList = data.filter(app=>convtApps.includes(app.id))
    setInstalledApp(AppList)
    },[])


    

    return (
        <div className='bg-[#e8e5e5] space-y-12 px-8 py-15'>
            <div className='text-center '>
            <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
            <h3>Explore All Trending Apps on the Market developed by us</h3>
            </div>
            <div className='flex items-center md:mt-18 mb-5 justify-between'>
            <span className='text-xl font-semibold'>Installed Apps({installedApp.length})</span>
            <select defaultValue="Sort By Size" className="select text-[#636262] font-semibold w-30">
              <option >Sort By Size</option>
              <option >Low-High</option>
              <option>High-Low</option>
            </select>
            </div>
            <div className='space-y-2'>
                {
                installedApp.map(app=> <InstalledApp key={app.id} app={app}></InstalledApp>)
            }
            </div>
        </div> 
    );
};

export default Installation;





