import React from "react";
import StripeComponent from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const stripePubKey = process.env.REACT_APP_STRIPE_PUB_KEY;

  const onToken = (token) => {
    console.log(token);
    axios
      .post("/payment", { amount: priceForStripe, token })
      .then((res) => alert("Payment Successful"))
      .catch((err) => {
        console.error(JSON.parse(err));
        alert('There is an issue with the payment, please check the card details.')
      });
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
