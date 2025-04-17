const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  addMenuCard,
  getAllMenuCards,
  updateMenuCard,
  deleteMenuCard,
} = require("../../controllers/admin/menuController");

// 🧺 Image Upload Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// Routes
router.post("/add", upload.single("image"), addMenuCard);
router.get("/", getAllMenuCards);
router.put("/update/:id", upload.single("image"), updateMenuCard);
router.delete("/delete/:id", deleteMenuCard);

module.exports = router;
