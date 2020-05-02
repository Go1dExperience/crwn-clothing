import React from "react";
import "./check-out.styles.scss";
//--Import Dependencies--------------------
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import { connect } from "react-redux";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
//--Import component--------------------

function CheckOut({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckOutItem key={item.id} cartItem={item}></CheckOutItem>
      ))}
      <div className="total">
        <span>Total: ${total}</span>
      </div>
    </div>
  );
}
const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapState)(CheckOut);
