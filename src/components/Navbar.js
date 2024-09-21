import React from 'react';
import { Link } from 'react-router-dom';
import style from "../assets/styles/Navbar.css";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
  };

  const isLoggedIn = !!localStorage.getItem('loggedInUser');

  return (
    <nav className="navbar">
      <h1 className="navbar-title">User Dashboard</h1>
      <div className="navbar-links">
        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="navbar-btn">Login</Link>
            <Link to="/register" className="navbar-btn">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
