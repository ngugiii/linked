import React from 'react'
import partnerImg from "../../assets/Partner.svg"
const Partners = () => {
  return (
    <section className="partners text-white w-full px-32 py-12">
        <div className="w-full">
            <div className="patners-header mb-10 w-full flex justify-center items-center">
                <div className="text w-[50%] mb-3 text-center">
                <h1 className="text-2xl font-extrabold">Partners and Sponsors</h1>
                <p className=''>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
                </div> 
            </div>
            <div className="partner_content">
                <img src={partnerImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Partners