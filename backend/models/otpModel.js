const pool = require("../config/db");

// ✅ Store OTP in Database
const storeOTP = async (mobile, otp) => {
  try {
    await pool.query(
      `INSERT INTO otp_verification (mobile, otp, created_at, expires_at) 
       VALUES ($1, $2, NOW(), NOW() + INTERVAL '5 minutes') 
       ON CONFLICT (mobile) 
       DO UPDATE SET otp = EXCLUDED.otp, created_at = NOW(), expires_at = NOW() + INTERVAL '5 minutes'`,
      [mobile, otp]
    );
    console.log(`✅ OTP stored for ${mobile}`);
  } catch (err) {
    console.error("❌ Error storing OTP:", err.message);
    throw err;
  }
};

// ✅ Find Valid OTP
const findValidOTP = async (mobile, otp) => {
  try {
    const result = await pool.query(
      `SELECT * FROM otp_verification 
       WHERE mobile = $1 AND otp = $2 AND expires_at > NOW()`,
      [mobile, otp]
    );
    return result.rows.length > 0; // ✅ Returns `true` if OTP is valid
  } catch (error) {
    console.error("❌ Error finding OTP:", error);
    return false;
  }
};

// ✅ Delete OTP After Use
const deleteOTP = async (mobile) => {
  try {
    await pool.query("DELETE FROM otp_verification WHERE mobile = $1", [mobile]);
    console.log(`✅ OTP deleted for mobile: ${mobile}`);
  } catch (error) {
    console.error("❌ Error deleting OTP:", error);
  }
};

module.exports = { storeOTP, findValidOTP, deleteOTP };
