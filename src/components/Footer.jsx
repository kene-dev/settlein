import React from "react";
import logo from "../assets/logo.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full lg:h-[165px] h-max bg-black flex flex-col items-center gap-7 lg:px-24 lg:py-5">
      <div className="w-full flex lg:flex-row flex-col items-center gap-10 text-white px-7">
        <p>About</p>
        <p>Why Choose Us</p>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
      </div>

      <div className="w-full flex lg:flex-row flex-col-reverse gap-4 items-center justify-center text-white">
        <div className="flex items-center justify-center lg:justify-start lg:gap-8 gap-4 w-full">
          <img
            style={{ padding: "0", margin: "0" }}
            className="md:h-[90px] lg:w-[90px] lg:h-[70px] w-[70px] h-[60px] cursor-pointer object-contain"
            src={logo}
            alt="logo"
          />

          <p>2023 Settle In All rights reserved</p>
        </div>
        <div className="w-full flex items-center lg:justify-end justify-center gap-7">
          <a href="" className="cursor-pointer">
            <FaFacebookSquare className="w-[30px] h-[30px]" />
          </a>

          <a
            href="https://www.instagram.com/settle.info?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"
            className="cursor-pointer"
          >
            <AiFillInstagram className="w-[30px] h-[30px]" />
          </a>

          <a href="https://x.com/settlein_info?s=11" className="cursor-pointer">
            <FaTwitter className="w-[30px] h-[30px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
