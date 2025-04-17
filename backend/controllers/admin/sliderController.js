const pool = require('../../config/db');
const path = require('path');

exports.addSlider = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file.filename;

    const result = await pool.query(
      'INSERT INTO slider (title, description, image) VALUES ($1, $2, $3) RETURNING *',
      [title, description, image]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSliders = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM slider');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSlider = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, description } = req.body;
    const image = req.file ? req.file.filename : null;

    let query = 'UPDATE slider SET title=$1, description=$2';
    const values = [title, description];

    if (image) {
      query += ', image=$3 WHERE id=$4 RETURNING *';
      values.push(image, id);
    } else {
      query += ' WHERE id=$3 RETURNING *';
      values.push(id);
    }

    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSlider = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM slider WHERE id = $1', [id]);
    res.json({ message: 'Slider deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
