const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: String,
    publicationDate: Date,
    description: String,
    imageUrl: String, // URL to the book's cover image
    isbn: {
        type: String,
        unique: true,
        required: true
    },
    publishedYear: {
        type: Number,
        required: true
    },
    publisher: String // You can add a field for the name of the publisher
    // Include other fields as needed
});

module.exports = mongoose.model('Book', BookSchema);
