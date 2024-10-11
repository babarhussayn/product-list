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
}

const HomePage = () => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: CartItem) => {
    const { id, name, image, price } = product; // Destructure the product details
    console.log(id, "add to cart");

    // Dispatch the action with the complete product details
    dispatch(add({ id, name, image, price }));
  };
  return (
    <>
      <div className="w-full flex justify-center items-center min-h-screen mt-14">
        <div className="w-[1200px]  p-4">
          <div className="flex justify-between items-center flex-wrap gap-4">
            {Data.map((item, index) => (
              <>
                {/* <Link
                  href={`pages/products/${item?.id}`}
                  className="hover:border-red-300"
                  key={index}
                > */}
                <div className="rounded-lg " key={index}>
                  <div className="shadow-lg rounded-2xl  bg-orange-300">
                    <Image
                      src={item.image.desktop}
                      alt="img"
                      width={250}
                      height={200}
                      className="hover:border-red-400"
                    />
                    <div className="relative  ">
                      <div className="absolute translate-x-20 -translate-y-4      flex justify-center items-center shadow-lg">
                        <Button
                          className="bg-[#fefefe] text-black w-[120px] border border-red-300 rounded-xl "
                          onClick={() => handleAddToCart(item)}
                        >
                          Add To cart
                        </Button>
                      </div>
                      <div className="bg-[#052755] ">
                        <span className="text-white">{item.category}</span>
                        <h5 className="text-white">{item.name}</h5>

                        <span className="text-white"> $ {item.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </Link> */}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
