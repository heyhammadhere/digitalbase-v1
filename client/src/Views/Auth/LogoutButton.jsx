import React from "react";
import { GoogleLogout } from "react-google-login";
const LogoutButton = () => {
  return (
    <div>
      <GoogleLogout
        clientId="68497100027-44f20865vmtphc5evfij91gbbtrgiueu.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={() => console.log("Logged out successfully")}
      />
    </div>
  );
};

export default LogoutButton;
