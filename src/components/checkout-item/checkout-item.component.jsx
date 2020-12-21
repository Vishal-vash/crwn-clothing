import React from "react";
import {connect} from 'react-redux';

import "./checkout-item.styles.scss";
import { addItem, removeItem, clearCartItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, addItem, removeItem, clearCartItem }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </span>
      </div>
      <div className="price">{price}</div>
      <div className="remove-button" onClick={() => clearCartItem(item.id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearCartItem: (itemId) => dispatch(clearCartItem(itemId)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
