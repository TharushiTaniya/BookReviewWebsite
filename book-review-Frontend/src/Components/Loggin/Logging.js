import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Logging.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [dynamicText, setDynamicText] = useState("Welcome to Our Book Reviews");

  useEffect(() => {
    const texts = [
      "Welcome to Our Book Reviews",
      "Discover Amazing Books",
      "Join Our Community",
      "Share Your Thoughts"
    ];
    let index = 0;
    const interval = setInterval(() => {
      setDynamicText(texts[index]);
      index = (index + 1) % texts.length;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signin/login", {
        username,
        password,
      });
      console.log(response.data);
      navigate("/home");
    } catch (error) {
      setError("Invalid username or password");
      console.error("There was an error logging in!", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <div className="login-text">
          <h2 className="BookReviewHub">Welcome to BookReviewHub!</h2>
          <h1>{dynamicText}</h1> {/* Dynamic text */}
          <h3>
          Find honest book reviews, ratings, and recommendations. Browse books, share your thoughts, and discover your next read. Start exploring now!
          </h3>
        </div>
        <div className="login-form-container">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <label>User Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="remember-forgot">
              
              
            </div>
            <button type="submit">Sign In</button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>} {/* error message for this */}
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;