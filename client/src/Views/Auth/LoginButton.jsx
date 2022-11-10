import React from "react";
import { GoogleLogin } from "react-google-login";
const LoginButton = () => {
  const loginSuccess = (response) => {
    console.log(response);
    localStorage.setItem(
      "user",
      JSON.stringify({
        profile: response.profileObj,
        token: response.tokenObj,
      })
    );
  };

  const loginFaliure = (err) => {
    console.log(err);
  };
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={loginSuccess}
        onFailure={loginFaliure}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
      />
    </div>
  );
};

export default LoginButton;
