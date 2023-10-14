import React from "react";
import termsIMG from "../../assets/key.png";
import {BsFillCheckCircleFill} from "react-icons/bs";

const Terms = () => {
  return (
    <section className="terms w-full px-32 py-12 text-white">
      <div className="full w-full flex justify-center items-center">
        <div className="terms-left w-full">
          <div className="terms-header mb-12 w-full">
            <div className="header mb-5">
              <h1 className="font-extrabold text-2xl text-white mb-2">
                Privacy Policy and <br />
                <span className="text-[#D434FE]">Terms</span>
              </h1>
              <span className="font-extralight text-gray-300">Last updated on September 12, 2023</span>
            </div>
            <p>
              {" "}
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>
          <div className="terms-content_container w-full">
            <div className="terms-content border p-12  rounded w-[90%] border-[#D434FE]">
              <p className="mb-5">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <div className="policy">
                <h2 className="text-xl font-bold text-[#D434FE] mb-1">
                  Licensing Policy
                </h2>
                <span className="mb-2 font-bold">Here are terms of our Standard License:</span>
                <div className="ml-3 text-white mb-4 flex items-center">
                  <BsFillCheckCircleFill color="#2DE100" size={30} />
                  <p className="ml-4">
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </div>
                <div className="ml-3 flex items-center">
                  <BsFillCheckCircleFill color="#2DE100" size={30} />
                  <p className="ml-4">
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center items-center mt-3">
                <button className="primaryColor px-5 py-2 rounded">Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="terms-right w-full">
          <img src={termsIMG} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Terms;
