import { useCallback, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { AuthContext } from "../../Context/AuthProvider";
import Icon from "../../Components/Icon";
import { SCOPES } from "../../constants";
import logo from "../../Assets/logos/digital-base.svg";
import google from "../../Assets/icons/google.svg";
import { gapi } from "gapi-script";
const Login = () => {
  const [user, setUser] = useContext(AuthContext);
  const handleOnSuccess = useCallback(({ profileObj, tokenObj }) => {
    const user = {
      profile: profileObj,
      token: tokenObj,
    };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }, []);
  const handleOnFailure = useCallback((error) => {
    console.log(error);
  }, []);
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: SCOPES.join(" "),
      });
    }

    gapi.load("client:auth2", start);
  }, []);
  return Object.keys(user).length ? (
    <Navigate to="/" />
  ) : (
    <section className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <p className="login-title">
          Log In Using Your Google Account To Access Your Youtube Channel Data
        </p>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={handleOnSuccess}
          onFailure={handleOnFailure}
          cookiePolicy="single_host_origin"
          scope={SCOPES.join(" ")}
          render={({ onClick, disabled }) => (
            <button className="login-btn" onClick={onClick} disabled={disabled}>
              <Icon src={google} size={25} margin="0rem 0.5rem" />
              <span>Login With Google</span>
            </button>
          )}
        />
      </div>
    </section>
  );
};

export default Login;
