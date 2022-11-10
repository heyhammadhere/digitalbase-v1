import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  return loggedInUser ? true : false;
};
const Auth = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default Auth;
