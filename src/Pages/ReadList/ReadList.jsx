import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utilities/AddToDB';
import Book from '../Book/Book';
const ReadList = () => {
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