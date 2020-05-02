import React from "react";
import "./header.styles.scss";
//--Import Dependencies----------------
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.uitls";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//--Import Components------------------
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";

function Header({ currentUser, hidden }) {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon></CartIcon>
      </div>
      {hidden ? null : <CartDropdown></CartDropdown>}
    </div>
  );
}
const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapState)(Header);
