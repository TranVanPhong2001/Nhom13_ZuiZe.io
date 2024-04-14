const express = require('express');
const router = express.Router();

const hangController = require('../app/controllers/HangController');

router.get('/hienthi',hangController.getAllHang);
router.get('/create',hangController.createHang);
router.post('/store',hangController.storeHang);
router.get('/:id',hangController.getHang);
router.get('/:id/edit',hangController.editHang);
router.put('/:id',hangController.updateHang);
router.delete('/:id',hangController.deleteHang);


module.exports = router;