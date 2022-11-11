import { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const user = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Object.keys(user).length ? true : false);
  }, [user]);
  const handleOnSuccess = ({ profileObj, tokenObj }) => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        profile: profileObj,
        token: tokenObj,
      })
    );
    setIsLoggedIn(true);
  };
  const handleOnFailure = (error) => {
    console.log(error);
  };
  console.log(isLoggedIn);

  return (
    <div className="login">
      {isLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login With Google"
          onSuccess={handleOnSuccess}
          onFailure={handleOnFailure}
          cookiePolicy="single_host_origin"
        />
      )}
    </div>
  );
};

export default Login;
