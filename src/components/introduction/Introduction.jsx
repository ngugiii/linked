import React, { useEffect } from "react";
import introImg from "../../assets/idea.png";
import star from "../../assets/star.svg";
import grayStar from "../../assets/grey_star.svg";
import purple from "../../assets/purple_star.svg";
import arrow from "../../assets/arrow.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Introduction = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])

  return (
    <section id="introduction" className="introduction relative w-full sm:px-32 px-8 py-8">
      <div className="full w-full flex md:flex-row flex-col sm:justify-around justify-center text-white items-center">
        <img
          src={purple}
          className="absolute top-[17rem] md:block hidden left-[4rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <img
          src={purple}
          className="absolute top-[13rem] md:block hidden right-[4rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <div data-aos="fade-right" className="intro-left data-aos mb-7 w-full">
          <img src={introImg} alt="" />
          <img src={arrow} className="absolute top-[28rem] left-[32rem]" />
        </div>
        <div data-aos="fade-left" className="intro-right w-full">
          <div className="intro-header mb-4 sm:text-left text-center font-bold text-[30px]">
            <h1>Introduction to getlinked</h1>
            <h1 className="text-[#D434FE]"> tech Hackathon 1.0</h1>
          </div>
          <div className="intro-text sm:text-left text-center">
            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
