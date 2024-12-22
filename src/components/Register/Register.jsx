import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "./RegisterSlice";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [registerUser] = useRegisterMutation();
  const [error, setError] = useState(null);

  const change = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log('submit form', form);
    
    try {
      // const { data } = await axios.post("http://localhost:3000/api/register", {
      //   email: form.email,
      //   password: form.password,
      // });

      // const response = await fetch("http://localhost:3000/api/register", {
      //     method: "Post",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email: form.email,
      //       password: form.password,
      //     }),
      //   });
      //   const data = await response.json();

      // const response = await registerUser(form).unwrap();
      const email = form.email;
      const password = form.password;
      const response = await registerUser({ email, password})

      console.log('register user response', response);
      response.error && setError(response.error.data.message)
      response.error && console.log('error message: ', error);

      // const error = response.error ? response.error : null;
      // error && console.log('error status', response.error.status);
      // error && console.log('error message', response.error.data.message);
      
      
      // console.log(data);
      // localStorage.setItem("token", data.token);
      // save token locally..does token need to saved in STORE?
      // navigate to accounts once registered.
      // navigate("/login");
    } catch (error) {
      // console.log('some error', error);
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
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
            onChange={change}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {/* <ErrorMessage message="some error.." /> */}
      <ErrorMessage message={error} />
    </div>
  );
}
