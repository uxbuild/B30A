import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "./RegisterSlice";
import AlertMessage from "../AlertMessage/AlertMessage";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavTitle from "../Navigation/NavTitle";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmLogin,
  confirmLogout,
  getLogin,
} from "../../store/confirmLoginSlice";

export default function Register() {
  // navigate
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  const [message, setMessage] = useState(null);

  const login = useSelector(getLogin);

  const change = (e) => {
    e.preventDefault();
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //on form submit..
  const submit = async (e) => {
    e.preventDefault();
    setIsError(false);
    setIsSuccess(false);
    setMessage(null);

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

      // console.log("register user response", response);

      if (response.error) {
        setIsSuccess(false);
        setIsError(true);
        setMessage(response.error.data.message);
      } else {
        setIsSuccess(true);
        setIsError(false);

        // set login state.
        dispatch(confirmLogin());
        setMessage("Registration successful.");
        navigate(
          "/account?msg=Registration successful. Welcome to Book Buddy!"
        );
      }
    } catch (error) {
      setMessage(error.data.message);
      setIsError(true);
    }
  };

  return (
    <div className="container page-container">
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
