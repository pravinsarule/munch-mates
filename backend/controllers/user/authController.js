

const { findUserByMobile, createUser } = require("../../models/userModel");
const { generateOTP, sendOTPBySMS } = require("../../utils/otpService");
const { storeOTP, findValidOTP, deleteOTP } = require("../../models/otpModel");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// ✅ Check if Mobile Exists
exports.checkMobile = async (req, res) => {
  const { mobile } = req.body;

  try {
    const user = await findUserByMobile(mobile);
    res.status(200).json({ exists: !!user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// ✅ Send OTP for Login or Registration
exports.sendOtp = async (req, res) => {
  const { mobile, name, email } = req.body;

  try {
    let user = await findUserByMobile(mobile);

    if (!user && (!name || !email)) {
      return res.status(400).json({ message: "New user detected, please provide name and email" });
    }

    if (!user) {
      user = await createUser(name, email, mobile);
    }

    const otp = generateOTP();
    await storeOTP(mobile, otp);
    await sendOTPBySMS(mobile, otp);

    res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// ✅ Verify OTP, Generate Token & Login
exports.verifyOtp = async (req, res) => {
  const { mobile, otp } = req.body;

  try {
    const isValidOTP = await findValidOTP(mobile, otp);

    if (!isValidOTP) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    let user = await findUserByMobile(mobile);

    if (!user) {
      return res.status(400).json({ message: "User registration incomplete. Please provide name and email." });
    }

    await deleteOTP(mobile);

    // ✅ Generate JWT Token
    const token = jwt.sign({ id: user.id, mobile: user.mobile }, JWT_SECRET, { expiresIn: "7d" });

    // ✅ Set Token in HTTP-Only Cookie
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ success: true, message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// ✅ Logout API (Protected Route - Requires Auth)
exports.logout = async (req, res) => {
  res.cookie("authToken", "", { httpOnly: true, expires: new Date(0) });

  res.status(200).json({ success: true, message: "Logged out successfully" });
};
