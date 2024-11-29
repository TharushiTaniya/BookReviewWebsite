import React, { useState } from 'react';
import { updateReview } from '../api';
import './ReviewEditForm.css';

const ReviewEditForm = ({ review, setReviews }) => {
  const [bookTitle, setBookTitle] = useState(review.book_title);
  const [author, setAuthor] = useState(review.author);
  const [rating, setRating] = useState(review.rating);
  const [reviewText, setReviewText] = useState(review.review_text);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedReview = await updateReview(review.id, { book_title: bookTitle, author, rating, review_text: reviewText });
      setReviews((prevReviews) => prevReviews.map((r) => (r.id === updatedReview.id ? updatedReview : r)));
    } catch (error) {
      console.error('Error updating review', error);
    }
  };

  return (
    <form className="review-edit-form" onSubmit={handleSubmit}>
      <h3>Edit Review</h3>
      <input
        type="text"
        placeholder="Book Title"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <textarea
        placeholder="Review Text"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <button type="submit">Update Review</button>
    </form>
  );
};

export default ReviewEditForm;
