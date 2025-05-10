
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();

const app = express();

// // ✅ CORS Configuration for All Devices
// const isProduction = process.env.NODE_ENV === "production";
// const allowedOrigins = [
//   "https://munchmate-user.netlify.app",
//   "https://localhost:3000",
//   "https://munch-mate-admin.netlify.app",
//   // Add your production domains, e.g., "https://yourapp.com"
// ];

// // Flexible CORS middleware
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       // Allow all origins in development or for non-credentialed requests
//       if (!isProduction || !origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         // In production, allow only trusted origins for credentialed requests
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true, // Support cookies/auth tokens
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
// Best CORS setup
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "https://munchmate-user.netlify.app",
        "http://localhost:3000",
        "https://munch-mate-admin.netlify.ap",
      ];
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

// Extra headers to fully allow mobile apps, Postman, etc.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

// ✅ Middlewares
app.use(cookieParser());
app.use(express.json());

// ✅ Serve static files (like uploaded images)
app.use("/uploads", express.static(path.join(__dirname, "Uploads")));

// ✅ Import Routes
const adminAuthRoutes = require("./routes/admin/authRoutes");
const userAuthRoutes = require("./routes/user/authRoutes");
const menuRoutes = require("./routes/admin/menuRoutes");
const sliderRoutes = require("./routes/admin/sliderRoutes");
const occasionRoutes = require("./routes/admin/occasionRoutes");
// const categoryRoutes = require("./routes/admin/categoryRoutes");
const serviceCategoryRoutes = require("./routes/admin/serviceCategoryRoutes");
const chefRoutes = require("./routes/admin/chefRoutes");
const celebrationCardRoutes = require("./routes/user/cardRoutes");
const serviceRoutes = require("./routes/admin/serviceRoutes");

// ✅ API Routes
app.use("/api/admin/auth", adminAuthRoutes);
app.use("/api/user/auth", userAuthRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/sliders", sliderRoutes);
app.use("/api/occasion-cards", occasionRoutes);
// app.use("/api/categories", categoryRoutes);
app.use("/api/service-cards", serviceRoutes);
app.use("/api/service-categories", serviceCategoryRoutes);
app.use("/api/chefs", chefRoutes);
app.use("/api/celebration-cards", celebrationCardRoutes);

// ✅ Global Error Handler
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