const cdBorrowingService = require('../services/cdBorrowingService');

exports.createCDBorrowing = async (req, res) => {
    try {
        const newBorrowing = await cdBorrowingService.createCDBorrowing(req.body);
        res.json(newBorrowing);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

exports.getCDBorrowingsByUserId = async (req, res) => {
    try {
        const borrowings = await cdBorrowingService.getCDBorrowingsByUserId(req.params.userId);
        res.json(borrowings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
