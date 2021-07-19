import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';


export const AddBook = () => {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            title: '',
            author: '',
            date: '',
            rating: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            history.push('/');
        }
    })

    return (
    <div className='container'>
        <div className='mt-3'>
            <h3>Add Book</h3>
            <form onSubmit={formik.handleSubmit}>
            <div className='form-group d-flex flex-column'>
                <label htmlFor='text' className='mt-1'>Title :</label>
                <input type='text' name='title' id='title' className='form-control mt-2' onChange={formik.handleChange} value={formik.values.title}></input>
                <label htmlFor='text' className='mt-2'>Author :</label>
                <input type='text' name='author' id='author' className='form-control mt-2' onChange={formik.handleChange} value={formik.values.author}></input>
                <label htmlFor='text' className='mt-2'>Date :</label>
                <input type='text' name='date' id='date' className='form-control mt-2' onChange={formik.handleChange} value={formik.values.date}></input>
                <label htmlFor='text' className='mt-2'>Rating :</label>
                <input type='number' name='rating' id='rating' className='form-control mt-2' onChange={formik.handleChange} value={formik.values.rating}></input>
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-primary mt-2'>
                    Add 
                </button>
            </div>
        </form>
        </div>
    </div>
    );
};