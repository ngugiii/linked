import React from 'react'
import prizeIMG from "../../assets/trophy.png"
import prizes from "../../assets/prices.png"

const Prizes = () => {
  return (
    <section className="prizes_rewards w-full px-32 py-16 text-white">
        <div className="full w-full flex justify-between items-center">
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