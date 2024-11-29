import React, { useState, useEffect } from 'react';
import { getReviews } from '../../Utility/api';
import ReviewList from '../SeeList/ReviewList';
import ReviewForm from '../AddReviw/ReviewForm';
import Navbar from '../navbar/Navbar';

const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  return (

    <div className=" home-container">
      <Navbar />
      <div className="review-list-container">
        <ReviewList reviews={reviews} />  
      </div>
    </div>
  );
};

export default Home;
