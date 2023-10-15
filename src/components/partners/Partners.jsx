import React, { useEffect } from 'react'
import partnerImg from "../../assets/Partner.svg"
import star from "../../assets/star.svg";
import grayStar from "../../assets/grey_star.svg";
import purple from "../../assets/purple_star.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Partners = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])
  return (
    <section className="relative partners text-white w-full md:px-32 px-8 md:py-12 py-5">
        <div className="w-full">
        <img
        src={purple}
        className="absolute top-[8rem] md:block hidden left-[17rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={star}
        className="absolute top-[15rem] md:block hidden right-[10rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={star}
        className="absolute top-[38rem] md:block hidden left-[20rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
            <div data-aos="fade-down" className="patners-header mb-10 w-full flex justify-center items-center">
                <div className="text sm:w-[50%] mb-3 text-center">
                <h1 className="text-2xl font-extrabold mb-3">Partners and Sponsors</h1>
                <p className=''>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
                </div> 
            </div>
            <div data-aos="zoom-in" className="partner_content">
                <img src={partnerImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Partners