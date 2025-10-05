import React, { use } from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    // const data = use(booksPromise);
    // console.log(data);
    const { bookName, author, bookId, review
        , tags, image, category, rating,
        yearOfPublishing, publisher

    } = singleBook;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border border-gray-300 ">
                <figure className='w-2/3 mx-auto pt-9'>
                    <img
                        className='h-[166px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body p-9">

                    <h2 className="card-title font-black text-2xl playfair">{bookName}</h2>
                    <h2 className="font-medium text-sm">{author}, {yearOfPublishing}</h2>
                    <div className="flex gap-x-2">
                        {
                            tags.map(tag => <span className='text-xs badge badge-secondary'>{tag}</span>)
                        }
                    </div>
                    <p className='text-xs italic pb-1'>Published By: {publisher
                    }</p>
                    <span className='border-t-1 border-gray-300 border-dashed py-1'></span>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline"><FaStar />{rating}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;