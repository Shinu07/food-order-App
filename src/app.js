import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { Auth0Provider } from "@auth0/auth0-react";
const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const FApp = () => {
  return (
    <Auth0Provider
      domain="dev-gbes8amljl3k4q55.us.auth0.com"
      clientId="qy7z6sEmCj6xhFzfsBifx4bftu7SYU7D"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FApp />);
