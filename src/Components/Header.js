import { useState } from "react";
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
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-Items">
        <ul>
          {isLoggedIn ? (
            <button
              className="auth-btn"
              onClick={() => {
                setLoggedIn(false);
              }}
            >
              Logout
            </button>
          ) : (
            <button
              className="auth-btn"
              onClick={() => {
                setLoggedIn(true);
              }}
            >
              Login
            </button>
          )}
        </ul>
        <ul>
          <li>Home </li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
