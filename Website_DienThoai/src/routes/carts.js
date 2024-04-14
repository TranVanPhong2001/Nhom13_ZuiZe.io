const express = require('express');
const router = express.Router();

const cartController = require('../app/controllers/CartController');

router.get('/create', cartController.getCart);

router.post('/:id',cartController.addToCart);
router.delete('/remove/:id', cartController.removeFromCart);


module.exports = router;