const nodemailer = require("nodemailer");

// Function to generate OTP (6-digit number)
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
};

// Function to send OTP via email
const sendOTP = async (email, otp) => {
  if (!email) {
    throw new Error("Email is required");
  }

  // Create the transporter object using Gmail service
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can change this to another email service if needed
    auth: {
      user: process.env.EMAIL_USER, // Your email address (configured in .env file)
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password (configured in .env file)
    },
  });

  // Send OTP email
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender's email address
      to: email, // Recipient email address
      subject: "Your OTP Code", // Subject of the email
      html: `<p>Your OTP is: <strong>${otp}</strong></p>`, // HTML body of the email with the OTP
    });

    console.log(`OTP sent to ${email}: ${otp}`); // Log for debugging (you can remove this in production)
  } catch (error) {
    console.error("Error sending OTP email:", error);
    throw new Error("Error sending OTP email"); // Handle any errors that occur while sending the email
  }
};

module.exports = { sendOTP, generateOTP };

