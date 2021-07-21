import React from 'react';
import { useHistory } from 'react-router-dom';



export const UpdateBook = () => {
    const history = useHistory();

    const addToList = () => {
        history.push('/');
    }

    return (
        <div className='container'>
            <div className='mt-3'>
                <h3>Edit Book</h3>
                <form>
                    <div className='form-group d-flex flex-column'>
                        <label htmlFor='text' className='mt-1'>Title :</label>
                        <input type='text' name='title' id='title' className='form-control mt-2'></input>
                        <label htmlFor='text' className='mt-2'>Author :</label>
                        <input type='text' name='author' id='author' className='form-control mt-2'></input>
                        <label htmlFor='text' className='mt-2'>Date :</label>
                        <input type='text' name='date' id='date' className='form-control mt-2'></input>
                        <label htmlFor='text' className='mt-2'>Rating :</label>
                        <input type='number' name='rating' id='rating' className='form-control mt-2'></input>
                    </div>
                     <div className='form-group'>
                        <button type='submit' className='btn btn-primary mt-2' onClick={addToList}>
                            Update 
                        </button>
                     </div>
                </form>
            </div>
        </div>
    )
}