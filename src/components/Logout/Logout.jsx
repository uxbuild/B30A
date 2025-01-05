import { useNavigate } from "react-router-dom";
import { TOKEN_ID } from "../../other/token";
import { useDispatch } from "react-redux";
import NavTitle from "../Navigation/NavTitle";
import { setLoginName } from "../../store/LoginNameSlice";

// action generators
import { confirmLogout } from "../../store/confirmLoginSlice";

export default function Logout() {
  const dispatch = useDispatch();
  console.log("LOGOUT ..");

  try {
    localStorage.removeItem(TOKEN_ID);
    dispatch(confirmLogout());
    dispatch(setLoginName("GUEST")); // better way to handle this..

    return (
      <div className="container page-container">
        <div className="col-section">
          <NavTitle />
        </div>
        <div className="confirmation-message">
          You have successfully signed out.
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="page-container">
        `An error occurred: ${error.message}`
      </div>
    );
  }
}
