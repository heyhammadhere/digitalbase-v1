import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <AuthContext.Provider value={user ? user : {}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
