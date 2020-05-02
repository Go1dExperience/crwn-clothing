import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckOutItem = ({
  cartItem,
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
}) => {
  const { name, quantity, imageUrl, price } = cartItem;
  debugger;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeItemFromCart(cartItem)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        onClick={() => clearItemFromCart(cartItem)}
        className="remove-button"
      >
        &#10008;
      </div>
    </div>
  );
};
const mapDispatch = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItemToCart: (item) => dispatch(addItem(item)),
  removeItemFromCart: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatch)(CheckOutItem);
