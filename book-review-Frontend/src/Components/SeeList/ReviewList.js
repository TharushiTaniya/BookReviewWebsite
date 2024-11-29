import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ReviewList.css"; // Import the CSS file

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [editForm, setEditForm] = useState({
    book_title: "",
    author: "",
    rating: "",
    review_text: "",
  });
  const [filterRating, setFilterRating] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/reviews")
      .then((response) => setReviews(response.data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/reviews/${id}`, editForm)
      .then(() => {
        setReviews((prev) =>
          prev.map((review) =>
            review.id === id ? { ...review, ...editForm } : review
          )
        );
        setEditingReviewId(null);
      })
      .catch((error) => console.error("Error updating review:", error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/reviews/${id}`)
      .then(() => setReviews((prev) => prev.filter((review) => review.id !== id)))
      .catch((error) => console.error("Error deleting review:", error));
  };

  const handleEdit = (review) => {
    setEditingReviewId(review.id);
    setEditForm(review);
  };

  const handleFilterChange = (e) => {
    setFilterRating(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredAndSortedReviews = reviews
    .filter((review) =>
      filterRating ? review.rating === parseInt(filterRating) : true
    )
    .filter((review) => review.book_title.toLowerCase().includes(searchTerm))
    .sort((a, b) => {
      const dateA = new Date(a.date_added);
      const dateB = new Date(b.date_added);
      return dateB - dateA;
    });

  return (
    <div className="review-list-container">
      <h1>Review List</h1>

      <div className="review-controls">
        <input
          type="text"
          placeholder="Search by Book Name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={filterRating} onChange={handleFilterChange}>
          <option value="">All Ratings</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>

      <div>
      <div className="review-grid">
        {filteredAndSortedReviews.map((review) => (
          <div className="review-item" key={review.id}>
            {editingReviewId === review.id ? (
              <form onSubmit={(e) => handleUpdate(e, review.id)}>
                <input
                  type="text"
                  name="book_title"
                  placeholder="Book Title"
                  value={editForm.book_title}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="author"
                  placeholder="Author"
                  value={editForm.author}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating (1-5)"
                  value={editForm.rating}
                  onChange={handleInputChange}
                  required
                  min="1"
                  max="5"
                />
                <textarea
                  name="review_text"
                  placeholder="Review Text"
                  value={editForm.review_text}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <button type="submit">Update</button>
              </form>
            ) : (
              <>
                <h3>{review.book_title}</h3>
                <p><strong>Author:</strong> {review.author}</p>
                <p><strong>Rating:</strong> {review.rating}</p>
                <p><strong>Review:</strong> {review.review_text}</p>
                <p><strong>Added On:</strong> {new Date(review.date_added).toLocaleDateString()}</p>
                <button onClick={() => handleEdit(review)}>Edit</button>
                <button onClick={() => handleDelete(review.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default App;
