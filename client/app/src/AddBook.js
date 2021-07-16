import React from 'react';
import { useForm } from 'react-hook-form';

export const AddBook = () => {
    return (
    <div className='container'>
        <div className='mt-3'>
            <h3>Add Book</h3>
            <form>
                <div className='form-group d-flex flex-column'>
                    <label htmlFor='text'>Title :</label>
                    <input type='text' name='title' id='title' className='form-control mt-2'></input>
                    <label htmlFor='text'>Author :</label>
                    <input type='text' name='author' id='author' className='form-control mt-2'></input>
                    <label htmlFor='text'>Date :</label>
                    <input type='text' name='date' id='date' className='form-control mt-2'></input>
                    <label htmlFor='text'>Rating :</label>
                    <input type='number' name='rating' id='rating' className='form-control mt-2'></input>
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary mt-2'>
                        Add Book
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}