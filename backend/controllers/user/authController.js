

// const { findUserByMobile, createUser } = require("../../models/userModel");
// const { generateOTP, sendOTPBySMS } = require("../../utils/otpService");
// const { storeOTP, findValidOTP, deleteOTP } = require("../../models/otpModel");
// const jwt = require("jsonwebtoken");

// const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// // ✅ Check if Mobile Exists
// exports.checkMobile = async (req, res) => {
//   const { mobile } = req.body;

//   try {
//     const user = await findUserByMobile(mobile);
//     res.status(200).json({ exists: !!user });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };

// // ✅ Send OTP for Login or Registration
// exports.sendOtp = async (req, res) => {
//   const { mobile, name, email } = req.body;

//   try {
//     let user = await findUserByMobile(mobile);

//     if (!user && (!name || !email)) {
//       return res.status(400).json({ message: "New user detected, please provide name and email" });
//     }

//     if (!user) {
//       user = await createUser(name, email, mobile);
//     }

//     const otp = generateOTP();
//     await storeOTP(mobile, otp);
//     await sendOTPBySMS(mobile, otp);

//     res.status(200).json({ success: true, message: "OTP sent successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };

// // ✅ Verify OTP, Generate Token & Login
// exports.verifyOtp = async (req, res) => {
//   const { mobile, otp } = req.body;

//   try {
//     const isValidOTP = await findValidOTP(mobile, otp);

//     if (!isValidOTP) {
//       return res.status(400).json({ message: "Invalid or expired OTP" });
//     }

//     let user = await findUserByMobile(mobile);

//     if (!user) {
//       return res.status(400).json({ message: "User registration incomplete. Please provide name and email." });
//     }

//     await deleteOTP(mobile);

//     // ✅ Generate JWT Token
//     const token = jwt.sign({ id: user.id, mobile: user.mobile }, JWT_SECRET, { expiresIn: "7d" });

//     // ✅ Set Token in HTTP-Only Cookie
//     res.cookie("authToken", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "Strict",
//       maxAge: 7 * 24 * 60 * 60 * 1000,
//     });

//     res.status(200).json({ success: true, message: "Login successful", user });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };

// // ✅ Logout API (Protected Route - Requires Auth)
// exports.logout = async (req, res) => {
//   res.cookie("authToken", "", { httpOnly: true, expires: new Date(0) });

//   res.status(200).json({ success: true, message: "Logged out successfully" });
// };


const pool = require("../../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { generateOTP, sendOTP } = require("../../utils/sendOTP");

// Register User and Send OTP
const register = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  if (!name || !email || !mobile || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1 OR mobile = $2",
      [email, mobile]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (name, email, mobile, password)
       VALUES ($1, $2, $3, $4)
       RETURNING id, name, email, mobile`,
      [name, email, mobile, hashedPassword]
    );

    const user = result.rows[0];

    res.status(201).json({
      message: "User registered successfully.",
      user,
    });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};


// Login: Email + Password → Send OTP
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate OTP and store it in the database
    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

    await pool.query(
      `UPDATE users SET otp_code = $1, otp_expires_at = $2 WHERE id = $3`,
      [otp, expiresAt, user.id]
    );

    // Send OTP via email after storing it
    await sendOTP(user.email, otp);

    res.json({
      status: "otp_sent",
      message: "OTP sent to email",
      user: { name: user.name, email: user.email },
      email,
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Verify OTP and Login (returns JWT)
// Verify OTP and Login (returns JWT)
const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: "Email and OTP are required" });
  }

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    const user = result.rows[0];

    console.log("User data from DB:", user); // 🔍 Debug

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.otp_code !== otp) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    if (!user.otp_expires_at || new Date(user.otp_expires_at) < new Date()) {
      return res.status(400).json({ error: "OTP has expired" });
    }

    await pool.query(
      "UPDATE users SET otp_code = NULL, otp_expires_at = NULL WHERE id = $1",
      [user.id]
    );

    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      status: "verified",
      message: "OTP verified successfully",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
      },
    });
  } catch (error) {
    console.error("OTP Verify Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};



// Logout placeholder
const logout = async (req, res) => {
  res.json({ status: "success", message: "Logged out successfully" });
};

module.exports = { register, login, verifyOTP, logout };
