import { useState } from "react";
import LoginButton from "./Loginbtn";
import LogoutButton from "./Logoutbtn";
import { useAuth0 } from "@auth0/auth0-react";
const Title = () => (
  <>
    <img
      id="brand-logo"
      alt="logo"
      src="https://cdn.dribbble.com/users/2102703/screenshots/13943094/media/479965c0875a557a6d2564757bc9f20f.jpg?compress=1&resize=1000x750&vertical=top"
    />
  </>
);

const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="header">
      <Title />
      <div className="nav-Items">
        <ul>
          <li>Home </li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <span>{isAuthenticated && <p>{`Welcome ${user.name}`}</p>}</span>
          <span>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</span>
        </ul>
      </div>
    </div>
  );
};

export default Header;
