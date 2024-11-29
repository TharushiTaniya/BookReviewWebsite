const express = require("express");
const bcrypt = require("bcryptjs");
const db = require('../configurations/dbConnection'); // Import the database connection

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], (err, result) => {
      if (err) {
        console.error('Database error:', err);  // Log the error
        return res.status(500).json({ error: 'Error signing up', details: err.message });
      }
      res.status(201).json({ message: 'Signup successful' });
    });
  } catch (error) {
    console.error('Hashing error:', error);  // Log the error
    res.status(500).json({ error: 'Error signing up', details: error.message });
  }
});

module.exports = router;