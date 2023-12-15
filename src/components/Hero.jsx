import React from "react";
import traveller from "../assets/traveller.png";

const Hero = () => {
  return (
    <div id="hero" className="w-full h-screen  hero relative">
      <div className="w-full h-full absolute bg-black/60"></div>

      <div className="w-full h-full flex lg:flex-row flex-col  items-center justify-center absolute lg:top-0 top-20 z-20">
        <div className="w-full h-full flex items-center justify-center px-10 lg:-px-0">
          <div className="w-[400px] lg:h-[500px] h-[350px] bg-primary flex flex-col gap-9 items-start  rounded-lg shadow-md shadow-secondary/70">
            <h1 className="lg:text-3xl text-2xl text-center w-full text-white p-3">
              Get Enrolled
            </h1>

            <div className="w-full h-full px-10 flex flex-col lg:gap-8 gap-6 items-start justify-start">
              <input
                placeholder="First Name"
                className=" w-full lg:h-[40px] h-[20px] text-white appearance-none border-b-2 border-secondary/50 focus:outline-none bg-transparent focus:border-b-2 focus:border-secondary"
              />
              <input
                placeholder="Last Name"
                className=" w-full lg:h-[40px] h-[20px] text-white appearance-none border-b-2 border-secondary/50 focus:outline-none bg-transparent focus:border-b-2 focus:border-secondary"
              />
              <input
                placeholder="Whatsapp Number"
                className=" w-full lg:h-[40px] h-[20px] text-white appearance-none border-b-2 border-secondary/50 focus:outline-none bg-transparent focus:border-b-2 focus:border-secondary"
              />
              <input
                placeholder="Email Address"
                className="w-full lg:h-[40px] h-[20px] text-white appearance-none border-b-2 border-secondary/50 focus:outline-none bg-transparent focus:border-b-2 focus:border-secondary"
              />

              <button
                style={{ textShadow: "2px 2px 2px #000" }}
                className="w-full bg-secondary hover:bg-secondary/70 text-white font-semibold py-2 px-4 lg:mt-8 mt-4 rounded hover:bg-primary-dark shadow-md shadow-black/50"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col lg:items-end items-center lg:justify-center justify-start lg:text-right text-center gap-4 lg:px-36 px-5">
          <h1 className="lg:text-5xl text-2xl text-white font-bold mb-4">
            Welcome to Your New Adventure <br /> - Let's Get You Settled In!
          </h1>
          <p className="lg:text-xl text-base text-white/70 mb-8 lg:w-[500px] w-full">
            Embark on your academic journey with ease and confidence. We're here
            to guide you every step of the way, from finding your new home to
            exploring local cultures. Start your study abroad experience with
            the perfect settling-in support.
          </p>
          <button
            style={{ textShadow: "2px 2px 2px #000" }}
            className="bg-secondary hover:bg-secondary/60 text-white font-semibold py-2 px-4 rounded hover:bg-primary-dark shadow-md shadow-black/50"
          >
            Explore Tours
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
