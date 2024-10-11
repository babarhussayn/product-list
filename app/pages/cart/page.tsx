"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Button } from "@/components/ui/button";
import { remove } from "@/store/features/cart/cartSlice";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="w-full container mx-auto">
      <div className="">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="flex justify-center items-center ">
              <div className="flex justify-between items-center w-[50%] bg-[#cfcccc] m-4 shadow-lg rounded-lg p-4">
                <div className="m-4">
                  <img src={item.image.thumbnail} alt={item.name} />
                </div>
                <div className="flex justify-center items-center">
                  <Button className="bg-[#022452] m-2 text-lg">-</Button>
                  <span className=" w-full">1</span>
                  <Button className="bg-[#022452] m-2 text-lg">+</Button>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-xl">
                    {item.name}
                  </h3>
                  <span className="font-playfair text-red-400 text-xl">
                    Price: ${item.price}
                  </span>
                </div>
                <div>
                  <Button
                    className="bg-[#022452]"
                    onClick={() => dispatch(remove(item))}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}

        {items.length > 0 && (
          <div className="mt-6 flex justify-center">
            <Dialog>
              <DialogTrigger>
                <Button className="bg-[#022452]">Confirm Order</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Order Confirmed</DialogTitle>
                  <DialogDescription>
                    Thank you for your order! We hope you enjoy your food.
                    <div className="mt-4">
                      <h3 className="font-playfair font-bold text-xl">
                        Order Summary
                      </h3>
                      {items.map((item, index) => (
                        <div key={index} className="flex justify-between mt-2">
                          <div>
                            <img src={item.image.thumbnail} alt="img" />
                          </div>
                          <span>{item.name}</span>
                          <span>${item.price}</span>
                        </div>
                      ))}
                      <div className="mt-4 font-bold flex justify-end">
                        <h4 className="font-playfair font-bold text-2xl">
                          {" "}
                          Total: ${totalPrice}
                        </h4>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
