const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();

const app = express();

// ✅ CORS Configuration
const allowedOrigins = [
  "https://munchmate-user.netlify.app",
  "https://munch-mate-admin.netlify.app",
  "http://localhost:3000",
];

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

// ✅ Extra CORS Headers (for tools like Postman or mobile apps)
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

// ✅ Middleware
app.use(cookieParser());
app.use(express.json());

// ✅ Static Files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Routes
app.use("/api/admin/auth", require("./routes/admin/authRoutes"));
app.use("/api/user/auth", require("./routes/user/authRoutes"));
app.use("/api/menu", require("./routes/admin/menuRoutes"));
app.use("/api/sliders", require("./routes/admin/sliderRoutes"));
app.use("/api/occasion-cards", require("./routes/admin/occasionRoutes"));
app.use("/api/service-cards", require("./routes/admin/serviceRoutes"));
app.use("/api/service-categories", require("./routes/admin/serviceCategoryRoutes"));
app.use("/api/chefs", require("./routes/admin/chefRoutes"));
app.use("/api/celebration-cards", require("./routes/user/cardRoutes"));

// ✅ Error Handler
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
