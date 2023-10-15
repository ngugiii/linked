import React, { useEffect } from 'react'
import prizeIMG from "../../assets/trophy.png"
import prizes from "../../assets/prices.png"
import star from "../../assets/star.svg";
import grayStar from "../../assets/grey_star.svg";
import purple from "../../assets/purple_star.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Prizes = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])
  return (
    <section className="relative prizes_rewards w-full md:px-32 px-8 py-16 text-white">
        <div className="full w-full flex justify-between md:flex-row flex-col-reverse items-center">
        <img
        src={purple}
        className="absolute top-[8rem] md:block hidden left-[12rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={star}
        className="absolute top-[10rem] md:block hidden right-[10rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={star}
        className="absolute top-[34rem] md:block hidden left-[15rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={grayStar}
        className="absolute top-[14rem] md:block hidden left-[42rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
            <div data-aos="fade-right" className="prizes-left w-[80%]">
                <img src={prizeIMG} alt="" />
            </div>
            <div className="prizes-right w-full">
              <div data-aos="fade-right" className="prizes-header md:px-32 px-8 mb-8 w-full">
              <h1 className='text-2xl font-extrabold mb-2  md:text-left text-center'>Prizes and <br /><span className='text-[#D434FE]'>Rewards</span></h1>
              <p className=' md:text-left text-center'>Highlight of the prizes or rewards for winners and for participants</p>
              </div>
              <div data-aos="flip-left" className="prizes w-full">
                <img src={prizes} alt="" className='md:w-[90%]' />
              </div>

            </div>
        </div>
    </section>
  )
}

export default Prizes