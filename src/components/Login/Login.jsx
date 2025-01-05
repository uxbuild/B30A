/* TODO - add your code to create a functional React component that renders a login form */
// import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLoginMutation } from "./LoginSlice";
import AlertMessage from "../AlertMessage/AlertMessage";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavTitle from "../Navigation/NavTitle";

// action generators
import {
  getLogin,
  confirmLogin,
  confirmLogout,
} from "../../store/confirmLoginSlice";

export default function Login() {
  // state vars:
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getLogin);

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
      const response = await loginUser({ email, password });
      if (response.error) {
        setMessage(response.error.data.message);
      } else {
        setMessage(response.data.message);
        dispatch(confirmLogin());
        navigate("/account?msg=You are now signed in.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container page-container">
      <div className="col-section">
        <NavTitle />
      </div>
      <div className="col-section">
        {isLoggedIn ? (
          <p>You are already logged in.</p>
        ) : (
          <Form className="web-form">
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email.."
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            {/* PASSWORD */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="text"
                placeholder="password.."
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* SUBMIT button */}
            </Form.Group>
            <Button variant="primary" type="button" onClick={submit}>
              Submit
            </Button>
          </Form>
        )}
      </div>
      {message && <AlertMessage type="error" message={message} />}
    </div>
  );
}
