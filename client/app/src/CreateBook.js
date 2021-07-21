import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Axios from 'axios';


export const CreateBook = () => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [rating, setRating] = useState(0);

    const addToList = () => {
        Axios.post("http://localhost:3001/create", {
            title: title,
            author: author,
            date: date,
            rating: rating
        });

        history.push('/');
    }

    return (
    <div className='container'>
        <div className='mt-3'>
            <h3>Add Book</h3>
            <form>
                <div className='form-group d-flex flex-column'>
                    <label htmlFor='text' className='mt-1'>Title :</label>
                    <input type='text' name='title' id='title' className='form-control mt-2' onChange={(event) => {
                        setTitle(event.target.value);
                    }}></input>
                    <label htmlFor='text' className='mt-2'>Author :</label>
                    <input type='text' name='author' id='author' className='form-control mt-2' onChange={(event) => {
                        setAuthor(event.target.value);
                    }}></input>
                    <label htmlFor='text' className='mt-2'>Date :</label>
                    <input type='text' name='date' id='date' className='form-control mt-2' onChange={(event) => {
                        setDate(event.target.value);
                    }}></input>
                    <label htmlFor='text' className='mt-2'>Rating :</label>
                    <input type='number' name='rating' id='rating' className='form-control mt-2' onChange={(event) => {
                        setRating(event.target.value);
                    }}></input>
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary mt-2' onClick={addToList}>
                        Add 
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
};