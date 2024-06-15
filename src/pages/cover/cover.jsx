// Cover.js
import React from 'react';
import { Link } from 'react-router-dom';
import './cover.css'; // Add your styling here

const Cover = () => {
  return (
    <div className="cover-container">
      <h1 className="cover-title">Welcome to Our Website</h1>
      <Link to="/all">Enter</Link>
    </div>
  );
};

export default Cover;

