import React, { useEffect } from "react";
import criteriaImg from "../../assets/criteria.png";
import { Link } from "react-router-dom";
import star from "../../assets/star.svg";
import grayStar from "../../assets/grey_star.svg";
import purple from "../../assets/purple_star.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Criteria = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])
  return (
    <section className="relative criteria md:px-32 px-8 py-3 text-white">
      <div className="full flex justify-between md:flex-row flex-col w-full items-center">
        <img
        src={purple}
        className="absolute top-[4rem] md:block hidden left-[10rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={star}
        className="absolute top-[28rem] md:block hidden left-[38rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={grayStar}
        className="absolute top-[18rem] md:block hidden left-[24rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
        <div data-aos="fade-right" className="criteria-left w-full">
          <img src={criteriaImg} alt="" className="w-[450px] h-[450px]" />
        </div>
        <div data-aos="fade-left" className="criteria-right w-full">
          <div className="criteria-header mb-3">
            <h1 className="font-bold text-[27px] md:text-left text-center">
              Judging Criteria <br /> <span className="text-[#D434FE]">Key attributes</span>{" "}
            </h1>
          </div>
          <div className="criteria-text mb-9 md:text-left text-center">
            <p className="mb-2">
              <span className="text-[#FF26B9]">Innovation and Creativity:</span>
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
            <p className="mb-2">
              <span className="text-[#FF26B9]">Functionality:</span>Assess how
              well the solution works. Does it perform its intended functions
              effectively and without major issues? Judges would consider the
              completeness and robustness of the solution.
            </p>
            <p className="mb-2">
              <span className="text-[#FF26B9]">Impact and Relevance:</span>
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </p>
            <p className="mb-2">
              <span className="text-[#FF26B9]">Technical Complexity: </span>
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>
            <p className="mb-2">
              <span className="text-[#FF26B9]">
                Adherence to Hackathon Rules:{" "}
              </span>
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-start"><Link to="/read_more" className="primaryColor px-8 py-2 rounded-sm font-normal">Read More</Link></div>
        </div>
      </div>
    </section>
  );
};

export default Criteria;
