import { useState } from "react";

import { validateEmail } from "../utils/helpers";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage("Please provide your name");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Please provide a valid email address");
      return;
    }
    if (!message) {
        setErrorMessage("Please provide a message");
        return;
      }
    alert(`Thank you ${name} I will get back to you as soon as possible!`);
   
    // need to have it send an email?

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="container text-center">
      <form className="form" onSubmit={handleFormSubmit}>
      <h6>Name:</h6>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <h6>Email:</h6>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <h6>Message:</h6>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Add message here ..."
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
