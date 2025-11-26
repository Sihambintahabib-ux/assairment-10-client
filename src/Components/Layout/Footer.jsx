import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import MyContainer from "./MyContainer";

const Footer = () => {
  return (
    <div className="bg-orange-500 w-full  ">
      {/* <MyContainer> */}
      {/* 1st section  */}
      <div
        className=" flex justify-between items-center container mx-auto
             text-white   border-white-500 p-2 "
      >
        {/* footer logo */}
        <div className=" flex justify-between items-center  ">
          <img
            className=" w-8 "
            src="../../../Esstenial Tool/Resources/B12-A08-Hero-Apps-main/assets/logo.png"
            alt=""
          />
          <h1 className=" text-2xl font-bold ">
            {" "}
            BuyGoods<span className="text-black">BD</span>
          </h1>
        </div>
        {/* social media link  */}
        <div className=" flex justify-between items-center flex-col ">
          <h1>Social Links</h1>
          {/* icon */}
          <div className="flex gap-1.5 ">
            <FaFacebookSquare />
            <CiLinkedin />
            <FaXTwitter />
          </div>
        </div>
      </div>
      {/* copywrite section  */}
      <div className="text-center text-white p-3 ">
        <h1>Copyright © 2025 - All right reserved</h1>
      </div>
      {/* </MyContainer> */}
    </div>
  );
};

export default Footer;
