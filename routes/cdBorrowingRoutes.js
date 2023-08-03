const router = require('express').Router();
const cdBorrowingController = require('../controllers/cdBorrowingController');

router.post('/', cdBorrowingController.createCDBorrowing);
router.get('/user/:userId', cdBorrowingController.getCDBorrowingsByUserId);

module.exports = router;
