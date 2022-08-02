import React from "react";
import { Link } from "react-router-dom";
// css
import "../../styles/shared/header.css";

const Header = ({ logo, name, showNav, setShowNav }) => {
  return (
    <header className={`header ${name}`}>
      <Link
        to="/"
        className="link"
        onClick={() => {
          window.scrollTo({
            top: 0,
          });

          setShowNav(false);
        }}
      >
        <img
          className="logo"
          src={`/assets/shared/desktop/${logo}`}
          alt="logo"
        />
      </Link>

      <nav className={`navbar ${showNav && "show-navbar"}`}>
        <ul
          className="links"
          onClick={() => {
            window.scrollTo({
              top: 0,
            });

            setShowNav(false);
          }}
        >
          <Link to="/about" className="link">
            <li>OUR COMPANY</li>
          </Link>

          <Link to="/locations" className="link">
            <li>LOACTIONS</li>
          </Link>

          <Link to="/contact" className="link">
            <li>CONTACT</li>
          </Link>
        </ul>
      </nav>

      <div className="hamburger" onClick={() => setShowNav(!showNav)}>
        {showNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
        )}
      </div>
    </header>
  );
};

export default Header;

/*
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>*/
