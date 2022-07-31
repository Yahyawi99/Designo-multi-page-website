import React from "react";
import { Link } from "react-router-dom";
// css
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src="/assets/shared/desktop/logo-dark.png" alt="logo" />

      <nav className="navbar">
        <ul className="links">
          <Link to="" className="link">
            <li>OUR COMPANY</li>
          </Link>

          <Link to="" className="link">
            <li>LOACTIONS</li>
          </Link>

          <Link to="" className="link">
            <li>CONTACT</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
