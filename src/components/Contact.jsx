import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";

const Contact = () => {
  const [state, handleSubmit] = useForm("moqgange");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks for Reaching out");
    }
  }, [state]);

  return (
    <div
      id="contact"
      className="w-full h-max lg:px-12 flex flex-col items-start px-5 my-14"
    >
      <div className="w-full lg:h-[460px] h-[400px] banner"></div>
      <h1 className="capitalize text-center text-3xl font-bold w-full my-8">
        For Further inquiries. Reach Out
      </h1>

      {/* CONTACT MESSAGE FORM  */}
      <form
        onSubmit={handleSubmit}
        className="w-full h-max flex lg:flex-row flex-col items-start justify-center gap-6 lg:px-14"
      >
        <div className="w-full flex flex-col gap-10">
          <div className="w-full flex items-center justify-center gap-5">
            <input
              required
              name="fullname"
              placeholder="Full Name"
              className=" w-full lg:h-[60px] h-[30px] p-10 text-black appearance-none border-b-2 border-secondary/50 focus:outline-none bg-tertiary focus:border-b-2 focus:border-secondary"
            />
          </div>

          <div className="w-full flex items-center justify-center gap-5">
            <input
              required
              name="email"
              placeholder="Email"
              type="email"
              className=" w-full lg:h-[60px] h-[30px] p-10 text-black appearance-none border-b-2 border-secondary/50 focus:outline-none bg-tertiary focus:border-b-2 focus:border-secondary"
            />
          </div>
        </div>

        <div className="w-full flex flex-col">
          <textarea
            required
            name="message"
            rows="4"
            cols="150"
            placeholder="Type your message"
            className=" w-full lg:h-[208px] h-[200px] p-5 text-black appearance-none border-b-2 border-secondary/50 focus:outline-none bg-tertiary focus:border-b-2 focus:border-secondary"
          ></textarea>

          <button
            type="submit"
            disabled={state.submitting}
            style={{ textShadow: "2px 2px 2px #000" }}
            className="w-full bg-secondary hover:bg-secondary/70 text-white font-semibold py-2 px-4 lg:mt-8 mt-4 rounded hover:bg-primary-dark shadow-md shadow-black/50"
          >
            {state.submitting ? "sending" : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
