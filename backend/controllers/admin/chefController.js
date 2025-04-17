// chefController.js
const pool = require('../../config/db'); // PostgreSQL connection

// 📥 Add a new chef
exports.addChef = async (req, res) => {
  const { name, speciality, experience } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const result = await pool.query(
      "INSERT INTO chefs (name, speciality, experience, image) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, speciality, experience, image]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📤 Get all chefs
exports.getAllChefs = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM chefs ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Update chef details
exports.updateChef = async (req, res) => {
  const { id } = req.params;
  const { name, speciality, experience } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const existing = await pool.query("SELECT * FROM chefs WHERE id = $1", [id]);
    if (existing.rows.length === 0) return res.status(404).json({ error: "Chef not found" });

    const result = await pool.query(
      "UPDATE chefs SET name=$1, speciality=$2, experience=$3, image=COALESCE($4, image) WHERE id=$5 RETURNING *",
      [name, speciality, experience, image, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ❌ Delete a chef
exports.deleteChef = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM chefs WHERE id = $1", [id]);
    res.json({ message: "Chef deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
