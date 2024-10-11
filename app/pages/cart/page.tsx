"use client";
import React from "react";
import { useAppSelector } from "@/store/hooks";

const CartPage = () => {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <img src={item.image.thumbnail} alt={item.name} />
            <p>Price: ${item.price}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
