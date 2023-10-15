import React, { useEffect } from "react";
import rulesImg from "../../assets/rules.png";
import star from "../../assets/star.svg";
import grayStar from "../../assets/grey_star.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Rules = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])
  return (
    <section className="relative rules_guidelines w-full md:px-32 px-8 py-7 text-white">
      <div className="full w-full flex flex-col-reverse  md:flex-row justify-between items-center">
        <img
          src={star}
          className="absolute top-[23rem] md:block hidden right-[36rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <img
          src={grayStar}
          className="absolute top-[8rem] md:block hidden left-[24rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <div data-aos="fade-right" className="rules-left w-full">
          <div className="rules-header mb-3">
            <h1 className="font-bold md:text-left text-center text-[35px]">
              Rules and <br />{" "}
              <span className="text-[#D434FE]">Guidelines</span>
            </h1>
          </div>
          <div className="rules-text md:text-left text-center">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </div>
        </div>
        <div data-aos="fade-left" className="rules-right w-full flex justify-center items-center">
          <img src={rulesImg} alt="" className="md:w-[400px] h-[400px]" />
        </div>
      </div>
    </section>
  );
};

export default Rules;
