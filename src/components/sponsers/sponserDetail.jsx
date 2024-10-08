import SponserIcon from "./sponsersicons.jsx";
import "./animation.css";
import Marquee from "react-fast-marquee";

export default function SponserDetail() {
  return (
    <div className="w-[100%] h-fit flex items-center justify-center flex-col">
      <div className="vignette flex w-[75rem] select-none overflow-hidden">
        <Marquee>
          <SponserIcon />
        </Marquee>
      </div>
    </div>
  );
}
