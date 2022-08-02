import React from "react";
import { useGlobal } from "../../context";
// css
import "../../styles/contact/contactUs.css";

const ContactUs = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    message,
    setMessage,
    submit,
  } = useGlobal();
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

      <form className="contact-form" onSubmit={(e) => submit(e)} noValidate>
        <input
          type="text"
          className="name input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />

        <input
          type="email"
          className="email input"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />

        <input
          type="text"
          className="phone input"
          placeholder="Phone"
          value={phone}
          onChange={(e) => {
            let value = e.currentTarget.value.replace(/\W|[a-z]+/gi, "");
            setPhone(value);
          }}
        />

        <textarea
          name="message"
          className="message input"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
        ></textarea>

        <button className="submit-btn">SUBMIT</button>
      </form>
    </section>
  );
};

export default ContactUs;
