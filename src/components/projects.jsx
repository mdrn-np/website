import { space } from "postcss/lib/list";
import { project } from "../data/data.js";
import { FaArrowRight } from "react-icons/fa";

function ProjectContainer({ img, name, desc, link, tags }) {
  return (
    <div
      className={`projectContainer opacity-[0.95] w-full h-80 max-md:bg-[url('https://picsum.photos/500')] text-primary my-4 rounded-xl md:bg-secondary md:flex md:flex-row hover:opacity-100`}
    >
      <img
        src={`${img}/600`}
        alt="a picture of the project"
        className="rounded-xl max-md:hidden md:w-[40%] h-auto"
      />

      <div className="details w-full h-full p-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)] rounded-lg backdrop-blur-sm hover:backdrop-blur-[5px]">
        <h3 className="font-extrabold text-6xl">Name</h3>

        {tags
          ? tags.map((tag) => (
              <span className="before:content-['#'] mr-2 text-accent font-bold p-0 m-0">
                {tag}
              </span>
            ))
          : null}

        <p className="my-4 max-md:text-black max-md:font-semibold text-justify w-full">
          {desc}
        </p>

        <button className="order-last flex items-center gap-1 hover:gap-2">
          <a href="http://" target="_blank" rel="noopener noreferrer">
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

export default function Projects() {
  return (
    <div>
      <h1 className="text-center heading font-semibold my-4">Our Projects</h1>
      {project
        ? project.map((details) => {
            const { image, name, tags, description, link } = details;
            console.log(image);

            return (
              <ProjectContainer
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
