import React from 'react';
import Banner from '../components/Banner';
import TrendingApps from './TrendingApps';
import { useLoaderData } from 'react-router';
import State from '../components/State';

const Home = () => {
const data = useLoaderData();
// console.log(data)

    return (
        <div>
            <Banner></Banner>
            <State></State>
            <TrendingApps data={data}></TrendingApps>
        </div>
    );
};

export default Home;