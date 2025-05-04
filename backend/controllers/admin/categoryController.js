const pool = require("../../config/db");

// 📌 Create a New Category
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Category name is required" });
    }

    const existingCategory = await pool.query(
      "SELECT * FROM categories WHERE name = $1",
      [name]
    );

    if (existingCategory.rows.length > 0) {
      return res.status(400).json({ error: "Category already exists" });
    }

    const result = await pool.query(
      "INSERT INTO categories (name) VALUES ($1) RETURNING *",
      [name]
    );

    res.status(201).json({ message: "Category created successfully", category: result.rows[0] });
  } catch (err) {
    console.error("Create category error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// 📃 Get All Categories
exports.getAllCategories = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM categories ORDER BY id ASC");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Get categories error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✏️ Update a Category
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Category name is required" });
    }

    const existingCategory = await pool.query(
      "SELECT * FROM categories WHERE id = $1",
      [id]
    );

    if (existingCategory.rows.length === 0) {
      return res.status(404).json({ error: "Category not found" });
    }

    const result = await pool.query(
      "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
      [name, id]
    );

    res.status(200).json({ message: "Category updated successfully", category: result.rows[0] });
  } catch (err) {
    console.error("Update category error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// 🗑️ Delete a Category
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const existingCategory = await pool.query(
      "SELECT * FROM categories WHERE id = $1",
      [id]
    );

    if (existingCategory.rows.length === 0) {
      return res.status(404).json({ error: "Category not found" });
    }

    await pool.query(
      "DELETE FROM categories WHERE id = $1",
      [id]
    );

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (err) {
    console.error("Delete category error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};