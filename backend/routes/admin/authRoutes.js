const express = require('express');
const router = express.Router();
const authController = require('../../controllers/admin/authController');

router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;
