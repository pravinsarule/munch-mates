
const express = require("express");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();

const app = express();

// ✅ Allow multiple origins dynamically
const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Middleware
app.use(cookieParser());
app.use(express.json());

// ✅ Static Upload Folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Routes
const adminRoutes = require("./routes/admin/authRoutes");
const userRoutes = require("./routes/user/authRoutes");
const menuRoutes = require("./routes/admin/menuRoutes");
const sliderRoutes = require("./routes/admin/sliderRoutes");
const occasionRoutes = require("./routes/admin/occasionRoutes");
const chefRoutes = require("./routes/admin/chefRoutes");
const cardRoutes = require("./routes/user/cardRoutes");

// Assign unique paths to avoid route conflict
app.use("/api/admin/auth", adminRoutes); // Changed to "/api/admin/auth"
app.use("/api/user/auth", userRoutes);   // Changed to "/api/user/auth"
app.use("/api/menu", menuRoutes);
app.use("/api/chefs", chefRoutes);
app.use("/api/sliders", sliderRoutes);
app.use("/api/occasion-cards", occasionRoutes);
app.use("/api/celebration-cards", cardRoutes);

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err.message);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
