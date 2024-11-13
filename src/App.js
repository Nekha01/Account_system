import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; // Import your HomePage
import SignUpPage from './SignupPage'; // Adjust the path as necessary
import LoginPage from './LoginPage'; // Import your LoginPage

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </Router>
  );
};

export default App;
