import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export const BookList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/read").then((response) => {
            setItems(response.data);
        })
    }, [])
    

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
                        items.map((val,key) => (
                            <tr key={key}>
                                <td>
                                    {val.title}
                                </td>
                                <td>
                                    {val.author}
                                </td>
                                <td>
                                    {val.date}
                                </td>
                                <td>
                                    {val.rating}
                                </td>
                                <td>
                                    <Link to={`/edit/${key}`} className="btn btn-primary" role="button">Edit</Link>
                                </td>
                                <td>
                                    <Link to={``} className="btn btn-danger" role="button">Delete</Link>
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