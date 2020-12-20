import React from "react";
import { connect } from "react-redux";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleDropdown } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleDropdown }) => (
  <div className="cart-icon" onClick={toggleDropdown}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDropdown: () => dispatch(toggleDropdown()),
  };
};

export default connect(null, mapDispatchToProps)(CartIcon);
