const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  addChef,
  getAllChefs,
  updateChef,
  deleteChef,
} = require("../../controllers/admin/chefController");

// 🧺 Image Upload Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"), // Define the upload directory
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)), // Use timestamp for unique filenames
});
const upload = multer({ storage });

// Routes
router.post("/add-chefs", upload.single("image"), addChef);  // Add a new chef
router.get("/", getAllChefs);  // Get all chefs
router.put("/update-chefs/:id", upload.single("image"), updateChef);  // Update chef by ID
router.delete("/delete-chefs/:id", deleteChef);  // Delete chef by ID

module.exports = router;
