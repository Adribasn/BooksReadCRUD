import Axios from 'axios';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'




export const UpdateBook = () => {
    const history = useHistory();
    const { id } = useParams();
    const [newTitle, setNewTitle] = useState('');
    const [newAuthor, setNewAuthor] = useState('');
    const [newDate, setNewDate] = useState('');
    const [newRating, setNewRating] = useState(0);

    const addToList = () => {
        Axios.put("http://localhost:3001/update", {
            id: id,
            newTitle: newTitle,
            newAuthor: newAuthor,
            newDate: newDate,
            newRating: newRating
        })

        history.push('/');
    }

    return (
        <div className='container'>
            <div className='mt-3'>
                <h3>Edit Book</h3>
                <form>
                    <div className='form-group d-flex flex-column'>
                        <label htmlFor='text' className='mt-1'>Title :</label>
                        <input type='text' name='title' id='title' className='form-control mt-2' onChange={(event) => {
                            setNewTitle(event.target.value);
                        }}></input>
                        <label htmlFor='text' className='mt-2'>Author :</label>
                        <input type='text' name='author' id='author' className='form-control mt-2' onChange={(event) => {
                            setNewAuthor(event.target.value);
                        }}></input>
                        <label htmlFor='text' className='mt-2'>Date :</label>
                        <input type='text' name='date' id='date' className='form-control mt-2' onChange={(event) => {
                            setNewDate(event.target.value);
                        }}></input>
                        <label htmlFor='text' className='mt-2'>Rating :</label>
                        <input type='number' name='rating' id='rating' className='form-control mt-2' onChange={(event) => {
                            setNewRating(event.target.value);
                        }}></input>
                    </div>
                     <div className='form-group'>
                        <button type='submit' className='btn btn-primary mt-2' onClick={() => addToList(id)}>
                            Update 
                        </button>
                     </div>
                </form>
            </div>
        </div>
    )
}