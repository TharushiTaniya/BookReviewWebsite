import axios from 'axios';

// Base URL for the backend
const API_URL = 'http://localhost:5000/reviews'; // Change port if necessary

// Function to get all reviews
export const getReviews = async () => {
  try {
    const response = await axios.get(API_URL);
    if (response.data) {
      return response.data;
    } else {
      throw new Error('No reviews found');
    }
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

//  create a new review
export const createReview = async (reviewData) => {
  try {
    const response = await axios.post(API_URL,reviewData);
    return response.data;
  } catch (error) {
    console.error('Error creating review:', error);
    throw error;
  }
};

// Function to update an existing review
export const updateReview = async (id, reviewData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, reviewData);
    return response.data;
  } catch (error) {
    console.error('Error updating review:', error);
    throw error;
  }
};

// Function to delete a review
export const deleteReview = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return { success: true }; 
  } catch (error) {
    console.error('Error deleting review:', error);
    throw error;
  }
};