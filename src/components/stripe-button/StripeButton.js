import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IYdcjHPXS7Fh88Rw0OSXlpJZmmobsuZvforj7KN0FTY5lIFa3M2IxL0AvWSoa8QCcPNjSq3sBKK9gRFgY6NVKHa00h1wmPMi5";

  const onToken = token => {
    console.log(token);
    alert("Payment successful!");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Eclectic Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

