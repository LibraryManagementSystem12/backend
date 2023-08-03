const Book = require('../models/Book');

exports.getAllBooks = () => {
    return Book.find();
};

exports.createBook = (bookData) => {
    const newBook = new Book(bookData);
    return newBook.save();
};

exports.getBookById = (id) => {
    return Book.findById(id);
};

exports.updateBook = (id, bookData) => {
    return Book.findByIdAndUpdate(id, bookData, {new: true});
};

exports.deleteBook = (id) => {
    return Book.findByIdAndRemove(id);
};


exports.getTotalBooks = async () => {
    return await Book.countDocuments({});
};

exports.getRecentlyAddedBooks = async () => {
    return await Book.find().sort({created_at: -1}).limit(3);
};

// You can define other methods as needed (e.g., searchBookByTitle, etc.)
