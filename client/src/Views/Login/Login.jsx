import { useCallback, useContext } from "react";
import { Navigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const [user, setUser] = useContext(AuthContext);
  const handleOnSuccess = useCallback(({ profileObj, tokenObj }) => {
    const user = {};
    localStorage.setItem(
      "user",
      JSON.stringify({
        profile: profileObj,
        token: tokenObj,
      })
    );
    setUser({
      profile: profileObj,
      token: tokenObj,
    });
  }, []);
  const handleOnFailure = useCallback((error) => {
    console.log(error);
  }, []);
  return (
    <div className="login">
      {Object.keys(user).length ? (
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
