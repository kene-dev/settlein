import React from "react";
import pin1 from "../assets/pin1.png";
import pin2 from "../assets/navigate.jpeg";
import road from "../assets/road.jpeg";
import ease from "../assets/ease.jpeg";
import comfort from "../assets/comfort.jpeg";

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
              <h1 className="text-2xl font-bold">Smart Travels</h1>
              <span className="text-sm">
                We believe in affordable adventures! Count on us for tips on
                scoring cheap flight bookings to and from Canada
              </span>
            </div>
            <p className="text-sm">
              Budget-Savvy Flight Bookings: Traveling should be an exciting
              adventure, not a financial burden. Our travel experts specialize
              in finding affordable flight options. Receive tips on booking
              strategically, taking advantage of discounts, and making the most
              of your travel budget.
            </p>
          </div>
        </div>

        {/* MIDDLE CARD SECTION */}
        <div className="w-full h-max flex lg:flex-row-reverse flex-col items-center justify-center lg:px-12 gap-10">
          <img src={pin2} className="object-cover w-[480px] h-full" />
          <div className="flex flex-col gap-6 items-start">
            <div>
              <h1 className="text-2xl font-bold">Navigating the City:</h1>
              <span className="text-sm">
                From bus routes to Presto card registration, we've got the
                inside scoop on getting around hassle-free.
              </span>
            </div>
            <p className="text-sm">
              Customized Bus Route Guidance: Our team understands the importance
              of efficient daily commutes. We'll not only provide you with
              information on bus routes but also customize recommendations based
              on your specific location, ensuring you get to your destination
              with ease. <br />
              Presto Card Expertise: Navigating public transportation is a
              breeze with our assistance in Presto card registration. From
              application to usage tips, we've got you covered for seamless
              travel within the city.
            </p>
          </div>
        </div>

        {/* MIDDLE CARD SECTION */}
        <div className="w-full h-max flex lg:flex-row flex-col items-center justify-center lg:px-12 gap-10">
          <img src={ease} className="object-contain w-[511px] h-[500px]" />
          <div className="flex flex-col gap-6 items-start">
            <div>
              <h1 className="text-2xl font-bold">Financial Ease</h1>
              <span className="text-sm">
                Let us guide you through the process of opening a bank account
                and registering for your SIN, ensuring a smooth transition into
                Canadian life.
              </span>
            </div>
            <p className="text-sm">
              Tailored Bank Account Support: Opening a bank account is a crucial
              step in settling down. Our experts will guide you through the
              process, taking into account your preferences and financial goals.
              Whether you're a student or a permanent resident, we ensure your
              banking experience aligns with your needs. <br />
              SIN Registration Assistance: Acquiring your Social Insurance
              Number (SIN) is vital for various aspects of Canadian life. Let us
              simplify the process for you, ensuring a smooth transition into
              the country's workforce and services.
            </p>
          </div>
        </div>

        {/* FOURTH CARD SECTION */}
        <div className="w-full h-max flex lg:flex-row-reverse flex-col items-center justify-center lg:px-12 gap-10">
          <img src={road} className="object-contain w-[480px] h-full" />
          <div className="flex flex-col gap-6 items-start">
            <div>
              <h1 className="text-2xl font-bold"> On the Road</h1>
              <span className="text-sm">
                Dreaming of hitting the open road? We'll help you with G1 to G
                driver's license registration and provide preparation materials
                to make driving in Canada a breeze.
              </span>
            </div>
            <p className="text-sm">
              Comprehensive G1 to G Driver's License Support: Planning to
              explore Canada by car? We're here to assist you in every step of
              the driver's license journey, from obtaining your G1 to upgrading
              to a full G license. Our preparation materials and guidance will
              empower you to navigate Canadian roads confidently.
            </p>
          </div>
        </div>

        {/* FIFTH CARD SECTION */}
        <div className="w-full h-max flex lg:flex-row flex-col items-center justify-center lg:px-12  gap-10">
          <img src={comfort} className="object-contain w-[480px] h-full" />
          <div className="flex flex-col gap-6 items-start">
            <div>
              <h1 className="text-2xl font-bold">Comfortable Living:</h1>
              <span className="text-sm">
                Finding a home away from home is crucial. Trust Settle In for
                assistance in securing accommodation bookings tailored to your
                needs.
              </span>
            </div>
            <p className="text-sm">
              Tailor-Made Accommodation Bookings: Your home away from home
              should reflect your lifestyle and preferences. Count on Settle In
              to assist you in securing accommodation that aligns with your
              needs and budget. From student housing to long-term rentals, we'll
              guide you through the process of finding the perfect living space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
