import React from "react";
import linkedIn from "../../assets/ri_linkedin-fill.svg";
import instagram from "../../assets/ri_instagram.svg";
import x from "../../assets/x.svg";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer w-full text-white bg-[#100B20] md:px-24 px-16">
        <div className="w-full flex justify-center md:flex-row flex-col items-center sm:py-24 py-7">
          <div className="w-full md:mb-0 mb-10">
            <h1 className="font-extrabold text-2xl mb-2">
              get<span className="text-[#D434FE]">linked</span>
            </h1>
            <p className="w-[70%]">
              Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology.
            </p>
            <div className="mt-4 flex items-center">
              <a href="">Terms of Use</a>
              <div className="bg-[#D434FE] w-[2px] h-6 inline-block mx-2"></div>
              <a href="">Privacy Policy</a>
            </div>
          </div>
          <div className="md:w-[80%] w-full md:mb-0 mb-10">
            <h1 className="font-extrabold text-[#D434FE] text-xl">Useful Links</h1>
            <a href="#introduction" className="block mt-2">Overview</a>
            <a href="#timeline" className="block mt-2">Timeline</a>
            <a href="#faqs" className="block mt-2">FAQs</a>
            <Link to="/register" className="block mt-2">Register</Link>
            <div className="follow flex mt-4">
              <h2 className="text-[#D434FE] text-lg font-bold">Follow us</h2>
              <div className="flex items-center"><a href=""><img src={x} alt="" className="mx-2" /></a>
              <a href=""><img src={instagram} alt="" className="mx-2" /></a>
              <a href=""><img src={linkedIn} alt="" className="mx-2" /></a></div>
            </div>
          </div>
          <div className="md:w-[50%] w-full md:mb-0 mb-10">
            <h1 className="font-extrabold text-[#D434FE] text-xl">Contact Us</h1>
            <div className="flex mb-3 mt-5">
              <FaPhoneVolume size={24} color="white" className="mr-2" />
              <span>+254707653444</span>
            </div>
            <div className="flex">
              <MdLocationPin size={24} color="white" className="mr-2" />
              <span>
                27, Alara Street <br />
                Yaba 100012 <br />
                Lagos State <br />
                Nigeria <br />
              </span>
            </div>
          </div>
        </div>
        <span className="w-full flex justify-center items-center pb-6">All rights reserved. © getlinked Ltd.</span>
    </section>
  );
};

export default Footer;
