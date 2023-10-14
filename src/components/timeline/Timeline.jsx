import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineData } from "./timelineData";

const Timeline = () => {
  return (
    <section className="timeline px-32 text-white py-7 w-full">
      <div className="timeline-header w-full flex flex-col justify-center items-center mb-16">
        <h1 className="text-[40px] font-bold">Timeline</h1>
        <p>
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
