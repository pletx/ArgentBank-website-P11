import React, { useState } from "react";

function Form({ onFormSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={email} onChange={handleEmailChange} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">Sign In</button>
    </form>
  );
}

export default Form;
