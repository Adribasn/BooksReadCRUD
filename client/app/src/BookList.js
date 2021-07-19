import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const BookList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems([
            {title: "The maze runner", author: "James Dashner", date: "09/11/2020", rating: "3"},
        ])
    }, [])

    return (
        <div className='container'>
            <div className="mt-3">
                <table className="table table-striped mt-3">
                    <thread>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date</th>
                            <th>Rating</th>
                        </tr>
                    </thread>
                    <tbody>
                        {
                        items.map(book => (
                            <tr key={book.id}>
                                <td>
                                    {book.title}
                                </td>
                                <td>
                                    {book.author}
                                </td>
                                <td>
                                    {book.date}
                                </td>
                                <td>
                                    {book.rating}
                                </td>
                                <td>
                                    <Link to={`/edit/${book.id}`}>Edit</Link>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}