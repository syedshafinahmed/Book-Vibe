import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const bookId = parseInt(id);
    const singleBook = data.find(book => book.bookId === bookId);
    const { bookName, author, review
        , tags, image, category, rating,
        yearOfPublishing, publisher, totalPages

    } = singleBook
    return (
        <div className='flex flex-col md:flex-row gap-x-10 p-10 items-center'>
            <img className='w-full md:h-130 mb-10 md:mb-0' src={image} alt="" />
            <div>
                <h1 className='font-black text-3xl'>{bookName}</h1>
                <p className='font-medium py-3 text-xl'>By: {author}</p>
                <p className='font-medium text-sm'>{category}</p>
                <p className='text-lg py-3 text-justify'><span className='font-medium'>Review:</span> {review}</p>
                <p className='py-2 font-medium'>Tag:{
                    tags.map(tag => <span className='badge badge-secondary ml-2'>{tag}</span>)
                }</p>
                <p className='text-sm pt-2 text-gray-600'>No of pages : <span className='font-bold text-black'>{totalPages}</span></p>
                <p className='text-sm text-gray-600'>Publisher : <span className='font-bold text-black'>{publisher}</span></p>
                <p className='text-sm text-gray-600'>Year of Publishing : <span className='font-bold text-black'>{yearOfPublishing}</span></p>
                <p className='text-sm text-gray-600'>Rating : <span className='font-bold text-black'>{rating}</span></p>

            </div>
        </div>
    );
};

export default BookDetails;