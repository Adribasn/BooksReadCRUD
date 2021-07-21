const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const BookModel = require('./models/Book');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://Adribas:Ereh59@bookscrud.21jdl.mongodb.net/book?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.post('/create', async(req,res) => {
    const title = req.body.title;
    const author = req.body.author;
    const date = req.body.date;
    const rating = req.body.rating;

    const book = new BookModel({ title: title, author: author, date: date, rating: rating});

    try {
        await book.save();
        res.send('created');
    } catch (err) {
        console.log(err);
    }
});

app.get('/read', (req,res) => {
    BookModel.find({}, (err,result) => {
        if (err) {
            res.send(err);
        }

        res.send(result);
    })
});

app.put('/update', async(req,res) => {
    const newTitle = req.body.newTitle;
    const newAuthor = req.body.newAuthor;
    const newDate = req.body.newDate;
    const newRating = req.body.newRating;
    const id = req.body.id;

    try {
        BookModel.findById(id, (err, updatedBook) => {
            updatedBook.title = newTitle;
            updatedBook.author = newAuthor;
            updatedBook.date = newDate;
            updatedBook.rating = newRating;
        })

        res.send('updated')
    } catch (err) {
        console.log(err);
    }
});

app.delete('/delete/:id', async(req,res) => {
    const id = req.params.id;

    await BookModel.findByIdAndRemove(id).exec();
    res.send('deleted');
})

app.listen('3001', () => {
    console.log('Server running on port LocalHost 3001...');
})