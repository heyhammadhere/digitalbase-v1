import { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Logout = () => {
  const [user, setUser] = useContext(AuthContext);
  useEffect(() => {
    localStorage.clear();
    setUser({});
  }, []);
  return <Navigate to="/" />;
};

export default Logout;
