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
                <div className="m-2">
                  <Dialog>
                    <DialogTrigger className="">
                      <Button className="bg-[#022452]">Confirm</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Order confirmed</DialogTitle>
                        <DialogDescription>
                          We hope you enjoye your food
                          <div className="flex flex-row">
                            <div className="m-4">
                              <img src={item.image.thumbnail} alt={item.name} />
                            </div>
                            <div className="p-6">
                              <h3 className="font-playfair font-bold text-xl">
                                {item.name}
                              </h3>
                              <span className="font-playfair text-red-400 text-xl">
                                Price: ${item.price}
                              </span>
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {/* Render the confirmation dialog if an item is selected */}
    </div>
  );
};

export default CartPage;
