const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/loginController');

router.get('/login',loginController.login);





module.exports = router;