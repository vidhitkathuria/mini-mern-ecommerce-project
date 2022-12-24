import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import "./Register.css";
const Register = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    try {
      const resp = await axios.post(
        "http://localhost:3000/api/users/register",
        {
          name,
          email,
          password,
        }
      );
      history.push("/")
      console.log(resp.data);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err.response.data.message);
    }
  };
  return (
    <div className="form">
      <div className="title">Sign Up</div>
      <div className="subtitle">Let's create your account!</div>
      <div className="input-container ic1">
        <input
          id="firstname"
          className="input"
          type="text"
          placeholder=" "
          onChange={(e) => setName(e.target.value)}
        />
        <div className="cut"></div>
        <label htmlFor="fullname" className="placeholder">
          Full name
        </label>
      </div>

      <div className="input-container ic2">
        <input
          id="email"
          className="input"
          type="email"
          placeholder=" "
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="cut cut-short"></div>
        <label htmlFor="email" className="placeholder">
          Email
        </label>
      </div>
      <div className="input-container ic2">
        <input
          id="password"
          className="input"
          type="password"
          placeholder=" "
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="cut"></div>
        <label htmlFor="password" className="placeholder">
          Password
        </label>
      </div>
      <button type="text" className="submit" onClick={handleSubmit}>
        submit
      </button>
      {error && (
        <p className="error" style={{ color: "red" }}>
          Error: {error}
        </p>
      )}
    </div>
  );
};

export default Register;
