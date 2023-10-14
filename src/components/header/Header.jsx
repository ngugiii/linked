import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import man from "../../assets/man.png";
import layer from "../../assets/image 1.png";
import Typewriter from "../typeWriter/TypeWriter";
import line from "../../assets/home_page_svg.svg"
import fire from "../../assets/fire.png"
import chain from "../../assets/chain.png"
import star from "../../assets/star.svg";
import grayStar from "../../assets/grey_star.svg";
import purple from "../../assets/purple_star.svg";

const Header = () => {
  const targetDate = new Date("2023-11-18T00:00:00Z");

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
    <section className="header w-full h-[100vh] text-white px-24">
      <div className="header-full h-full flex md:flex-row flex-col flex-between">
      <img
        src={purple}
        className="absolute top-[8rem] md:block hidden left-[17rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
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
        <div className="header-left h-full mt-[7rem] font-extrabold">
          <h2 className="text-[50px] font-extrabold text-left">
            getlinked Tech
          </h2>
          <h2 className="text-[45px] flex text-left">
            Hackathon &nbsp; <span className="text-[#D434FE] text-left">1.0</span>
            <img src={chain} className="ml-1" alt="" />
            <img src={fire} alt="" />
          </h2>
          <p className="text-left font-normal mb-4">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <div className="w-full flex justify-start">
            <Link to="/register" className="primaryColor px-8 py-2 rounded-sm font-normal">
              Register
            </Link>
          </div>
          <div className="countdown mt-24 text-2xl">
            <span className="countdown-digit">{timeRemaining.hours}</span>h{" "}
            <span className="countdown-digit">{timeRemaining.minutes}</span>m{" "}
            <span className="countdown-digit">{timeRemaining.seconds}</span>s
          </div>
        </div>
        <div className="header-right w-[80%] flex flex-col items-center">
        <div className="typewriter">
        <Typewriter text="Igniting a Revolution in HR Innovation" delay={200} loop={true} />
        <img src={line} alt="" className="flex justify-end"/>
          </div>
          <div className="w-full">
        </div>
          <img src={man} className="w-[35rem] relative" alt="man wearing Glasses" />
          <img src={layer} className="w-[30rem] absolute top-[25%] left-[50%]" alt="man wearing Glasses" />
        </div>
      </div>
    </section>
  );
};

export default Header;
