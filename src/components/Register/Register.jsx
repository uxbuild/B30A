import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "./RegisterSlice";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import Message from "../AlertMessage/AlertMessage";
import AlertMessage from "../AlertMessage/AlertMessage";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavTitle from "../Navigation/NavTitle";

export default function Register() {
  //navigate hook
  const navigate = useNavigate();

  //state user data.
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  // action generator from register slice
  const [registerUser] = useRegisterMutation();

  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const change = (e) => {
    e.preventDefault();
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // console.log("change", `${e.target.name} : ${e.target.value}`);
  };

  //on form submit..
  const submit = async (e) => {
    e.preventDefault();
    setIsError(false);
    setIsSuccess(false);
    setMessage(null);
    console.log("submit form", form);

    try {
      const email = form.email;
      const password = form.password;
      const firstname = form.firstname;
      const lastname = form.lastname;

      const response = await registerUser({
        firstname,
        lastname,
        email,
        password,
      });

      console.log("register user response", response);
      if (response.error) {
        setIsSuccess(false);
        setIsError(true);
        setMessage(response.error.data.message);
        console.log("error message: ", message);
      } else {
        setIsSuccess(true);
        setIsError(false);
        setMessage("Registration successful.");
        // localStorage.setItem("token", data.token);
        // console.log("success message: ", message);
        // navigate("/login");
        navigate(
          "/account?msg=Registration successful. Welcome to Book Buddy!"
        );
      }
    } catch (error) {
      // console.log('some error', error);
      console.error(error.data.message);
      setMessage(error.data.message);
      setIsError(true);
      console.log("try-catch error message: ", message);
    }
  };

  return (
    <div className="container page-container">
      {/* <h2>Register</h2> */}
      <div className="col-section">
        <NavTitle />
      </div>
      <div className="col-section">
        <Form className="web-form">
          {/* FIRST NAME */}
          <Form.Group
            className="mb-3"
            controlId="formFirstName"
            onSubmit={submit}
          >
            <Form.Label>First name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name.."
              name="firstname"
              onChange={change}
            />
          </Form.Group>
          {/* LAST NAME */}
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name.."
              name="lastname"
              onChange={change}
            />
          </Form.Group>
          {/*  EMAIL */}
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email.."
              name="email"
              onChange={change}
            />
          </Form.Group>
          {/* PASSWORD */}
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="text"
              placeholder="password.."
              name="password"
              onChange={change}
            />
            {/* SUBMIT button */}
          </Form.Group>
          <Button variant="primary" type="button" onClick={submit}>
            Submit
          </Button>
        </Form>
      </div>
      {message && <AlertMessage type="error" message={message} />}
    </div>
  );
}
