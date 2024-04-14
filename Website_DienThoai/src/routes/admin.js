const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.get('/products',adminController.showQLDS);
router.get('/products/create',adminController.createPhone);
router.post('/products/store',adminController.storePhone);

router.put('/products/:id',adminController.updatePhone);
router.get('/products/:id/edit',adminController.editPhone);


module.exports = router;