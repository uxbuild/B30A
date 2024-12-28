import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "./RegisterSlice";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import Message from "../AlertMessage/AlertMessage";
import AlertMessage from "../AlertMessage/AlertMessage";

export default function Register() {

  //navigate hook
  const navigate = useNavigate();
  
  //state user data.
  const [form, setForm] = useState({
    fn: "",
    ln: "",
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
    console.log('change', `${e.target.name} : ${e.target.value}`);
    
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
      const firstname = form.fn;
      const lastname= form.ln;

      const response = await registerUser({ firstname, lastname, email, password });
      
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
        console.log("success message: ", message);
        // navigate("/login");
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
      <h2>Register</h2>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            id="inputFirstName"
            placeholder="Enter first name"
            name="fn"
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            id="inputLastName"
            placeholder="Enter last name"
            name="ln"
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            required
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            required
            onChange={change}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {/* <ErrorMessage message="some error.." /> */}
      {message && <AlertMessage type="error" message={message} />}
    </div>
  );
}
