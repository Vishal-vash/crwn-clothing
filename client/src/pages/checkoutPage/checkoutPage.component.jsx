import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selector';

import './checkoutPage.styles.scss';

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">Item</div>
      <div className="header-block">Name</div>
      <div className="header-block">Quantity</div>
      <div className="header-block">Price</div>
      <div className="header-block">Remove</div>
    </div>
    {cartItems.length > 0 ? (
      cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)
    ) : (
      <div className="alert-message">Please add some items first</div>
    )}
    <div className="total">Total: ${cartTotal}</div>
    <StripeButton price={cartTotal} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
