const pool = require("../../config/db");

// 📌 Create Occasion Card with Multiple Categories
// exports.createServiceCard = async (req, res) => {
//   const client = await pool.connect();
//   try {
//     let { title, description, categories } = req.body;
//     const image_url = req.file ? req.file.filename : null;

//     if (!title || !description || !categories) {
//       return res.status(400).json({ error: 'All fields including at least one category are required' });
//     }

//     if (typeof categories === 'string') {
//       categories = categories.split(',').map(c => c.trim());
//     }

//     if (!Array.isArray(categories) || categories.length === 0) {
//       return res.status(400).json({ error: 'At least one category is required' });
//     }

//     await client.query('BEGIN');

//     const result = await client.query(
//       `INSERT INTO service_cards (title, description, image_url)
//        VALUES ($1, $2, $3)
//        RETURNING id`,
//       [title, description, image_url]
//     );

//     const cardId = result.rows[0].id;

//     for (const categoryName of categories) {
//       const categoryRes = await client.query(
//         "SELECT id FROM service_categories WHERE name = $1",
//         [categoryName]
//       );

//       if (categoryRes.rows.length === 0) {
//         throw new Error(`Category '${categoryName}' does not exist`);
//       }

//       await client.query(
//         `INSERT INTO service_card_categories (card_id, category_id)
//          VALUES ($1, $2)`,
//         [cardId, categoryRes.rows[0].id]
//       );
//     }

//     await client.query('COMMIT');
//     res.status(201).json({ message: "service card created successfully", cardId });
//   } catch (err) {
//     await client.query('ROLLBACK');
//     console.error('Create error:', err.message);
//     res.status(500).json({ error: err.message });
//   } finally {
//     client.release();
//   }
// };
exports.createServiceCard = async (req, res) => {
  const client = await pool.connect();
  try {
    let { title, description, categories } = req.body;
    const image_url = req.file ? req.file.filename : null;

    if (!title || !description || !categories) {
      return res.status(400).json({ error: 'All fields including at least one category are required' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'Image file is required' });
    }

    if (typeof categories === 'string') {
      categories = categories.split(',').map(c => c.trim());
    }

    if (!Array.isArray(categories) || categories.length === 0) {
      return res.status(400).json({ error: 'At least one category is required' });
    }

    await client.query('BEGIN');

    const result = await client.query(
      `INSERT INTO service_cards (title, description, image_url)
       VALUES ($1, $2, $3)
       RETURNING id`,
      [title, description, image_url]
    );

    const cardId = result.rows[0].id;

    for (const categoryName of categories) {
      const categoryRes = await client.query(
        "SELECT id FROM service_categories WHERE name = $1",
        [categoryName]
      );

      if (categoryRes.rows.length === 0) {
        throw new Error(`Category '${categoryName}' does not exist`);
      }

      await client.query(
        `INSERT INTO service_card_categories (card_id, category_id)
         VALUES ($1, $2)`,
        [cardId, categoryRes.rows[0].id]
      );
    }

    await client.query('COMMIT');
    res.status(201).json({ message: "service card created successfully", cardId });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Create error:', err);
    res.status(500).json({ error: err.message });
  } finally {
    client.release();
  }
};


// 📃 Get All Occasion Cards with Categories
exports.getAllServiceCards = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        cc.id, cc.title, cc.description, cc.image_url,
        COALESCE(json_agg(c.name) FILTER (WHERE c.name IS NOT NULL), '[]') AS categories
      FROM service_cards cc
      LEFT JOIN service_card_categories ccc ON cc.id = ccc.card_id
      LEFT JOIN service_categories c ON ccc.category_id = c.id
      GROUP BY cc.id
    `);

    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Get all error:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// 📁 Get Cards by Category Name
exports.getServiceCardsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const result = await pool.query(`
      SELECT 
        cc.id, cc.title, cc.description, cc.image_url,
        COALESCE(json_agg(c.name) FILTER (WHERE c.name IS NOT NULL), '[]') AS categories
      FROM service_cards cc
      JOIN service_card_categories ccc ON cc.id = ccc.card_id
      JOIN service_categories c ON ccc.category_id = c.id
      WHERE c.name = $1
      GROUP BY cc.id
    `, [category]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No cards found for this category" });
    }

    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Get by category error:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// 🔄 Update Occasion Card and Categories
exports.updateServiceCard = async (req, res) => {
  const client = await pool.connect();
  try {
    const { id } = req.params;
    let { title, description, categories } = req.body;
    const image_url = req.file ? req.file.filename : null;

    if (typeof categories === 'string') {
      categories = categories.split(',').map(c => c.trim());
    }

    await client.query('BEGIN');

    let fields = [];
    let values = [];
    let index = 1;

    if (title) {
      fields.push(`title = $${index++}`);
      values.push(title);
    }

    if (description) {
      fields.push(`description = $${index++}`);
      values.push(description);
    }

    if (image_url) {
      fields.push(`image_url = $${index++}`);
      values.push(image_url);
    }

    if (fields.length > 0) {
      values.push(id);
      await client.query(`UPDATE service_cards SET ${fields.join(', ')} WHERE id = $${index}`, values);
    }

    if (categories && categories.length > 0) {
      await client.query("DELETE FROM service_card_categories WHERE card_id = $1", [id]);

      for (const categoryName of categories) {
        const categoryRes = await client.query("SELECT id FROM service_categories WHERE name = $1", [categoryName]);

        if (categoryRes.rows.length === 0) {
          throw new Error(`Category '${categoryName}' does not exist`);
        }

        await client.query(
          `INSERT INTO service_card_categories (card_id, category_id)
           VALUES ($1, $2)`,
          [id, categoryRes.rows[0].id]
        );
      }
    }

    await client.query('COMMIT');
    res.status(200).json({ message: "Card updated successfully" });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Update error:', err.message);
    res.status(500).json({ error: err.message });
  } finally {
    client.release();
  }
};

// ❌ Delete Occasion Card
exports.deleteServiceCard = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(`DELETE FROM service_card_categories WHERE card_id = $1`, [id]);

    const result = await pool.query(
      "DELETE FROM service_cards WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Card not found" });
    }

    res.status(200).json({ message: "Card deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};