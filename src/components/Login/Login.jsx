/* TODO - add your code to create a functional React component that renders a login form */
// import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLoginMutation } from "./LoginSlice";
import AlertMessage from "../AlertMessage/AlertMessage";
import { useSelector, useDispatch } from "react-redux";

// action generators
import {
  getLogin,
  confirmLogin,
  confirmLogout,
} from "../../store/ConfirmLoginSlice";

export default function Login() {
  // state vars:
  const navigate = useNavigate();

  // action: async request to server
  const [loginUser] = useLoginMutation();

  const [submitted, setSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState(null);
  // const [form, setForm] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [firstname, setFirstname] = useState("")
  // const [lastname, setLastname] = useState("")
  // const [token, setToken] = useState("");
  const dispatch = useDispatch();

  const submit = async (e) => {
    e.preventDefault();

    try {
      // const response = await registerUser(form).unwrap();
      //const email = email;
      //const password = form.password;

      const response = await loginUser({ email, password });
      if (response.error) {
        setMessage(response.error.data.message);
      } else {
        // setToken(localStorage.getItem("token"));
        // localStorage.setItem("token", response.data.token);
        setMessage(response.data.message);
        console.log("token: ", response.data.token);
        dispatch(confirmLogin());
        navigate("/account");
      }
    } catch (error) {
      // console.log('some error', error);
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="bob@bob.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="bob"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {message && <AlertMessage type="error" message={message} />}
    </div>
  );
}

/*
import { useState } from "react";

export default function Fetch() {
  const [username, setUserName] = useState("Damien");
  const [password, setPassword] = useState("1234567");
  const [token, setToken] = useState("");

  const authenticate = async () => {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      setToken(data.token);
      authenticate();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
} 
 */
