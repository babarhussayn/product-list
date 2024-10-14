"use client";
import React from "react";
import Data from "../../../data.json";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/store/hooks";
import { add, CartItem } from "@/store/features/cart/cartSlice";

interface Data {
  name: string;
  image: string;
  category: string;
  price: number;
  id: string;
  quantity: number;
}

const HomePage = () => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: Omit<CartItem, "quantity">) => {
    const { id, name, image, price } = product; // Destructure the product details
    console.log(id, "add to cart");

    // Dispatch the action with quantity set to 1
    dispatch(add({ id, name, image, price, quantity: 1 })); // Set default quantity
  };
  return (
    <>
      <div className="w-full flex justify-center items-center min-h-screen mt-14">
        <div className="w-[1200px]   p-4">
          <div className="flex md:justify-between justify-center items-center flex-wrap gap-4">
            {Data.map((item, index) => (
              <>
                <div className=" " key={index}>
                  <div className="shadow-lg  rounded-lg">
                    <div className="mb-6 rounded-lg">
                      <Image
                        src={item.image.desktop}
                        alt="img"
                        width={250}
                        height={200}
                        className="hover:border-red-400 rounded-lg"
                      />
                    </div>
                    <div className="absolute translate-x-20 -translate-y-12 flex justify-center items-center shadow-lg border-none rounded-lg">
                      <Button
                        className="bg-[#fefefe] text-black w-[120px]  border border-red-300 rounded-xl font-playfair  "
                        onClick={() => handleAddToCart(item)}
                      >
                        <Image
                          src="/assets/images/icon-add-to-cart.svg"
                          alt="Add"
                          width={100}
                          height={100}
                        />{" "}
                        Add To cart
                      </Button>
                    </div>
                    <div className="">
                      <div className="p-4 ">
                        <div className="flex  flex-start  flex-col gap-2 w-full ">
                          <span className="">{item.category}</span>
                          <h5 className="font-playfair text-[18px] font-bold">
                            {item.name}
                          </h5>

                          <span className=" font-playfair text-[20px] text-red-400 font-bold">
                            {" "}
                            $ {item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
