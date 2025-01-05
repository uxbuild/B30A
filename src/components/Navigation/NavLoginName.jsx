import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { getLoginName } from "../../store/LoginNameSlice";
import { getLoginName } from "../../store/LoginNameSlice";

export default function NavLoginName() {
  const loginName = useSelector(getLoginName);

  return (
    <div>Welcome, {loginName}</div>
    // <div>Welcome, {loginName}</div>
  );
}
