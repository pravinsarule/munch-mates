// const jwt = require("jsonwebtoken");

// const JWT_SECRET = process.env.JWT_SECRET || "your_fallback_secret_key"; // Use a secure key

// // ✅ Middleware to verify JWT token from cookies
// exports.authenticateUser = (req, res, next) => {
//   try {
//     const token = req.cookies?.authToken; // Safely access cookies

//     if (!token) {
//       return res.status(401).json({ message: "Unauthorized: No token provided" });
//     }

//     // Verify JWT
//     jwt.verify(token, JWT_SECRET, (err, decoded) => {
//       if (err) {
//         return res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
//       }

//       req.user = decoded; // Attach user data to request
//       next(); // Proceed to next middleware/controller
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };


// module.exports = function (req, res, next) {
//   const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>

//   if (!token) return res.status(401).json({ message: 'Access Denied' });

//   try {
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = verified;
//     next();
//   } catch (err) {
//     res.status(400).json({ message: 'Invalid Token' });
//   }
// };


const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "your_fallback_secret_key"; // Load from env

// ✅ Middleware to verify JWT from cookies
const authenticateUserFromCookie = (req, res, next) => {
  const token = req.cookies?.authToken;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided in cookies" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
    }

    req.user = decoded;
    next();
  });
};

// ✅ Middleware to verify JWT from Authorization header (Bearer token)
const authenticateUserFromHeader = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: "Access Denied: No token in header" });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = {
  authenticateUserFromCookie,
  authenticateUserFromHeader,
};


// middleware/authMiddleware.js


exports.verifyVendor = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Token missing" });

  jwt.verify(token, process.env.JWT_SECRET, (err, vendor) => {
    if (err) return res.status(403).json({ msg: "Invalid token" });

    req.vendor = vendor;
    next();
  });
};
