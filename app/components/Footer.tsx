import Image from "next/image";
import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTiktok } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="bg-[#012452] overflow-hidden p-6">
        <div className="w-full flex justify-center items-center">
          <div className="md:grid md:grid-cols-4 flex  justify-center flex-col gap-4">
            <div className="text-white flex justify-center items-center">
              <div>
                <Image
                  src="/assets/images/favicon.png"
                  alt="logo"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            {/* <div className="text-white flex justify-center items-center gap-20 w-full">
              <div>
                <h4>Home</h4>
              </div>
            </div> */}
            <div className="text-white flex justify-center items-center  gap-8 w-full">
              <div className="flex flex-col justify-center items-center gap-12">
                <div>
                  <h4 className="font-playfair text-2xl">Contact</h4>
                </div>
                <div className="flex justify-center items-center flex-col">
                  <h4 className="font-playfair text-2xl">Pakistan</h4>

                  <h4>Phone Number</h4>
                  <p>1256987456</p>
                </div>
              </div>
            </div>
            <div className="text-white flex justify-center items-center  gap-8 w-full">
              <div className="flex flex-col gap-12">
                <div className="flex justify-center items-center">
                  <h4 className="font-playfair text-2xl">Follow</h4>
                </div>

                <div className="flex md:flex-row flex-col gap-4 mb-8">
                  <div className="w-[80px] border h-[80px] flex justify-center items-center rounded-[50%] ">
                    <SlSocialLinkedin size={40} />
                  </div>
                  <div className="w-[80px] border h-[80px] flex justify-center items-center rounded-[50%] ">
                    <SlSocialInstagram size={40} />
                  </div>
                  <div className="w-[80px] border h-[80px] flex justify-center items-center rounded-[50%] ">
                    <TiSocialFacebook size={40} />
                  </div>
                  <div className="w-[80px] border h-[80px] flex justify-center items-center rounded-[50%] ">
                    <FaTiktok size={40} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[5rem] p-5">
        <div className="">
          <p>
            &#169;Copyright 2024 All rights of publications are reserved by
            Foodies.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
