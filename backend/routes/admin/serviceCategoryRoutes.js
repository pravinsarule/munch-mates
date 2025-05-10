const express = require('express');
const router = express.Router();

const { 
  createServiceCategory, 
  getAllServiceCategories, 
  updateServiceCategory, 
  deleteServiceCategory 
} = require('../../controllers/admin/serviceCategoryController');

// 📌 Routes
router.post('/create', createServiceCategory);
router.get('/getAll', getAllServiceCategories);
router.put('/update/:id', updateServiceCategory);   
router.delete('/delete/:id', deleteServiceCategory); 

module.exports = router;