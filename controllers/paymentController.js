const paymentService = require('../services/paymentService');

exports.createPayment = async (req, res) => {
    try {
        const newPayment = await paymentService.createPayment(req.body);
        res.json(newPayment);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

exports.getAllPayments = async (req, res) => {
    try {
        const payments = await paymentService.getAllPayments();
        res.json(payments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPaymentsByUserId = async (req, res) => {
    try {
        const payments = await paymentService.getPaymentsByUserId(req.params.userId);
        res.json(payments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
