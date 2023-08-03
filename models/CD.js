const mongoose = require('mongoose');

const CDCatalogue = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    year: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    year: {
        type: String
    },
    label: {
        type: String
    },
    imageUrl: {
        type: String
    }
});

module.exports = mongoose.model('CD', CDCatalogue);
