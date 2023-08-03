const Payment = require('../models/Payment');

exports.createPayment = async (paymentData) => {
    try {
        return await Payment.create(paymentData);
    } catch (err) {
        throw err;
    }
};

exports.getAllPayments = async () => {
    try {
        return await Payment.find();
    } catch (err) {
        throw err;
    }
};

exports.getPaymentsByUserId = async (userId) => {
    try {
        return await Payment.find({ userId });
    } catch (err) {
        throw err;
    }
};
