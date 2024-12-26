import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// action generators
import { login, logout } from "../../store/ConfirmLoginSlice";

// export default function Debug({ watch, setWatch }) {
// export default function Debug({ loggedIn }) {
export default function Debug() {
  //   const isSignedIn = useSelector((state) => state.login.value);
  const dispatch = useDispatch();
  const [watchLogin, setWatchLogin] = useState(false);
  //   setWatchLogin(useSelector((state)=>state.login.value))
  const loginstate = useSelector((state) => state.login.value);

  function handleClick(e) {
    e.preventDefault();
    console.log("debug click: ", watchLogin);

    // dispatch(login());
    if (watchLogin) {
      console.log("handle click, signing out..");
      dispatch(logout());
      setWatchLogin(!watchLogin);
      //   const isSignedIn = useSelector((state) => state.login.value);
    } else {
      console.log("handle click, signing in..");
      dispatch(login());
      setWatchLogin(!watchLogin);
    }
    console.log(`click: ${watchLogin}`);
  }

  useEffect(() => {
    console.log("useEffect..");
    console.log("store login: ", loginstate);
  }, [watchLogin]);

  // const token = localStorage.getItem("token");
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
                 Login:
               </div>
              
               <div id="nav-group-2">
                Token:
               </div>
             </div>
           </div>
    </>
  );
}
