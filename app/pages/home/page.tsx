import React from "react";
import Data from "../../../data.json";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Data {
  name: string;
  image: string;
  category: string;
  price: number;
  id: number;
}

const HomePage = () => {
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
                  <div className="shadow-lg rounded-2xl hover:border-red-300 bg-orange-300">
                    <Image
                      src={item.image.desktop}
                      alt="img"
                      width={250}
                      height={200}
                    />
                    <div className="relative">
                      <div className="absolute translate-x-20 -translate-y-4      flex justify-center items-center shadow-lg">
                        <Button className="bg-[#fefefe] text-black w-[120px] border border-red-300 rounded-xl hover:bg-[]">
                          Add To cart
                        </Button>
                      </div>
                      <div className="bg-[#fefefe]">
                        <span>{item.category}</span>
                        <h5>{item.name}</h5>

                        <span>{item.price}</span>
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
