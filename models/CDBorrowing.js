const mongoose = require('mongoose');

const CDBorrowingSchema = new mongoose.Schema({
    cdId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CD',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    }
});

module.exports = mongoose.model('CDBorrowing', CDBorrowingSchema);
