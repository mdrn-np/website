import "./animation.css";
import { sponser_benifits } from "../../data/data";
import Tilt from "react-parallax-tilt";

export default function SponserIcon() {
  return (
    <div className="scrollContainer before:p-4">
      <div className="scrollDiv flex-shrink-0 flex items-center justify-center w-full">
        {sponser_benifits.map((val) => (
          <Tilt key={val.id} tiltMaxAngleX={9} tiltMaxAngleY={9}>
            <div className="grid place-items-center rounded-lg shadow-lg p-4 m-4">
              <img
                className="object-contain w-full h-full rounded-lg shadow-lg bg-gray-400 bg-clip-padding bg-opacity-10 backdrop-filter backdrop-blur-sm aspect-[19/9] px-2 py-2"
                src={val.image}
                alt={val.name}
              />
              <div className="text-center mt-2 font-sans text-gray-700">
                {val.desc}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}
