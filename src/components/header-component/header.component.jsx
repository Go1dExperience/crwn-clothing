import React from "react";
import "./header.styles.scss";
//--Import Dependencies----------------
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.uitls";
//--Import Components------------------
import { ReactComponent as Logo } from "../../assets/crown.svg";

function Header({ user }) {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {user ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
