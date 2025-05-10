const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  createServiceCard,
  getAllServiceCards,
  getServiceCardsByCategory,
  updateServiceCard,
  deleteServiceCard,
} = require("../../controllers/admin/serviceController");

// 🧺 Image Upload Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed (jpeg, jpg, png, gif, webp)"));
  }
};

const upload = multer({
  storage,
  fileFilter,
});

// 📌 Routes
router.post("/create", upload.single("image"), createServiceCard );
router.get("/getAll", getAllServiceCards);
router.get("/getByCategory/:category", getServiceCardsByCategory);
router.put("/update/:id", upload.single("image"), updateServiceCard);
router.delete("/delete/:id", deleteServiceCard);

module.exports = router;