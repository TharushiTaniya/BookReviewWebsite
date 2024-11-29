import React, { useState, useEffect } from 'react';
import { createReview, updateReview } from '../../Utility/api';
import './ReviewForm.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ReviewForm = ({  userId, reviewToEdit }) => {
  const [formData, setFormData] = useState({
    book_title: '',
    author: '',
    rating: 1,
    user_id: userId || '', 
    review_text: ''
  });
  const [message, setMessage] = useState('');
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (reviewToEdit) {
      setFormData({
        ...reviewToEdit
      });
    }
  }, [reviewToEdit]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/reviews")
      .then((response) => setReviews(response.data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const response = await updateReview(id, formData);
        setReviews((prevReviews) =>
          prevReviews.map((review) =>
            review.id === id ? { ...review, ...formData } : review
          )
        );
        setMessage('Review updated successfully');
      } else {
        const response = await createReview(formData);
        setReviews((prevReviews) => [...prevReviews, response.review]);
        setMessage('Review created successfully');
      }
      setFormData({
        book_title: '',
        author: '',
        rating: 1,
        review_text: ''
      });
      navigate('/home');
    } catch (error) {
      console.error('Error submitting review:', error);
      setMessage('Error submitting review. Please try again.');
    }
  };

  return (
    <div  className="add-review-bg">
    <div className="review-form-container">

      <div className="review-h1">
        <h1>
          Add Your Reviews
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="book_title"
          value={formData.book_title}
          onChange={handleChange}
          placeholder="Book Title"
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
        />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="1"
          max="5"
        />

        <input
          type="text"
          name="user_id"
          value={formData.user_id}
          onChange={handleChange}
          placeholder="User ID"
          
        />
        <textarea
          name="review_text"
          value={formData.review_text}
          onChange={handleChange}
          placeholder="Write your review"
        />
        <button type="submit">{id ? 'Update Review' : 'Submit Review'}</button>
      </form>
      {message && <div>{message}</div>}
    </div>

    </div>
  );
};

export default ReviewForm;