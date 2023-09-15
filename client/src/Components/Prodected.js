import React from "react";
import { useEffect } from "react";
import { useUsernameStore } from "../Pages/Signin/useUsernameStore";
import { Navigate } from "react-router-dom";
import instance from "../axios";
function Protected({ children }) {
  const user = useUsernameStore((state) => state.username);
  console.log(user);
  /*  useEffect(async () => {
    try {
      const res = await instance.get("users/me");
      
    } catch (err) {
      console.log(err);
    }
  }, []); */
  if (!user) {
    return <Navigate to="/Signin" />;
  }
  return children;
}
export default Protected;
