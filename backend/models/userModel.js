const pool = require("../config/db");

// Find user by mobile number
exports.findUserByMobile = async (mobile) => {
  const result = await pool.query("SELECT * FROM users WHERE mobile = $1", [mobile]);
  return result.rows[0];
};

// Create a new user
exports.createUser = async (name, email, mobile) => {
  const result = await pool.query(
    "INSERT INTO users (name, email, mobile) VALUES ($1, $2, $3) RETURNING *",
    [name, email, mobile]
  );
  return result.rows[0];
};
