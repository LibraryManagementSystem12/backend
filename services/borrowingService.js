const Borrowing = require('../models/Borrowing');

exports.createBorrowing = async (borrowingData) => {
    const borrowing = new Borrowing(borrowingData);
    return await borrowing.save();
};

exports.getBorrowings = async () => {
    return await Borrowing.find({});
};

exports.getBorrowingById = async (id) => {
    return await Borrowing.findById(id);
};

exports.extendBorrowing = async (id) => {
    const borrowing = await this.getBorrowingById(id);
    borrowing.endDate = new Date(borrowing.endDate.getTime() + 7*24*60*60*1000); // Extend by one week
    return await borrowing.save();
};

exports.completeBorrowing = async (id) => {
    const borrowing = await this.getBorrowingById(id);
    borrowing.status = 'returned';
    return await borrowing.save();
};


exports.getTotalBorrowings = async () => {
    return await Borrowing.countDocuments({});
};


exports.getBorrowingsByUser = async (userId) => {
    try {
        return await Borrowing.find({ userId: userId });
    } catch (err) {
        throw err;
    }
};


exports.getTotalBorrowings = async () => {
    return await Borrowing.countDocuments({});
};