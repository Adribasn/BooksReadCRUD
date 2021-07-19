const mongoose = require('mongoose');
const BookSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },

    author: {
        type: String,
        require: true,
    },

    date: {
        type: String,
        require: true,
    },

    rating: {
        type: Number,
        require: true,
    },
});

const book = mongoose.model('Book', BookSchema);
module.exports = book;