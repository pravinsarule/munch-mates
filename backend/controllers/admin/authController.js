const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../../config/db');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userResult = await pool.query('SELECT * FROM admins WHERE email = $1', [email]);

    if (userResult.rows.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const user = userResult.rows[0];
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.logout = (req, res) => {
  // JWT is stateless so we can't invalidate it unless using a token blacklist
  res.status(200).json({ message: 'Logout success (token should be deleted on client)' });
};
