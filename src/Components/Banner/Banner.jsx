import React from 'react';
import bookimage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='flex justify-between items-center max-w-6xl mx-auto mt-10'>
            <div>
                <h1 className='playfair font-bold text-5xl'>Books to freshen up your bookshelf</h1>
                <button className='btn btn-primary bg-[#23BE0A] border-none mt-10 rounded-lg'>View The List</button>
            </div>
            <div>
                <img src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;