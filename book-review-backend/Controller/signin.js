// signin.js
const express = require("express");
const bcrypt = require("bcryptjs");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const db = require('../configurations/dbConnection');  // Import the database connection


const router = express.Router();


// Signin route
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  
  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], (err, result) => {
    if (err || result.length === 0) {
      return res.status(400).json({ error: "Invalid username" });
    }

    bcrypt.compare(password, result[0].password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(400).json({ error: "Invalid password" });
      }

      // Generate JWT token
      const token = jwt.sign({ id: result[0].id }, "your_jwt_secret", {
        expiresIn: "1h",
      });

      res.status(200).json({ message: "Login successful", token });
    });
  });
});

module.exports = router;
