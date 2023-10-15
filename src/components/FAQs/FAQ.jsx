import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import faqImg from "../../assets/faq.png";
import { FAQQuestions } from "./faqs";
import star from "../../assets/star.svg";
import grayStar from "../../assets/grey_star.svg";
import purple from "../../assets/purple_star.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';


const FAQ = () => {
  const [showAnswers, setShowAnswers] = useState(
    Array(FAQQuestions.length).fill(false)
  );

  const toggleShow = (index) => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);
  };
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])

  return (
    <section id="faqs" className="relative faq w-full text-white md:px-32 px-8 py-8">
      <div className="full w-full flex md:flex-row flex-col justify-between items-center">
      <img
        src={purple}
        className="absolute top-[8rem] md:block hidden left-[2rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={star}
        className="absolute top-[15rem] md:block hidden right-[10rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={grayStar}
        className="absolute top-[32rem] md:block hidden left-[46rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={purple}
        className="absolute top-[14rem] md:block hidden left-[42rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
        <div className="faqs-left w-full">
          <div data-aos="fade-right" className="faqs-header font-bold text-[30px]  md:text-left text-center mb-3">
            <h1>Frequently Ask</h1>
            <h1 className="text-[#D434FE]">Question</h1>
          </div>
          <p className="mb-8  md:text-left text-center">
            We got answers to the questions that you might want to ask about
            <span className="font-bold"> getlinked Hackathon 1.0</span>
          </p>
          <div data-aos="zoom-in" className="faqs-content w-full">
            {FAQQuestions.map((question, index) => {
              return (
                <div className="content p-3 border-b-2 border-[#D434FE] mb-3">
                  <div className="question  flex justify-between w-full">
                    <span>{question.question}</span>
                    <AiOutlinePlus
                      color=""
                      className="text-[#D434FE] cursor-pointer"
                      onClick={() => toggleShow(index)}
                    />
                  </div>
                  {showAnswers[index] && (
                    <div className="answer text-[#D434FE]">{question.answer}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div data-aos="fade-left" className="faq-right w-full sm:mt-0 mt-8 flex justify-center items-center">
          <img src={faqImg} alt="" className="w-[400px] h-[400px]" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
