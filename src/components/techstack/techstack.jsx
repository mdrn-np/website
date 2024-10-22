import {
  FaReact,
  FaPython,
  FaCode,
  FaServer,
  FaAws,
  FaDocker,
  FaBootstrap,
  FaNodeJs,
  FaHtml5,
  FaGit,
  FaCss3,
  FaFigma,
} from "react-icons/fa";
import logo from "../../assets/mdrn-logo.png";

export default function TechStack() {
  const techIcons = [
    [FaReact, FaPython],
    [FaAws, FaDocker],
    [FaHtml5, FaCss3],
    [FaBootstrap, FaNodeJs],
    [FaGit, FaFigma],
    [FaCode, FaServer],
  ];

  const rows = [];
  for (let i = 0; i < techIcons.length; i += 2) {
    rows.push(techIcons.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col items-center my-10">
      <div className="w-[90%] max-w-[935px] relative flex flex-col gap-8">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-between">
            {row.map((iconSet, setIndex) => (
              <div key={setIndex} className="relative flex gap-4 lg:gap-8">
                {iconSet.map((Icon, iconIndex) => (
                  <span
                    key={iconIndex}
                    className="shadow-lg bg-gray-400 bg-clip-padding bg-opacity-10 backdrop-filter backdrop-blur-sm  border border-borderSoft grid z-30 place-items-center rounded-[12px] p-4 lg:p-5"
                  >
                    <Icon className="size-15 lg:size-8 2xl:size-15" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <span className="border border-borderSoft grid place-items-center p-4 lg:p-5 size-[92px] lg:size-28 2xl:size-[120px] rounded-lg lg:rounded-xl">
            <img
              src={logo}
              alt="mdrn logo"
              draggable="false"
              className="w-full no-drag h-auto"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
