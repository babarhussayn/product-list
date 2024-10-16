"use client";

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "../checkout/page";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("Stripe public key is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const PayPage = () => {
  return (
    <div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          currency: "usd",
        }}
      >
        <CheckoutPage />
      </Elements>
    </div>
  );
};

export default PayPage;
