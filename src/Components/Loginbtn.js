import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="auth-btn" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};
