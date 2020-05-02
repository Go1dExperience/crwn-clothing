import React from "react";
import "./cart-dropdown.styles.scss";
//--Import Dependencies----------------
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
//--Import Components------------------
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { toggleCart } from "../../redux/cart/cart.actions";

function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem}></CartItem>
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCart());
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
}
const mapState = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapState)(CartDropdown));
