import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReviewList from './Components/SeeList/ReviewList';
import ReviewForm from './Components/AddReviw/ReviewForm';
import Navbar from './Components/navbar/Navbar';
import Logging from './Components/Loggin/Logging';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Logging />} />
        <Route path="/reviewlist" element={<ReviewList />} />
        <Route path="/reviewform" element={<ReviewForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Logging />} />
        <Route path="/home" element={<Home />} />
      
      </Routes>
    </div>
  );
};

export default App;
