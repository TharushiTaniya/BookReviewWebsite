

// reviewsController.js - Handles all CRUD operations for reviews
const db = require('../configurations/dbConnection');  // Import the database connection

// Get all reviews
const getAllReviews = (req, res) => {
  db.query('SELECT * FROM reviews', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Add a new review
const addReview = (req, res) => {
  const { book_title, author, rating, review_text, user_id } = req.body;
  db.query(
    'INSERT INTO reviews (book_title, author, rating, review_text, user_id) VALUES (?, ?, ?, ?, ?)',
    [book_title, author, rating, review_text, user_id],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Review added successfully' });    }
  );
};

// Update a review
const updateReview = (req, res) => {
  const { id } = req.params;
  const { book_title, author, rating, review_text } = req.body;
  db.query(
    'UPDATE reviews SET book_title = ?, author = ?, rating = ?, review_text = ? WHERE id = ?',
    [book_title, author, rating, review_text, id],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Review updated successfully' });
    }
  );
};

// Delete a review
const deleteReview = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM reviews WHERE id = ?', [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Review deleted successfully' });
  });
};

module.exports = {
  getAllReviews,
  addReview,
  updateReview,
  deleteReview
};
