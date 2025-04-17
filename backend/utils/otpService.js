const crypto = require("crypto");
const twilio = require("twilio");
require("dotenv").config(); // Ensure environment variables are loaded

// Twilio Credentials (Loaded from .env)
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

// Twilio Client
const twilioClient = twilio(accountSid, authToken);

// ✅ Generate 6-digit OTP
const generateOTP = () => {
  return crypto.randomInt(100000, 999999).toString();
};

// ✅ Send OTP via SMS
const sendOTPBySMS = async (mobile, otp) => {
  try {
    console.log(`📩 Sending OTP: ${otp} to ${mobile}`); // Debugging

    const message = await twilioClient.messages.create({
      body: `Your OTP is: ${otp}`,
      from: twilioNumber,
      to: `+91${mobile}`, // Ensure country code is correct
    });

    console.log("✅ OTP sent successfully:", message.sid);
    return message.sid;
  } catch (error) {
    console.error("❌ Error sending OTP:", error.message);
    throw new Error("Failed to send OTP");
  }
};

module.exports = { generateOTP, sendOTPBySMS };
