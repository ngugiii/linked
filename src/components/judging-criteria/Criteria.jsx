import React from "react";
import criteriaImg from "../../assets/criteria.png";
import { Link } from "react-router-dom";

const Criteria = () => {
  return (
    <section className="criteria px-32 py-3 text-white">
      <div className="full flex justify-between w-full items-center">
        <div className="criteria-left w-full">
          <img src={criteriaImg} alt="" className="w-[450px] h-[450px]" />
        </div>
        <div className="criteria-right w-full">
          <div className="criteria-header mb-3">
            <h1 className="font-bold text-[27px]">
              Judging Criteria <br /> <span className="text-[#D434FE]">Key attributes</span>{" "}
            </h1>
          </div>
          <div className="criteria-text mb-9">
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
          <Link to="/read_more" className="primaryColor px-8 py-2 rounded-sm font-normal">Read More</Link>
        </div>
      </div>
    </section>
  );
};

export default Criteria;
