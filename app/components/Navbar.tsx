import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface navbar {
  name: string;
  link: string;
}

const navbar = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Products",
    link: "/pages/products",
  },
  {
    name: "About",
    link: "/pages/products",
  },
  {
    name: "Services",
    link: "/pages/products",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-[#012452fb] p-4">
        <div className="flex justify-between gap-8 items-center">
          <div>
            <h4 className="font-sans text-lg text-[#fefefe]">logo</h4>
          </div>
          <div className=" flex justify-center gap-8 items-center">
            {navbar.map((item, index) => (
              <div key={index}>
                <Link href={item.link} className="text-[#fefefe]">
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <Button className="bg-[#012452] text-[#fefefe] hover:bg-[#fefefe] hover:text-[#012452] transition-all duration-300 ease-in">
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
