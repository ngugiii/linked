import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import faqImg from "../../assets/faq.png";
import { FAQQuestions } from "./faqs";

const FAQ = () => {
  const [showAnswers, setShowAnswers] = useState(
    Array(FAQQuestions.length).fill(false)
  );

  const toggleShow = (index) => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);
  };

  return (
    <section id="faqs" className="faq w-full text-white px-32 py-8">
      <div className="full w-full flex justify-between items-center">
        <div className="faqs-left w-full">
          <div className="faqs-header font-bold text-[30px] mb-3">
            <h1>Frequently Ask</h1>
            <h1 className="text-[#D434FE]">Question</h1>
          </div>
          <p className="mb-8">
            We got answers to the questions that you might want to ask about
            <span className="font-bold"> getlinked Hackathon 1.0</span>
          </p>
          <div className="faqs-content w-full">
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
        <div className="faq-right w-full flex justify-center items-center">
          <img src={faqImg} alt="" className="w-[400px] h-[400px]" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
