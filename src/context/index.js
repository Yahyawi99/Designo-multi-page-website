import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const Provider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // wait
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // form handler
  const submit = async (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll(".input");
    const email = document.querySelector(".email");

    if (name && emailValidator(email) && message) {
      inputs.forEach(async (e) => {
        e.style.borderBottom = "4px solid green";
        await wait(2500);
        e.style.borderBottom = "1px solid var(--white)";
      });

      await wait(1000);

      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
    } else {
      inputs.forEach(async (e) => {
        if (e.value === "") {
          e.style.borderBottom = "4px solid red";
          await wait(2500);
          e.style.borderBottom = "1px solid var(--white)";
        }
      });
    }

    if (!emailValidator(email)) {
      email.style.borderBottom = "4px solid red";
      await wait(2500);
      email.style.borderBottom = "1px solid var(--white)";
    }
  };

  const emailValidator = (text) => {
    const regex = /^[a-z]{4,}\d*\@[a-z]+\.[a-z]+$/gi;
    const value = regex.test(text);
    return value;
  };

  return (
    <AppContext.Provider
      value={{
        showNav,
        setShowNav,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        message,
        setMessage,
        submit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(AppContext);
};

export default Provider;
