import {
  FaReact,
  FaPython,
  FaCode,
  FaRust,
  FaAws,
  FaDocker,
  FaBootstrap,
  FaNodeJs,
  FaHtml5,
  FaGit,
  FaCss3,
  FaFigma,
  FaGithub,
  FaLinux,
  FaWindows,
  FaNpm,
} from "react-icons/fa";
import logo from "../../images/mdrn-logo.png";
import Tilt from "react-parallax-tilt";
import "../../App.css";

export default function TechStack() {
  const techIcons = [
    [FaReact, FaPython],
    [FaAws, FaDocker],
    [FaHtml5, FaCss3],
    [FaBootstrap, FaNodeJs],
    [FaGit, FaFigma],
    [FaCode, FaGithub],
    [FaRust, FaNpm],
    [FaWindows, FaLinux],
  ];

  const rows = [];
  for (let i = 0; i < techIcons.length; i += 2) {
    rows.push(techIcons.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="heading text-center my-8">Tech Stack</h1>
      <div className="w-[90%] max-w-[935px] relative flex flex-col gap-8">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="rowDiv flex justify-between">
            {row.map((iconSet, setIndex) => (
              <div key={setIndex} className="relative flex gap-4 lg:gap-8">
                {iconSet.map((Icon, iconIndex) => (
                  <span
                    key={iconIndex}
                    className="shadow-lg bg-gray-400 bg-clip-padding bg-opacity-10 backdrop-filter backdrop-blur-sm  border  grid z-30 place-items-center rounded-[12px] p-4 lg:p-5"
                  >
                    <Icon className="size-15 lg:size-8 2xl:size-15" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}

        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Tilt
            glareBorderRadius="8px"
            glareEnable
            glareColor="#DE354C"
            tiltMaxAngleX={"12"}
            tiltMaxAngleY={"12"}
          >
            <span className="shadow-lg bg-gray-400 bg-clip-padding bg-opacity-10 backdrop-filter backdrop-blur-sm       border  grid place-items-center p-4 lg:p-5 size-[92px] lg:size-28 2xl:size-[120px] rounded-lg lg:rounded-xl">
              <img
                src={logo}
                alt="mdrn logo"
                draggable="false"
                className="w-full no-drag h-auto"
              />
            </span>
          </Tilt>
        </div>
      </div>
    </div>
  );
}
