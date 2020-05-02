import React from "react";
import "./cart-icon.styles.scss";
//--Import Dependencies-----------------------
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

function CartIcon({ toggleCart, itemCount }) {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapDispatch = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});
const mapState = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapState, mapDispatch)(CartIcon);
