import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export const BookList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/read").then((response) => {
            setItems(response.data);
        })
    })

    const DeleteBook = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`);
    }

    return (
        <div className='container'>
            <div className="mt-3">
                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date</th>
                            <th>Rating</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((val, key) => {
                                return (
                                    <tr key={val._id}>
                                        <td>{val.title}</td>
                                        <td>{val.author}</td>
                                        <td>{val.date}</td>
                                        <td>{val.rating}</td>
                                        <td>
                                            <Link role="button" className="btn btn-primary" to={`/update/${val._id}`}>Edit</Link>
                                        </td>
                                        <td>
                                            <Link role="button" className="btn btn-danger" onClick={() => DeleteBook(val._id)}>Delete</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}