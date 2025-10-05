import React from 'react';
import bookimage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, cum.</h1>
                <button className='btn btn-primary'>View The List</button>
            </div>
            <div>
                <img src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;