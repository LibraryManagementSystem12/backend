const borrowingService = require('../services/borrowingService');

exports.createBorrowing = async (req, res) => {
    try {
        const borrowing = await borrowingService.createBorrowing(req.body);
        res.status(201).json(borrowing);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

exports.getBorrowings = async (req, res) => {
    try {
        const borrowings = await borrowingService.getBorrowings();
        res.status(200).json(borrowings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.extendBorrowing = async (req, res) => {
    try {
        const borrowing = await borrowingService.extendBorrowing(req.params.id);
        res.status(200).json(borrowing);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.completeBorrowing = async (req, res) => {
    try {
        const borrowing = await borrowingService.completeBorrowing(req.params.id);
        res.status(200).json(borrowing);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getTotalBorrowings = async (req, res) => {
    try {
        const totalBorrowings = await borrowingService.getTotalBorrowings();
        res.json({totalBorrowings});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getUserBorrowings = async (req, res) => {
    try {
        const userBorrowings = await borrowingService.getBorrowingsByUser(req.params.userId);
        res.json(userBorrowings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getBorrowingsCount = async (req, res) => {
    try {
        const borrowingsCount = await borrowingService.getTotalBorrowings();
        res.json({borrowingsCount});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
