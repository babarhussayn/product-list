"use client";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AddtocartIcon = () => {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <>
      <div className="flex justify-center items-center  ">
        <Link href="/pages/cart">
          <div className="w-[50px] relative">
            <span className="text-white absolute ml-10 top-0 ">
              {items?.length}
            </span>
            <Image
              src="/assets/images/icon-add-to-cart.svg"
              alt="Add"
              width={200}
              height={200}
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default AddtocartIcon;
