import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetForm, sendForm } from "../Features/formSlice";
import { Link } from "react-scroll";
import { toast } from "react-toastify";

const Hero = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    Email: "",
  });
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const { formSuccess, formError, formMessage, formLoading } = useSelector(
    (state) => state.form
  );
  const { firstName, lastName, email, phoneNumber } = formData;

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // FUNCTION TO CLEAR FORM FIELDS
  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    });
  };

  // FUNCTION TO HANDLE INPUT FIELD CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  // FUNCTION TO SUBMIT FORM DATA
  const handleSubmit = () => {
    if (firstName && lastName && email && phoneNumber) {
      const body = {
        name: firstName + " " + lastName,
        email,
        phoneNumber,
      };
      dispatch(sendForm(body));
    }
  };

  // USEFFECT FUNTION TO HANDLE SUCCESS AND ERROR STATES
  useEffect(() => {
    if (formSuccess) {
      toast.success(formMessage);
      setTimeout(() => {
        clearForm();
        dispatch(resetForm());
      }, 1500);
    }
    if (formError) {
      toast.error(formMessage);
      setTimeout(() => {
        clearForm();
        dispatch(resetForm());
      }, 1500);
    }
  }, [formSuccess, formError, formMessage]);

  return (
    <div id="hero" className="w-full h-screen  hero relative">
      <div className="w-full h-full absolute bg-black/60"></div>
      <div className="w-full h-full flex lg:flex-row flex-col  items-center justify-center absolute lg:top-0 top-20 z-20">
        <div className="w-full h-full flex items-center justify-center px-10 lg:-px-0">
          <div className="w-[400px] lg:h-[500px] h-[350px] bg-primary flex flex-col gap-9 items-start  rounded-lg shadow-md shadow-secondary/70">
            <h1 className="lg:text-3xl text-2xl text-center w-full text-white p-3">
              Sign Up
            </h1>

            <div
              id="form"
              className="w-full h-full px-10 flex flex-col lg:gap-8 gap-6 items-start justify-start"
            >
              <input
                ref={inputRef}
                type="text"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={handleChange}
                className=" w-full lg:h-[40px] h-[20px] text-white appearance-none border-b-2 border-secondary/50 focus:outline-none bg-transparent focus:border-b-2 focus:border-secondary"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={handleChange}
                className=" w-full lg:h-[40px] h-[20px] text-white appearance-none border-b-2 border-secondary/50 focus:outline-none bg-transparent focus:border-b-2 focus:border-secondary"
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Whatsapp Number"
                value={phoneNumber}
                onChange={handleChange}
                className=" w-full lg:h-[40px] h-[20px] text-white appearance-none border-b-2 border-secondary/50 focus:outline-none bg-transparent focus:border-b-2 focus:border-secondary"
              />
              <input
                placeholder="Email Address"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="w-full lg:h-[40px] h-[20px] text-white appearance-none border-b-2 border-secondary/50 focus:outline-none bg-transparent focus:border-b-2 focus:border-secondary"
              />

              <button
                onClick={handleSubmit}
                style={{ textShadow: "2px 2px 2px #000" }}
                className="w-full bg-secondary hover:bg-secondary/70 text-white font-semibold py-2 px-4 lg:mt-8 mt-4 rounded hover:bg-primary-dark shadow-md shadow-black/50"
              >
                {formLoading ? "sending..." : "Submit"}
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col lg:items-end items-center lg:justify-center justify-start lg:text-right text-center gap-4 lg:px-36 px-5">
          <h1 className="lg:text-4xl text-xl text-white font-bold mb-4">
            Welcome to Your New Adventure <br /> - Let's Get You Settled In!
          </h1>
          <p className="lg:text-lg text-sm text-white/70 mb-8 lg:w-[500px] w-full">
            Welcome to Settle In, your ultimate companion on your Canadian
            journey! 🍁✨ Whether you're here on a student visa, visitation
            visa, or making Canada your permanent home, we've got your back
            every step of the way.
            <span className="text-secondary inline-block font-bold text-lg">
              Get started today for $10 CAD
            </span>
          </p>
          <Link
            to="form"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            onClick={focusInput}
            style={{ textShadow: "2px 2px 2px #000" }}
            className="bg-secondary hover:bg-secondary/60 text-white font-semibold py-2 px-4 rounded hover:bg-primary-dark shadow-md shadow-black/50"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
