import {
  FaReact,
  FaPython,
  FaCode,
  FaRust,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaHtml5,
  FaGit,
  FaCss3,
  FaFigma,
  FaGithub,
  FaLinux,
  FaNpm,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import logo from "../../images/mdrn-logo.png";
import Tilt from "react-parallax-tilt";
import "../../App.css";

export default function TechStack() {
  const techIcons = [
    [FaReact, FaPython],
    [FaAws, FaDocker],
    [FaHtml5, FaCss3],
    [RiTailwindCssFill, FaNodeJs],
    [FaGit, FaFigma],
    [FaCode, FaGithub],
    [FaRust, FaNpm],
    [SiDjango, FaLinux],
  ];

  const rows = [];
  for (let i = 0; i < techIcons.length; i += 2) {
    rows.push(techIcons.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="heading text-center my-8">Tech We Use</h1>
      <div className="w-[90%] max-w-[935px] relative flex flex-col gap-8">
        <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none">
          {rows.flat().map((iconSet, setIndex) =>
            iconSet.map((_, iconIndex) => {
              const x1 = "50%";
              const y1 = "50%";
              const x2 = `${setIndex % 2 === 0 ? 25 : 75}%`;
              const y2 = `${Math.floor(setIndex / 2) * 25 + 12.5}%`;
              const midX = (parseFloat(x1) + parseFloat(x2)) / 2;
              const midY = (parseFloat(y1) + parseFloat(y2)) / 2 - 10;

              return (
                <path
                  key={`${setIndex}-${iconIndex}`}
                  d={`M ${x1} ${y1} Q ${midX} ${midY}, ${x2} ${y2}`}
                  stroke="gray"
                  strokeWidth="2"
                  fill="none"
                />
              );
            })
          )}
        </svg>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="rowDiv flex justify-between">
            {row.map((iconSet, setIndex) => (
              <div key={setIndex} className="relative flex gap-4 lg:gap-8">
                {iconSet.map((Icon, iconIndex) => (
                  <span
                    key={iconIndex}
                    className="shadow-lg bg-gray-400 bg-clip-padding bg-opacity-10 backdrop-filter backdrop-blur-sm border grid z-30 place-items-center rounded-[12px] p-4 lg:p-5"
                  >
                    <Icon className="size-15 lg:size-8 2xl:size-15" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Tilt
            glareBorderRadius="8px"
            glareEnable
            glareColor="#DE354C"
            tiltMaxAngleX={"12"}
            tiltMaxAngleY={"12"}
          >
            <span className="shadow-lg bg-gray-400 bg-clip-padding bg-opacity-10 backdrop-filter backdrop-blur-sm border grid place-items-center p-4 lg:p-3 size-[92px] lg:size-28 2xl:size-[120px] rounded-lg lg:rounded-xl">
              <img
                src={logo}
                alt="mdrn logo"
                draggable="false"
                className="custom w-full no-drag h-auto"
              />
            </span>
          </Tilt>
        </div>
      </div>
    </div>
  );
}
