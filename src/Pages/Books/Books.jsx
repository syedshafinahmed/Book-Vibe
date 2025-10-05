import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allbooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setAllBooks(data))
    }, [])
    return (
        <div>
            <h1>Books</h1>
        </div>
    );
};

export default Books;