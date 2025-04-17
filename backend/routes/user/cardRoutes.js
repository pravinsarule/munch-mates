const express = require('express');
const router = express.Router();
const { getCardsByCategory } = require('../../controllers/user/cardController');

// Route to fetch cards by category
router.get('/', getCardsByCategory);

module.exports = router;
