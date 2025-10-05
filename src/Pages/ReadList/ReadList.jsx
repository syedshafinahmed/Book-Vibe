import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utilities/AddToDB';
import Book from '../Book/Book';
const ReadList = () => {
    const [sort, setSort] = useState("");
    const handleSort = (type) => {
        setSort(type)
        if (type === "pages") {
            const sortedByPage = [...readlist].sort((a, b) => b.totalPages - a.totalPages);
            setReadlist(sortedByPage);
        }
        if (type === "ratings") {
            const sortedByRatings = [...readlist].sort((a, b) => b.rating - a.rating);
            setReadlist(sortedByRatings);
        }
    }

    const [readlist, setReadlist] = useState([]);
    const data = useLoaderData();
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id));
        console.log(convertedStoredBooks);
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadlist(myReadList);
    }, [])
    return (
        <div>
            <div className='flex justify-center'>
                <details className="dropdown">
                    <summary className="btn m-1">Sort By {sort ? sort : ''}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleSort("pages")}><a>Pages</a></li>
                        <li onClick={() => handleSort("ratings")}><a>Ratings</a></li>
                    </ul>
                </details>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='font-bold text-xl pt-7'>Books I've already read: {readlist.length}</h2>
                    <div className='flex flex-wrap gap-7 py-10'>
                        {
                            readlist.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>My Wishlist</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;