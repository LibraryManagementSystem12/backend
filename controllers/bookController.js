const bookService = require('../services/bookService');

exports.getAllBooks = (req, res) => {
    bookService.getAllBooks()
    .then(books => res.json(books))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.createBook = (req, res) => {
    bookService.createBook(req.body)
    .then(book => res.json(book))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.getBookById = (req, res) => {
    bookService.getBookById(req.params.id)
    .then(book => {
        if(book){
            res.json(book);
        }else{
            res.status(404).json({ error: 'Book not found' });
        }
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.updateBook = (req, res) => {
    bookService.updateBook(req.params.id, req.body)
    .then(book => res.json(book))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.deleteBook = (req, res) => {
    bookService.deleteBook(req.params.id)
    .then(() => res.json({ message: 'Book deleted successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.getTotalBooks = async (req, res) => {
    try {
        const totalBooks = await bookService.getTotalBooks();
        res.json({totalBooks});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getRecentlyAddedBooks = async (req, res) => {
    try {
        const recentBooks = await bookService.getRecentlyAddedBooks();
        res.json(recentBooks);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};


// Define other methods as needed
