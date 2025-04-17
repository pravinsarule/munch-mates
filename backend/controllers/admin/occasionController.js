const pool = require("../../config/db");

// ➕ Create Occasion Card
// exports.createOccasionCard = async (req, res) => {
//   try {
//     const { title, description, category } = req.body;
//     const image_url = req.file ? req.file.filename : null;

//     const result = await pool.query(
//       "INSERT INTO celebration_cards (title, description, image_url, category) VALUES ($1, $2, $3, $4) RETURNING *",
//       [title, description, image_url, category]
//     );

//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

exports.createOccasionCard = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    // ✅ Handle uploaded image
    const image_url = req.file ? req.file.filename : null;

    if (!title || !description || !category) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const result = await pool.query(
      `INSERT INTO celebration_cards (title, description, image_url, category)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [title, description, image_url, category]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating occasion card:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// 📃 Get All Occasion Cards
exports.getAllOccasionCards = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM celebration_cards");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📂 Get Cards by Category
// exports.getOccasionCardsByCategory = async (req, res) => {
//   try {
//     const { category } = req.params;
//     const result = await pool.query(
//       "SELECT * FROM celebration_cards WHERE category = $1",
//       [category]
//     );
//     res.json(result.rows);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

exports.getOccasionCardsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    // Basic validation for category parameter
    if (!category || typeof category !== "string") {
      return res.status(400).json({ error: "Invalid category" });
    }

    const result = await pool.query(
      "SELECT * FROM celebration_cards WHERE category = $1",
      [category]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No food items found for this category" });
    }

    res.json(result.rows);
  } catch (err) {
    console.error("Database query error:", err); // Log error for debugging
    res.status(500).json({ error: err.message });
  }
};


// ✏ Update Occasion Card
// exports.updateOccasionCard = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, description, category } = req.body;
//     const image_url = req.file ? req.file.filename : null;

//     const result = await pool.query(
//       "UPDATE celebration_cards SET title = $1, description = $2, image_url = $3, category = $4 WHERE id = $5 RETURNING *",
//       [title, description, image_url, category, id]
//     );

//     res.json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
exports.updateOccasionCard = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category } = req.body;
    const image_url = req.file ? req.file.filename : null;

    // Prepare parts of the query dynamically
    let setStatements = [];
    let values = [];
    let paramIndex = 1;

    if (title) {
      setStatements.push(`title = $${paramIndex++}`);
      values.push(title);
    }

    if (description) {
      setStatements.push(`description = $${paramIndex++}`);
      values.push(description);
    }

    if (category) {
      setStatements.push(`category = $${paramIndex++}`);
      values.push(category);
    }

    if (image_url) {
      setStatements.push(`image_url = $${paramIndex++}`);
      values.push(image_url);
    }

    // If no fields provided to update
    if (setStatements.length === 0) {
      return res.status(400).json({ error: 'No fields provided to update' });
    }

    // Final query
    const query = `
      UPDATE celebration_cards
      SET ${setStatements.join(', ')}
      WHERE id = $${paramIndex}
      RETURNING *`;

    values.push(id); // Push the id as the final parameter

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Card not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Update error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};





// ❌ Delete Occasion Card
exports.deleteOccasionCard = async (req, res) => {
  try {
    const { id } = req.params;

    // Optional: Validate ID format if needed
    if (!id || isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }

    const result = await pool.query(
      "DELETE FROM celebration_cards WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Card not found" });
    }

    res.status(200).json({ message: "Card deleted successfully" });
  } catch (err) {
    console.error("Error deleting card:", err.message); // Debug log
    res.status(500).json({ error: "Internal Server Error" });
  }
};
