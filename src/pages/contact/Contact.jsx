import React from "react";
import linkedIn from "../../assets/ri_linkedin-fill.svg";
import instagram from "../../assets/ri_instagram.svg";
import x from "../../assets/x.svg";
import star from "../../assets/star.svg";
import grayStar from "../../assets/grey_star.svg";
import purple from "../../assets/purple_star.svg";

const Contact = () => {
  return (
    <section className="contact relative px-32 py-4 text-white">
      <div className="contact-full flex justify-center min-h-[90vh] items-center w-full h-full">
      <img
          src={purple}
          className="absolute top-[5rem] md:block hidden left-[17rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <img
          src={star}
          className="absolute top-[15rem] md:block hidden right-[10rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <img
          src={grayStar}
          className="absolute top-[32rem] md:block hidden left-[24rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <img
          src={grayStar}
          className="absolute top-[14rem] md:block hidden left-[42rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <div className="contact-left w-full">
          <div className="contact-header">
            <h1 className="text-[#D434FE] font-extrabold text-xl">
              Get In Touch
            </h1>
          </div>
          <div className="info flex flex-col">
            <span className="mb-3 mt-3">
              Contact <br />
              Information
            </span>
            <span className="mb-2">
              27,Alara Street <br />
              Yaba 100012 <br />
              Lagos State
            </span>
            <span className="mb-2">Call Us : 07067981819</span>
            <span className="mb-9">we are open from Monday-Friday 08:00am - 05:00pm</span>
            <div className="">
              <h2 className="text-[#D434FE]">Share On</h2>
              <div className="flex items-center">
                <a href="">
                  <img src={x} alt="" className="mx-2" />
                </a>
                <a href="">
                  <img src={instagram} alt="" className="mx-2" />
                </a>
                <a href="">
                  <img src={linkedIn} alt="" className="mx-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right w-full flex justify-center items-center">
            <form action="" className="shadow-2xl flex flex-col form rounded-md p-8 w-[90%]">
                <h1 className="text-[#D434FE] mb-4 text-xl">Questions or need assistance? <br />Let us know  about it! </h1>
                <input type="text" className="bg-transparent border border-white p-2 rounded mb-4" placeholder="First Name" />
                <input type="email" className="bg-transparent border border-white p-2 rounded mb-4" placeholder="Mail" />
                <textarea name="" id="" cols="30" rows="4" placeholder="Message" className="bg-transparent border border-white p-2 rounded mb-4"></textarea>
                <div className="w-full flex justify-start items-center">
                    <button className="primaryColor px-5 py-1 rounded">SUBMIT</button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
