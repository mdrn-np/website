import PropTypes from 'prop-types';
import { project } from "../../data/data.js";
import { FaArrowRight } from "react-icons/fa";

function ProjectContainer({ img, name, desc, link, tags }) {
  return (
    <div
      className={`projectContainer group/main opacity-[0.95] bg-gradient-to-r from-gray-300 w-full h-96 max-md:bg-[url('https://picsum.photos/500')] text-secondary my-8 rounded-xl md:flex md:flex-row shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-sm group-hover/main:bg-transparent`}
    >
      <div className="rounded-xl max-md:hidden md:w-[45%] h-full overflow-hidden ">
        <img
          src={`${img}/600`}
          alt="a picture of the project"
          className="w-full h-full ease-in-out duration-300 transition-transform group-hover/main:scale-110"
        />
      </div>

      <div className="details w-full h-full px-6 group-hover/main:backdrop-blur-[5px] sm:w-[80%]">
        <h3 className="text-gray-900 font-extrabold text-6xl">{name}</h3>

        {tags
          ? tags.map((tag) => (
              <span
                key={tag}
                className="before:content-['#'] mr-2 text-accent font-bold p-0 m-0"
              >
                {tag}
              </span>
            ))
          : null}

        <p className="my-4 max-md:text-black max-md:font-semibold text-justify w-[70%]">
          {desc}
        </p>

        <button className="text-primary order-last flex items-center gap-1 group-hover/main:gap-4 hover:gap-2 transition-gap duration-300 ease-in-out">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project{" "}
          </a>
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
}

ProjectContainer.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  link: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default function Projects() {
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <h1 className="text-center heading font-semibold my-4">Our Projects</h1>
      {project
        ? project.map((details) => {
            const { image, name, tags, description, link } = details;

            return (
              <ProjectContainer
                key={name}
                img={image}
                name={name}
                tags={tags}
                desc={description}
                link={link}
              />
            );
          })
        : null}
    </div>
  );
}
