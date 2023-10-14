import React from 'react'
import rulesImg from "../../assets/rules.png"

const Rules = () => {
  return (
    <section className="rules_guidelines w-full px-32 py-7 text-white">
        <div className="full w-full flex justify-between items-center">
            <div className="rules-left w-full">
                <div className="rules-header mb-3">
                <h1 className='font-bold text-[35px]'>Rules and <br /> <span className="text-[#D434FE]">Guidelines</span></h1>
                </div>
                <div className="rules-text">
                Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
                </div>
            </div>
            <div className="rules-right w-full flex justify-center items-center">
                <img src={rulesImg} alt="" className='w-[400px] h-[400px]' />
            </div>
        </div>

    </section>
  )
}

export default Rules