import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div className='max-w-6xl mx-auto'>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;