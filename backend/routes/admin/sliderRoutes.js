const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {
  addSlider,
  getSliders,
  updateSlider,
  deleteSlider
} = require('../../controllers/admin/sliderController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

router.post('/', upload.single('image'), addSlider);
router.get('/', getSliders);
router.put('/:id', upload.single('image'), updateSlider);
router.delete('/:id', deleteSlider);

module.exports = router;
