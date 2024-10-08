import "./animation.css";
import { sponsers } from "../../data/data";
import Tilt from "react-parallax-tilt";

export default function SponserIcon() {
  return (
    <div className="scrollDiv flex-shrink-0 flex items-center justify-around w-full">
      {sponsers.map((val) => (
        <Tilt key={val.id} tiltMaxAngleX={9} tiltMaxAngleY={9}>
          <div
            className="grid place-items-center"
            style={{
              width: "clamp(16rem, 1rem + 30vmin, 20rem)",
              padding: "calc(clamp(16rem, 1rem + 30vmin, 20rem)/10)",
            }}
          >
            <img
              className="object-contain w-full h-full rounded-lg shadow-lg bg-gray-400 bg-clip-padding bg-opacity-10 backdrop-filter backdrop-blur-sm aspect-[19/9] px-1 sm:px-2 py-1 sm:py-2"
              src={val.image}
              alt="logos here"
            />
          </div>
        </Tilt>
      ))}
    </div>
  );
}
