const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');

router.get('/shop',homeController.shop);
router.get('/contact',homeController.contact);
router.get('/cart',homeController.cart);


router.get('/',homeController.index);
//router.get('/:_id',homeController.getDienThoai);

module.exports = router;