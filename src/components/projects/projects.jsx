import PropTypes from "prop-types";
import { project } from "../../data/data.js";
import { FaArrowRight, FaGithub } from "react-icons/fa";

function ProjectContainer({ img, name, desc, link, extra_link, tags }) {
  return (
    <div className="projects p-4 md:p-6 flex flex-col sm:flex-row gap-4 sm:gap-8 h-full shadow-lg bg-gray-400 bg-clip-padding bg-opacity-10 backdrop-filter backdrop-blur-sm transition-transform duration-300 ease-in-out hover:bg-opacity-20 hover:shadow-2xl">
      <div className=" projectContainer relative rounded-lg w-full sm:w-[40%] lg:w-1/3 overflow-hidden aspect-square">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <img
            alt={`${name} thumbnail`}
            loading="lazy"
            width="400"
            height="400"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:blur-sm"
            src={img}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <FaGithub size={80} /> <FaArrowRight />
          </div>
        </a>
      </div>
      <div className="flex flex-col gap-4 flex-1 sm:mt-2">
        <div className="flex flex-wrap gap-2 my-2">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className={`rounded-sm font-medium text-white py-1 px-2 uppercase text-xs sm:text-sm transition-colors ease-in-out duration-300 tracking-wide ${
                index % 2 === 0 ? "bg-blue-500" : "bg-green-500"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xl sm:text-2xl tracking-wide text-textPrimary font-bold">
          {name}
        </p>
        <p className="text-sm sm:text-md text-textSecondary w-full lg:w-3/4">
          {desc}
        </p>
        <div className="mt-4 sm:mt-10 mb-3 sm:mb-4 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center sm:items-start">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group py-2 rounded-md text-sm sm:text-md flex items-center gap-2.5 cursor-pointer transition-backgroundColor duration-300 ease-in-out focus:border-0 disabled:contrast-75 text-textPrimary font-medium bg-primaryBtnGradient hover:bg-primaryGradientHover px-3 sm:px-6"
          >
            Github <FaGithub />
            <span className="group-hover:translate-x-1.5 transition-all duration-300">
              <FaArrowRight />
            </span>
          </a>
          {extra_link ? (
            <a
              href={extra_link}
              target="_blank"
              rel="noopener noreferrer"
              className="group py-2 px-3 sm:px-5 rounded-md text-sm sm:text-md flex items-center gap-2.5 cursor-pointer transition-backgroundColor duration-300 ease-in-out disabled:contrast-75 border text-textPrimary focus:border bg-transparent border-borderSoft hover:bg-surface font-medium"
            >
              Live Website
            </a>
          ) : (
            <button
              disabled
              className="group py-2 px-3 sm:px-5 rounded-md text-sm sm:text-md flex items-center gap-2.5 cursor-not-allowed transition-backgroundColor duration-300 ease-in-out disabled:contrast-75 border text-textPrimary focus:border bg-transparent border-borderSoft font-medium"
            >
              Live Website
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectContainer.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  link: PropTypes.string,
  extra_link: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default function Projects() {
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <h1 className="text-center heading font-semibold my-4">Our Projects</h1>
      {project && project.length > 0 ? (
        project.map((details) => {
          const { image, name, tags, description, link, extra_link } = details;

          return (
            <div key={name} className="mb-8">
              {" "}
              {/* Added margin-bottom for spacing */}
              <ProjectContainer
                img={image}
                name={name}
                tags={tags}
                desc={description}
                link={link}
                extra_link={extra_link}
              />
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-500">No projects available.</p>
      )}
    </div>
  );
}
