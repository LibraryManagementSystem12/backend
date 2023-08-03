const router = require('express').Router();
const paymentController = require('../controllers/paymentController');

router.post('/', paymentController.createPayment);
router.get('/', paymentController.getAllPayments);
router.get('/:userId', paymentController.getPaymentsByUserId);

module.exports = router;
