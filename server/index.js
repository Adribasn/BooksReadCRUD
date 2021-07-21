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
        res.send('created book');
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

});

app.delete('/delete', async(req,res) => {

})

app.listen('3001', () => {
    console.log('Server running on port LocalHost 3001...');
})