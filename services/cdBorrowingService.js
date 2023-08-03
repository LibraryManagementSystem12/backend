const CDBorrowing = require('../models/CDBorrowing');

exports.createCDBorrowing = async (borrowingData) => {
    try {
        return await CDBorrowing.create(borrowingData);
    } catch (err) {
        throw err;
    }
};

exports.getCDBorrowingsByUserId = async (userId) => {
    try {
        return await CDBorrowing.find({ userId });
    } catch (err) {
        throw err;
    }
};
