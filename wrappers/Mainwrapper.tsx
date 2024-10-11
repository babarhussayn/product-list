import React, { FC } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

interface MainwrapperProps {
  children: React.ReactNode;
}

const Mainwrapper: FC<MainwrapperProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default Mainwrapper;
