"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import AddtocartIcon from "./AddtocartIcon";
import Image from "next/image";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";

interface NavbarItem {
  name: string;
  link: string;
}

const navbar: NavbarItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Products",
    link: "/pages/product",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const closeMenu = () => {
    setShow(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="w-full bg-[#012452fb] p-4 fixed z-50 top-0">
        <div className="flex justify-between gap-8 items-center">
          <div>
            <div className="w-10">
              <Image
                src="/assets/images/favicon.png"
                alt="Logo"
                width={100}
                height={120}
              />
            </div>
          </div>

          <div className="justify-center gap-8 items-center hidden md:flex">
            {navbar.map((item, index) => (
              <div key={index}>
                <Link href={item.link} className="text-[#fefefe]">
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex flex-row gap-6">
            <AddtocartIcon />
            <Button className="bg-[#012452] text-[#fefefe] hover:bg-[#fefefe] hover:text-[#012452] transition-all duration-300 ease-in hidden md:block">
              Login
            </Button>
          </div>
          <div className="md:hidden">
            <div className="text-white">
              {show ? (
                <GiCrossMark onClick={handleShow} />
              ) : (
                <FaBarsStaggered onClick={handleShow} />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div ref={menuRef} className="md:hidden flex justify-end w-full">
          {show && (
            <div className="absolute z-50 top-[80px] right-0 smooth-right">
              <div className="bg-[#fefefe] w-[200px] sm:w-[500px] h-[270px] flex flex-col justify-center gap-8 items-center">
                {navbar.map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.link}
                      className="text-[#012452] hover:underline"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
