import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { timelineEvents } from "../../data/data";
import "./timeline.css";
import "../../App.css";

function TimeLineCard({ id, year, title, desc, img }) {
  return (
    <div
      className={`group cardContainer rounded-xl w-full min-[881px]:w-[45%] shrink-0 grow-0 bg-gray-400 bg-clip-padding bg-opacity-10 backdrop-filter backdrop-blur-sm sm:self-start sm:even:self-end my-12 p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out`} // Added padding and shadow
      dataBeforeText={title}
    >
      <img src={`${img}`} alt="" className="rounded-t-xl w-full mb-4" />
      <h1 className="text-left year text-3xl font-extrabold text-secondary mt-[-1.75rem] px-2 max-[880px]:px-4">
        {year}
      </h1>
      <div className="flex flex-col items-center mt-[0.5rem]">
        <h1 className="hidden max-[880px]:block w-[95%] text-left text-2xl font-bold text-secondary">
          {title}
        </h1>
        <p className="description text-justify w-[95%] text-lg pb-4">{desc}</p>
      </div>
    </div>
  );
}

TimeLineCard.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default function Timeline() {
  const timelineRef = useRef(null);
  const ballRef = useRef(null);
  const [ballPosition, setBallPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current && ballRef.current) {
        const timelineTop =
          timelineRef.current.getBoundingClientRect().top + window.scrollY;
        const timelineHeight = timelineRef.current.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY + windowHeight / 2;
        const newBallPosition =
          ((scrollPosition - timelineTop) / timelineHeight) * 100;
        setBallPosition(Math.min(Math.max(newBallPosition, 0), 100));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative max-w-screen-lg mx-auto px-4">
      <h1 className="text-center heading font-semibold my-4">Our History</h1>
      <div
        ref={timelineRef}
        className="timeline relative flex flex-col flex-wrap gap-6 items-center justify-center my-16 max-md:pl-10"
      >
        <div
          className="absolute w-1 h-full"
          style={{
            background: `linear-gradient(to bottom, white ${ballPosition}%, purple 0%)`,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        ></div>
        <div
          ref={ballRef}
          className="absolute w-4 h-4 bg-purple-500 rounded-full transition-transform duration-300 ease-in-out"
          style={{
            top: `${ballPosition}%`,
            left: "50%",
            transform: "translateX(-50%)",
            boxShadow: "0 0 10px 2px rgba(128, 0, 128, 0.7)",
          }}
        ></div>
        {timelineEvents.map((event) => {
          const { id, year, title, description, image } = event;
          return (
            <TimeLineCard
              key={id}
              id={id}
              year={year}
              title={title}
              desc={description}
              img={image}
            />
          );
        })}
      </div>
    </div>
  );
}
