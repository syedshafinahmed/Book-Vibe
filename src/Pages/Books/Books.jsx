import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {

    // useEffect(() => {
    //     fetch('booksData.json')
    //         .then(res => res.json())
    //         .then(data => setAllBooks(data))
    // }, [])


    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className='text-3xl text-center p-6 playfair font-extrabold my-10'>Books</h1>
            <Suspense fallback={<span className='spinner'></span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20'>
                    {
                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;