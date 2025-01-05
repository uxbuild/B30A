import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserAccountQuery } from "./AccountSlice";
import { useSearchParams } from "react-router-dom";
import { getLogin } from "../../store/confirmLoginSlice";
import { useSelector, useDispatch } from "react-redux";
import Reservations from "../Reservations/Reservations";
import NavTitle from "../Navigation/NavTitle";
import { setLoginName } from "../../store/LoginNameSlice";

export default function Account() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const msg = searchParams.get("msg");
  const login = useSelector(getLogin);

  // init request response.
  const {
    data: userData,
    isSuccess,
    error,
    refetch,
  } = useGetUserAccountQuery();

  const [accountId, setAccountId] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  // check for async response in effect
  useEffect(() => {

    if (isSuccess) {
      console.log("ACCOUNT use effect - success account query");

      setAccountId(userData.id);
      setFirstname(userData.firstname);
      setLastname(userData.lastname);
      setEmail(userData.email);
      dispatch(setLoginName(`${userData.firstname} ${userData.lastname}`));
    }
  }, [isSuccess, login]);

  return (
    <>
      {/* IF LOGGED IN.. */}
      {login && (
        <div className=" container page-container">
          {msg && <div className="confirmation-message">{msg}</div>}

          <div className="col-section">
            <NavTitle />
          </div>
          <div className="flex-container">
            <div id="account-user" className="account-info-container">
              <div className="account-info-item">
                <span className="form-label">Account ID:</span> {accountId}
              </div>
              <div className="account-info-item">
                <span className="form-label">First Name:</span> {firstname}
              </div>
              <div className="account-info-item">
                <span className="form-label">Last Name:</span> {lastname}
              </div>
              <div className="account-info-item">
                <span className="form-label">Email:</span> {email}
              </div>
            </div>
            <div id="account-reservations" className="account-info-container">
              <Reservations />
            </div>
          </div>
        </div>
      )}
      {!login && (
        <div className=" container page-container">
          {msg && <div className="confirmation-message">{msg}</div>}

          <div className="flex-container">
            <div className="alert-message">
              Please sign in to access your account.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
