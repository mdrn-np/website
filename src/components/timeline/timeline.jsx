import PropTypes from "prop-types";
import { timelineEvents } from "../../data/data";
import "./timeline.css";
import "../../App.css";

// eslint-disable-next-line no-unused-vars
function TimeLineCard({ id, year, title, desc, img }) {
  return (
    <div
      className={`group cardContainer rounded-xl w-full min-[881px]:w-[45%] shrink-0 grow-0 bg-gray-400 bg-clip-padding bg-opacity-10 backdrop-filter backdrop-blur-sm sm:self-start sm:even:self-end my-24 `}
      dataBeforeText={title}
    >
      <img src={`${img}500`} alt="" className="rounded-t-xl w-full" />
      <h1 className="text-left year text-5xl font-extrabold text-secondary mt-[-1.75rem] px-2 max-[880px]:px-4">
        {year}
      </h1>
      <div className="flex flex-col items-center mt-[0.5rem]">
        <h1 className="hidden max-[880px]:block w-[95%] text-left text-3xl font-bold text-secondary">
          {title}
        </h1>
        <p className="description text-justify w-[95%] text-lg pb-4">{desc}</p>
      </div>
    </div>
  );
}

const contentBefore = {};

TimeLineCard.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default function Timeline() {
  return (
    <>
      <h1 className="text-center heading font-semibold my-4">Our History</h1>

      <div className="timeline max-w-[800px] relative flex flex-col flex-wrap gap-10 items-center justify-center before:content-[''] before:absolute before:w-1 before:h-full before:bg-gray-400 before:max-[880px]:left-5 before:rounded-2xl before:opacity-75 my-32 max-[880px]:pl-10 mx-auto px-4">
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
    </>
  );
}

Timeline.propTypes = {
  timelineEvents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      year: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
