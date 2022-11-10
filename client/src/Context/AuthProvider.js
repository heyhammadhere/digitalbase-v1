import { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <AuthContext.Provider value={user ? user : {}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
