const pool = require('../../config/db'); // PostgreSQL connection

// Get cards by category
const getCardsByCategory = async (req, res) => {
  const { category } = req.query;

  try {
    if (!category) {
      return res.status(400).json({ error: 'Category is required' });
    }

    const result = await pool.query(
      'SELECT * FROM celebration_cards WHERE category = $1',
      [category]
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching cards by category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getCardsByCategory,
};
