import React from "react";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";

const About = () => {
  return (
    <div id="about" className="w-full h-full lg:px-16 px-5 my-28">
      <div className="w-full lg:h-[658px] h-max flex flex-col items-start justify-center lg:gap-7 gap-8 rounded-xl bg-secondary py-10 lg:px-24 px-5">
        <h1
          style={{ textShadow: "2px 2px 2px #000" }}
          className="lg:text-2xl text-base text-white font-bold"
        >
          About Us <br />
          <span className="text-sm">Your Companion in New Beginnings</span>
        </h1>
        <div className="w-full h-full flex lg:flex-row  flex-col items-center justify-center gap-7">
          {/* GALLERY DISPLAY STARTS HERE */}
          <div className="w-full h-full flex items-center gap-6 justify-start">
            <div className="flex flex-col gap-3 w-max h-full">
              <img src={pic1} className="object-contain w-full lg:h-[300px]" />
              <img src={pic2} className="object-contain w-full lg:h-[150px]" />
            </div>
            <div className="flex flex-col gap-3 w-max h-full">
              <img src={pic3} className="object-contain w-full lg:h-[150px]" />
              <img src={pic4} className="object-contain w-full lg:h-[300px]" />
            </div>
          </div>
          {/* GALLERY DISPLAY ENDS HERE */}

          <div className="w-full h-full flex flex-col items-start gap-6 text-lg">
            <p>
              Settle In is a holistic support system designed to make every
              aspect of your transition into Canada seamless and stress-free.
              Once you register, you get your own dedicated settle In guide to
              help you navigate your new adventure. From daily commutes to
              finding your dream home, we're here for you. Welcome to your new
              chapter in Canada!
            </p>
            {/* <p>
              Our services at "Settle In" include personalized accommodation
              assistance, orientation tours, language support, and cultural
              integration programs. We believe that being comfortable in your
              new surroundings is key to academic success. By taking care of the
              practicalities of settling in, we free you to explore, learn, and
              grow in your new home.
            </p> */}
            <p>
              The benefits of "Settle In" extend beyond just finding a place to
              stay. We foster a community of fellow immigrants, allowing you to
              build a supportive network from day one. Our local insights and
              resources help you navigate through your initial days with
              confidence. With "Settle In", you’re not just moving to a new
              country; you're embarking on a well-supported journey of discovery
              and learning.
            </p>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default About;
