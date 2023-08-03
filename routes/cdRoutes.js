const router = require('express').Router();
const cdController = require('../controllers/cdController');

router.post('/', cdController.createCD);
router.get('/', cdController.getAllCDs);
router.get('/:cdId', cdController.getSingleCD);
router.put('/:cdId', cdController.updateCD);
router.delete('/:cdId', cdController.deleteCD);

module.exports = router;
