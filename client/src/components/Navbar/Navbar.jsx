import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Navbar.css";

const Navbar = () => {
  const user = false;
  return (
    <div className="Nav">
      <div className="navLeft">
        <i className="fa-brands fa-facebook navIcon"></i>
        <i className="fa-brands fa-twitter navIcon"></i>
        <i className="fa-brands fa-instagram-square navIcon"></i>
        <i className="fa-brands fa-github navIcon"></i>
      </div>

      <div className="navCenter">
        <ul className="navList">
          <li className="navItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link to="/" className="link">
              About
            </Link>
          </li>
          <li className="navItem">Contact</li>
          <li className="navItem">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className="navItem">{user && "Logout"}</li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <img
            className="navAvatar"
            src="data:image/jpeg;base64,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"
            alt="Profile"
          />
        ) : (
          <ul className="navList">
            <li className="navItem">
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li className="navItem">
              <Link to="/register" className="link">
                Sign Up
              </Link>
            </li>
          </ul>
        )}

        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Navbar;
