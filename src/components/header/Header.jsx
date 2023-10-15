import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import man from "../../assets/man.png";
import layer from "../../assets/image1.png";
import Typewriter from "../typeWriter/TypeWriter";
import line from "../../assets/home_page_svg.svg";
import fire from "../../assets/fire.png";
import chain from "../../assets/chain.png";
import star from "../../assets/star.svg";
import grayStar from "../../assets/grey_star.svg";
import purple from "../../assets/purple_star.svg";
import flare from "../../assets/flare.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])

  const currentDate = new Date();
const tomorrow = new Date(currentDate);
tomorrow.setDate(currentDate.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);
const targetDate = tomorrow;

  const calculateTimeRemaining = () => {
    const now = new Date();
    const timeRemaining = targetDate - now;

    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);

    return {
      hours: hours < 10 ? `0${hours}` : hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds: seconds < 10 ? `0${seconds}` : seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative header w-full text-white md:px-24 px-4">
      <div className="typewriter w-full flex sm:justify-end justify-center md:mb-8 mt-8">
        <span className="italic font-extrabold md:text-2xl text-lg">I</span>
            <Typewriter
              text="gniting a Revolution in HR Innovation"
              delay={200}
              loop={true}
            />
            <img src={line} alt="" className=" absolute top-9 " />
          </div>
          {""}
      <div className="header-full h-full flex md:flex-row flex-col justify-between">
        <img
          src={purple}
          className="absolute top-[5rem] md:block hidden left-[17rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <img
          src={purple}
          className="absolute top-[1rem] md:block hidden left-[46rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <img
          src={star}
          className="absolute top-[15rem] md:block hidden right-[4rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <img
          src={star}
          className="absolute top-[29rem] md:block hidden left-[34rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <img
          src={grayStar}
          className="absolute top-[26rem] md:block hidden left-[12rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <img
          src={grayStar}
          className="absolute top-[14rem] md:block hidden left-[42rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
        />
        <div data-aos="fade-right" className="header-left  w-full h-full sm:mt-[7rem] mt-[3rem] font-extrabold">
          <h2 className="sm:text-[50px] text-[40px] font-extrabold sm:text-left text-center">
            getlinked Tech
          </h2>
          <h2 className="sm:text-[45px] text-[40px] flex sm:justify-start justify-center items-center sm:text-left text-center">
            Hackathon {" "}
            <span className="text-[#D434FE] sm:text-left text-center">1.0</span>
            <img src={chain} className="ml-1 sm:w-[3rem] w-[2rem]" alt="" />
            <img src={fire} className="ml-1 sm:w-[3rem] w-[2rem]" alt="" />
          </h2>
          <p className="sm:text-left text-center font-normal mb-4">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <div className="w-full flex sm:justify-start justify-center">
            <Link
              to="/register"
              className="primaryColor px-8 py-2 rounded-sm font-normal"
            >
              Register
            </Link>
          </div>
          <div className="countdown w-full flex sm:justify-start justify-center sm:mt-20 sm:mb-0 mb-8 mt-10 text-2xl">
            <span className="countdown-digit">{timeRemaining.hours}</span>h{" "}:
            <span className="countdown-digit">{timeRemaining.minutes}</span>m{" "}:
            <span className="countdown-digit">{timeRemaining.seconds}</span>s
          </div>
        </div>
        <div className="header-right w-full flex flex-col items-center">
          <div className="w-full relative">
            <img src={man} data-aos="fade-left" className="w-[35rem]" alt="man wearing Glasses" />
            <img src={layer} data-aos="zoom-in" className="w-[35rem] absolute top-0 h-auto mx-auto" alt="man" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
