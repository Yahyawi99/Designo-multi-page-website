import React from "react";
// css
import "../../styles/contact/contactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-txt">
        <h1>Contact Us</h1>

        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>

      <form className="contact-form">
        <input type="text" className="name" placeholder="Name" />

        <input type="email" className="email" placeholder="Email Address" />

        <input type="text" className="phone" placeholder="Phone" />

        <textarea
          name="message"
          className="message"
          placeholder="Your Message"
        ></textarea>

        <button className="submit-btn">SUBMIT</button>
      </form>
    </section>
  );
};

export default ContactUs;
