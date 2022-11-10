import { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  return (
    <AuthContext.Provider value={loggedInUser}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
