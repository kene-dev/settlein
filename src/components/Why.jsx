import React from "react";
import pin1 from "../assets/pin1.png";
import pin2 from "../assets/pin2.png";
import pin3 from "../assets/pin4.png";

const Why = () => {
  return (
    <div id="why" className="w-full h-full lg:px-16 px-5 my-28">
      <h1 className="w-full text-center text-3xl font-semibold my-10 ">
        Why CHoose Us
      </h1>
      <div className="w-full  h-max flex flex-col items-start justify-center lg:gap-16 gap-8 rounded-xl bg-tertiary py-10 lg:px-24 px-5">
        {/* TOP CARD SECTION */}
        <div className="w-full h-max flex lg:flex-row flex-col items-center justify-center lg:px-12  gap-10">
          <img src={pin1} className="object-contain w-full h-full" />
          <div className="flex flex-col gap-6 items-start">
            <div>
              <h1 className="text-2xl font-bold">
                Tailored Local Support by Settle In
              </h1>
              <span>Your Personal Guide to a New Beginning:</span>
            </div>
            <p>
              At Settle In, we recognize that every student's needs are unique.
              Our tour guides provide personalized services tailored to your
              specific interests and requirements. From showing you the best
              study spots to uncovering local cafes that suit your taste, we
              ensure that every aspect of your new life is in harmony with your
              preferences. Our mission is to make your new city feel like home,
              with a personal touch.
            </p>
          </div>
        </div>

        {/* MIDDLE CARD SECTION */}
        <div className="w-full h-max flex lg:flex-row-reverse flex-col items-center justify-center lg:px-12 gap-10">
          <img src={pin2} className="object-contain w-full h-full" />
          <div className="flex flex-col gap-6 items-start">
            <div>
              <h1 className="text-2xl font-bold">
                Safety and Confidence with Settle In
              </h1>
              <span>Navigate Your New World with Assurance:</span>
            </div>
            <p>
              At Settle In, we recognize that every student's needs are unique.
              Our tour guides provide personalized services tailored to your
              specific interests and requirements. From showing you the best
              study spots to uncovering local cafes that suit your taste, we
              ensure that every aspect of your new life is in harmony with your
              preferences. Our mission is to make your new city feel like home,
              with a personal touch.
            </p>
          </div>
        </div>
        {/* MIDDLE CARD SECTION */}
        <div className="w-full h-max flex lg:flex-row flex-col items-center justify-center lg:px-12 gap-10">
          <img src={pin3} className="object-contain w-[511px] h-[500px]" />
          <div className="flex flex-col gap-6 items-start">
            <div>
              <h1 className="text-2xl font-bold">
                Cultural Immersion and Understanding
              </h1>
              <span>Ease into Your New Life with Cultural Insights:</span>
            </div>
            <p>
              Settle In goes beyond the basics of helping you move; we offer an
              immersive introduction to your new country's culture. Our guides
              are experts in local customs, traditions, and social norms. With
              Settle In, you won’t just find yourself in a new country; you’ll
              find yourself becoming a part of it. Our focus on cultural
              understanding helps you navigate social situations with
              confidence, making your transition smoother and more enjoyable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
