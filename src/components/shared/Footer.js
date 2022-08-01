import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context";
// css
import "../../styles/shared/footer.css";
// components
import Header from "./Header";

const Footer = () => {
  const { setShowNav } = useGlobal();

  return (
    <footer>
      <div className="first-row">
        <Header logo="logo-light.png" showNav={true} />
      </div>

      <div className="second-row">
        <ul>
          <li>Designo Central Office</li>
          <li>3886 Wellington Street</li>
          <li>Toronto, Ontario M9C 3J5</li>
        </ul>

        <ul>
          <li>Contact Us (Central Office)</li>
          <li>P : +1 253-863-8967</li>
          <li>M : contact@designo.com</li>
        </ul>

        <div className="social-media-icons">
          <Link to="" className="link">
            <img
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="Facebook"
            />
          </Link>

          <Link to="" className="link">
            <img src="/assets/shared/desktop/icon-youtube.svg" alt="Youtube" />
          </Link>

          <Link to="" className="link">
            <img src="/assets/shared/desktop/icon-twitter.svg" alt="Twitter" />
          </Link>

          <Link to="" className="link">
            <img
              src="/assets/shared/desktop/icon-pinterest.svg"
              alt="Pintrest"
            />
          </Link>

          <Link to="" className="link">
            <img
              src="/assets/shared/desktop/icon-instagram.svg"
              alt="Instagram"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
