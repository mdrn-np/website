import { timelineEvents } from "../../data/data";
import "./test.css";

function TimeLineCard({ id, year, title, desc, img }) {
  return (
    <>
      <div
        className={`group cardContainer rounded-2xl md:w-[40%] w-full bg-gray-400 bg-clip-padding bg-opacity-10 backdrop-filter backdrop-blur-sm sm:self-start sm:even:self-end my-24`}
      >
        <img src={`${img}600`} alt="" srcset="" className="rounded-2xl" />

        <div className="rounded-b-2xl absolute h-auto w-full bottom-0 left-0 bg-gray-400 bg-clip-padding bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 py-6">
          <h1 className="text-left year text-5xl font-extrabold text-accent">
            {year}
          </h1>
          <div className="rounded-2xl details hidden group-hover:block transition duration-300 ease-in-out">
            <h1 className="title uppercase font-bold text-primary text-2xl pb-4">
              {title}
            </h1>
            <p className="description text-justify w-[95%]">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Timeline() {
  return (
    <>
      <h1 className="text-center heading">Our History</h1>

      <div className="timeline relative flex flex-col flex-wrap gap-10 items-center justify-center before:content-[''] before:absolute before:w-1 before:h-full before:bg-accent before:max-md:left-5 before:rounded-2xl before:opacity-75 my-32 max-md:pl-10">
        {timelineEvents.map((event) => {
          const { id, year, title, description, image } = event;
          return (
            <TimeLineCard
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
