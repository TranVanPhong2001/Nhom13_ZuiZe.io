const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController');

router.get('/hienthi',productController.getAllPhone);
router.get('/create',productController.createPhone);
router.post('/store',productController.storePhone);

router.get('/:id',productController.getPhone);
//router.get('/:id/edit',productController.editPhone);
// router.put('/:id',productController.updatePhone);
// router.delete('/:id',productController.deletePhone);



module.exports = router;