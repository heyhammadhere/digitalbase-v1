import { useState, useContext, isValidElement } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const user = useContext(AuthContext);
  return Object.keys(user).length ? (
    isValidElement(children) ? (
      children
    ) : null
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
