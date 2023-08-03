const express = require('express');
const router = express.Router();
const borrowingController = require('../controllers/borrowingController');

router.post('/', borrowingController.createBorrowing);
router.get('/', borrowingController.getBorrowings);
router.put('/extend/:id', borrowingController.extendBorrowing);
router.put('/complete/:id', borrowingController.completeBorrowing);
router.get('/totalBorrowings', borrowingController.getTotalBorrowings);
router.get('/user/:userId', borrowingController.getUserBorrowings);


module.exports = router;
