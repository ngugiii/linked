import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineData } from "./timelineData";
import star from "../../assets/star.svg";
import grayStar from "../../assets/grey_star.svg";
import purple from "../../assets/purple_star.svg";

const Timeline = () => {
  return (
    <section id="timeline" className="timeline relative md:px-32 px-8 text-white py-7 w-full">
      <div className="timeline-header w-full flex flex-col justify-center items-center mb-16">
      <img
        src={purple}
        className="absolute top-[8rem] md:block hidden left-[17rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={star}
        className="absolute top-[15rem] md:block hidden right-[10rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={grayStar}
        className="absolute top-[32rem] md:block hidden left-[24rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={grayStar}
        className="absolute top-[14rem] md:block hidden left-[42rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
        <h1 className="text-[40px] font-bold">Timeline</h1>
        <p className=" md:text-left text-center">
          Here is the breakdown of the time we anticipate using for the upcoming event.
        </p>
      </div>
      <div className="">
        <VerticalTimeline>
          {timelineData.map((timeline, index) => (
            <VerticalTimelineElement
              key={timeline.date}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "transparent", color: "#fff", padding: "1px" }}
              contentArrowStyle={{display:"none"}}
              date={<span className="date">{timeline.date}</span>}
              iconStyle={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              iconClassName="primaryColor"
              icon={index + 1}
            >
              <h1 className="vertical-timeline-element-title text-xl font-bold text-[#D434FE]">
                {timeline.title}
              </h1>
              <p className="">{timeline.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};


export default Timeline;
