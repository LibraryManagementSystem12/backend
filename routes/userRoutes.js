const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/totalUsers', userController.getTotalUsers);
router.get('/recentUsers', userController.getRecentlyAddedUsers);
router.put('/:userId', userController.editUser);
router.delete('/:userId', userController.deleteUser);
router.get('/:userId', userController.getUserById);
router.put('/resetPassword/:userId', userController.resetPassword);


module.exports = router;
