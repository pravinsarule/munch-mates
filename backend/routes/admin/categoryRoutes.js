const express = require('express');
const router = express.Router();

const { 
  createCategory, 
  getAllCategories, 
  updateCategory, 
  deleteCategory 
} = require('../../controllers/admin/categoryController');

// 📌 Routes
router.post('/create', createCategory);
router.get('/getAll', getAllCategories);
router.put('/update/:id', updateCategory);   
router.delete('/delete/:id', deleteCategory); 

module.exports = router;