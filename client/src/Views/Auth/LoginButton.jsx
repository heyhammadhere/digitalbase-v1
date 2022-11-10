import React from "react";
import { GoogleLogin } from "react-google-login";
const LoginButton = () => {
  const loginSuccess = (response) => {
    console.log(response);
    localStorage.setItem(
      "loggedInUser",
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
        clientId="68497100027-44f20865vmtphc5evfij91gbbtrgiueu.apps.googleusercontent.com"
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
