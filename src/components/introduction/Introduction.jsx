import React from 'react'
import introImg from "../../assets/idea.png"

const Introduction = () => {
  return (
    <section className="introduction w-full px-32 py-8">
        <div className="full w-full flex justify-around text-white items-center">
            <div className="intro-left w-full">
                <img src={introImg} alt="" />
            </div>
            <div className="intro-right w-full">
                <div className="intro-header mb-4 font-bold text-[30px]">
                    <h1>Introduction to getlinked</h1>
                    <h1 className="text-[#D434FE]"> tech Hackathon 1.0</h1>
                </div>
                <div className="intro-text">
                    <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Introduction