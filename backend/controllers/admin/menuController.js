const pool = require('../../config/db');

// 📥 Add new card
exports.addMenuCard = async (req, res) => {
  const { title, description, price } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const result = await pool.query(
      "INSERT INTO menu_cards (title, description, price, image) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, description, price, image]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📤 Get all cards
exports.getAllMenuCards = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM menu_cards ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Update card
exports.updateMenuCard = async (req, res) => {
  const { id } = req.params;
  const { title, description, price } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const existing = await pool.query("SELECT * FROM menu_cards WHERE id = $1", [id]);
    if (existing.rows.length === 0) return res.status(404).json({ error: "Card not found" });

    const result = await pool.query(
      "UPDATE menu_cards SET title=$1, description=$2, price=$3, image=COALESCE($4, image) WHERE id=$5 RETURNING *",
      [title, description, price, image, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ❌ Delete card
exports.deleteMenuCard = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM menu_cards WHERE id=$1", [id]);
    res.json({ message: "Card deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
