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

app.post('/insert', async(req,res) => {
    title = req.body.title;
    author = req.body.author;
    date = req.body.date;
    rating = req.body.rating;

    const book = BookModel({ title: title, author: author, date: date, rating: rating});

    try {
        await book.save();
        res.send('inserted book');
    } catch(err) {
        console.log(err);
    }
});

app.get('/read', async(req,res) => {
    BookModel.find({}, (err, result) => {
        if (err) {
            console.log(err);
            console.log("/read error");
        } else {
            res.send(result);
        }
    })
});

app.put('/update', async(req,res) => {

});

app.delete('/delete', async(req,res) => {

})

app.listen('3001', () => {
    console.log('Server running on port LocalHost 3001...');
})