import React from 'react'
import prizeIMG from "../../assets/trophy.png"
import prizes from "../../assets/prices.png"
import star from "../../assets/star.svg";
import grayStar from "../../assets/grey_star.svg";
import purple from "../../assets/purple_star.svg";

const Prizes = () => {
  return (
    <section className="relative prizes_rewards w-full px-32 py-16 text-white">
        <div className="full w-full flex justify-between items-center">
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
            <div className="prizes-left w-[80%]">
                <img src={prizeIMG} alt="" />
            </div>
            <div className="prizes-right w-full">
              <div className="prizes-header px-32 mb-8 w-full">
              <h1 className='text-2xl font-extrabold mb-2'>Prizes and <br /><span className='text-[#D434FE]'>Rewards</span></h1>
              <p>Highlight of the prizes or rewards for winners and for participants</p>
              </div>
              <div className="prizes w-full">
                <img src={prizes} alt="" className='w-[90%]' />
              </div>

            </div>
        </div>
    </section>
  )
}

export default Prizes