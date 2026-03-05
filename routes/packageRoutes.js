const express = require('express');
const router = express.Router();
const packageController = require('../controllers/packageController');

router.get('/', packageController.getAllPackages);
router.get('/new', packageController.createForm);
router.get('/:id', packageController.show);
router.post('/', packageController.createPackage);
router.get('/:id/edit', packageController.editForm);
router.put('/:id', packageController.updatePackage); 
router.delete('/:id', packageController.deletePackage);

module.exports = router;