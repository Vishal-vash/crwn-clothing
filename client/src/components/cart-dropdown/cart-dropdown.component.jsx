import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { toggleDropdown } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} {...cartItem} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      {cartItems.length > 0 && (
        <CustomButton
          type="button"
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleDropdown());
          }}
        >
          Go To Checkout
        </CustomButton>
      )}
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
