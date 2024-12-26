import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// action generators
import { confirmLogin, confirmLogout, getLogin } from "../../store/ConfirmLoginSlice";

// export default function Debug({ watch, setWatch }) {
// export default function Debug({ loggedIn }) {

// COMPONENT function
export default function Debug() {
  //DISPATCH TO STORE..
  const storelogin = useSelector(getLogin);
  const dispatch = useDispatch();
//   dispatch(confirmLogout());
//   console.log("store login", storelogin);
  //component tracking login state changes.
  const [watchLogin, setWatchLogin] = useState(false);
  console.log("init watchLogin", watchLogin);

  // login application state (STORE)..
  const loginstate = useSelector(getLogin);
  console.log("init loginstate", loginstate);

  //   function handleClick(e) {
  //     e.preventDefault();
  //     console.log("debug click: ", watchLogin);

  //     if (watchLogin) {
  //       console.log("handle click, signing out..");
  //       dispatch(confirmLogout());
  //       setWatchLogin(!watchLogin);
  //       //   const isSignedIn = useSelector((state) => state.login.value);
  //     } else {
  //       console.log("handle click, signing in..");
  //       dispatch(confirmLogin());
  //       setWatchLogin(!watchLogin);
  //     }
  //     console.log(`click: ${watchLogin}`);
  //   }

  //   if (loginstate !== watchLogin) {
  //     setWatchLogin(loginstate);
  //   }

  //   useEffect(() => {
  //     console.log("useEffect..");
  //     console.log("store login: ", loginstate);
  //   }, [watchLogin]);

  const token = localStorage.getItem("token");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   const [count, setCount] = useState(0);
  //   const increment = () => {
  //     setCount(count+1);
  //     setWatch(count);
  //   };
  //   useEffect(() => {
  //     console.log("watch changed");
  //   }, [watch]);
  return (
    <>
      <div className="container debug-container">
        <div className="flex-container">
          <div id="nav-group-1">
            <div className="nav-item">Login: {storelogin.toString()}</div>
            <div className="nav-item">Token: </div>
          </div>

          <div id="nav-group-2">
            <div className="nav-item">Debug</div>
          </div>
        </div>
      </div>
    </>
  );
}
