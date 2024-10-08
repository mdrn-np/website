import SponserIcon from "./sponsersicons.jsx";
import Marquee from "react-fast-marquee";
import "./animation.css";

export default function SponserDetail() {
  return (
    <div className="w-full h-fit flex items-center justify-center flex-col">
      <div className="vignette flex w-full sm:w-3/4 lg:w-1/2 select-none overflow-hidden overflow-y-hidden">
        <Marquee
          gradient={true}
          gradientWidth={50}
          pauseOnHover={true}
          speed={30}
        >
          <SponserIcon />
        </Marquee>
      </div>
    </div>
  );
}
