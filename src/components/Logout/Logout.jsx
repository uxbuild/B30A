import { useParams, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  //should save token id.
  // should check if token id exists.
  try {
    localStorage.removeItem("token");
    // setToken(null);
    return "You have been logged out.";
    // navigate()
  } catch (error) {
    return `An error occurred: ${error.message}`;
  }
}
