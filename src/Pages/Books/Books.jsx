import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    const [allbooks, setAllBooks] = useState([]);
    // useEffect(() => {
    //     fetch('booksData.json')
    //         .then(res => res.json())
    //         .then(data => setAllBooks(data))
    // }, [])

    const booksPromise = fetch('/booksData.json').then(res => res.json())
    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className='text-3xl text-center p-6 playfair font-extrabold'>Books</h1>
            <Suspense fallback={<span className='spinner'></span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;