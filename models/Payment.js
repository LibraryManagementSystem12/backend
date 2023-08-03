const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    address: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
});

module.exports = mongoose.model('Payment', PaymentSchema);
