import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utilities/AddToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const bookId = parseInt(id);
    const singleBook = data.find(book => book.bookId === bookId);
    const { bookName, author, review, tags, image, category, rating, yearOfPublishing, publisher, totalPages } = singleBook;

    const handleMarkAsRead = (id) => {
        Swal.fire({
            title: "Marked as read!",
            text: "You can check out the books you've already read!",
            icon: "success"
        });
        addToStoredDB(id);
    }
    return (
        <div className='flex flex-col md:flex-row gap-x-10 p-10 items-center max-w-6xl mx-auto'>
            <img className='w-full md:h-155 mb-10 md:mb-0' src={image} alt="" />
            <div>
                <h1 className='font-black text-3xl playfair'>{bookName}</h1>
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
                <div className='flex gap-x-5 mt-5'>
                    <button className='btn btn-soft btn-accent hover:text-white' onClick={() => handleMarkAsRead(id)}>Mark As Read</button>
                    <button className='btn btn-soft btn-info hover:text-white'>Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;