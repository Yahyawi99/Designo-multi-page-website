import React from "react";
import { Link } from "react-router-dom";
// css
import "../../styles/shared/getInTouch.css";

const GetInTouch = () => {
  return (
    <section className="getInTouch">
      <div className="txt">
        <h2>Let’s talk about</h2>
        <h2>your project</h2>

        <p>
          Ready to take it to the next level? Contact us today and find out how
        </p>
        <p>our expertise can help your business grow.</p>
      </div>

      <Link
        to="/contact"
        className="link"
        onClick={() =>
          window.scrollTo({
            top: 0,
          })
        }
      >
        <button className="get-in-touch-btn">GET IN TOUCH</button>
      </Link>
    </section>
  );
};

export default GetInTouch;
