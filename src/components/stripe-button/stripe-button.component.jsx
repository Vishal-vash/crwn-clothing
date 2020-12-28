import React from 'react';
import StripeComponent from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const stripePubKey = process.env.REACT_APP_STRIPE_PUB_KEY;

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeComponent
      label="Pay Now"
      name="CRWN CLOTHING LTD."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={stripePubKey}
    />
  );
};

export default StripeButton;