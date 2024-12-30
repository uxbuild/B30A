import { useParams, useNavigate } from "react-router-dom";
import { TOKEN_ID } from "../../other/token";
import { useDispatch } from "react-redux";
// action generators
import {
  getLogin,
  confirmLogin,
  confirmLogout,
} from "../../store/confirmLoginSlice";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //should save token id.
  // should check if token id exists.
  try {
    localStorage.removeItem(TOKEN_ID);
    dispatch(confirmLogout());
    // setToken(null);
    return (
      <div className="container page-container">You have been logged out.</div>
    );
    // navigate()
  } catch (error) {
    return (
      <div className="page-container">
        `An error occurred: ${error.message}`
      </div>
    );
  }
}
