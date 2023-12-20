import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [color, setColor] = useState(null);
  const navigate = useNavigate();

  const toggler = () => {
    if (window.scrollY >= 60) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", toggler);

  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div
        className={
          color
            ? "fixed h-[78px] w-full bg-[#ffffff] shadow-sm shadow-black px-4 md:px-5 lg:px-[64px] lg:pt-2 flex justify-between items-center z-30"
            : "fixed h-[67px] w-full bg-transparent  px-4 md:px-10 lg:px-[64px] lg:pt-2 flex justify-between items-center z-30"
        }
      >
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="flex items-center"
        >
          <img
            style={{ padding: "0", margin: "0" }}
            className="md:h-[90px] lg:w-[90px] lg:h-[70px] w-[70px] h-[60px] cursor-pointer object-contain"
            src={logo}
            alt="logo"
          />

          <p className="font-bold text-2xl font-sansita text-secondary cursor-pointer">
            SETTLE IN
          </p>
        </Link>

        <ul className="hidden viga cursor-pointer text-base lg:flex md:w-80 justify-between lg:w-[31em] font-pt text-[#1111118b] capitalize font-normal">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={`mr-7 ${color ? "text-black" : "text-white"}`}
          >
            About Us
          </Link>
          <Link
            to="why"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={`mr-7 ${color ? "text-black" : "text-white"}`}
          >
            Why Choose Us
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={`mr-7 ${color ? "text-black" : "text-white"}`}
          >
            Contact Us
          </Link>
        </ul>

        <Link
          to="form"
          onClick={handleNav}
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          style={{ textShadow: "2px 2px 2px #000" }}
          className="hidden w-max px-10 rounded-md p-2 lg:flex items-center justify-center text-white text-base font-bold bg-secondary cursor-pointer"
        >
          Get Started
        </Link>

        <div className="lg:hidden ">
          {nav ? (
            <HiMenuAlt3
              className="h-8 w-8 text-secondary"
              //   style={{ color: "#CB6CE6" }}
              onClick={handleNav}
            />
          ) : (
            <AiOutlineClose
              className="h-8 w-8 text-secondary"
              //   style={{ color: "#CB6CE6" }}
              onClick={handleNav}
            />
          )}
        </div>

        {/* ""  : "absolute left-0 top-16 duration-500 flex-col justify-center items-center w-full overflow-hidden h-0"  */}

        <ul
          className={
            !nav
              ? "lg:hidden pt-10 text-xl absolute left-0 top-0 flex flex-col justify-center items-center h-screen bg-black w-full text-white text-center uppercase font-bold duration-500"
              : "absolute left-0 top-16  opacity-0 flex-col justify-center items-center w-full overflow-hidden h-0"
          }
        >
          <Link
            to="about"
            onClick={handleNav}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className=" w-auto px-2 my-7 py-3 text-white"
          >
            About Us
          </Link>
          <Link
            to="why"
            onClick={handleNav}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="w-auto px-2 my-7 py-3 text-white"
          >
            Why Choose Us
          </Link>
          <Link
            to="contact"
            onClick={handleNav}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="w-auto px-2 my-7 py-3 text-white"
          >
            Contact Us
          </Link>

          <Link
            to="hero"
            onClick={handleNav}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className=" w-max px-10 rounded-md p-2 flex items-center justify-center text-white bg-secondary"
          >
            Enrol
          </Link>

          <AiOutlineClose
            className="h-8 w-8 bg-white rounded-full p-1 mt-9 text-primary"
            onClick={handleNav}
          />
          {/* {links.map(link => (
                <Link to={link.url}  spy={true} smooth={true} offset={-100} duration={500} onClick={handleNav} key={link.id} >{link.text}</Link>
            ))} */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
