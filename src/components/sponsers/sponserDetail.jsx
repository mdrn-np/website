import React, { useRef } from "react";
import SponserIcon from "./sponsersicons.jsx";
import "./animation.css";

export default function SponserDetail() {
  const scrollRef = useRef(null);

  return (
    <div className="w-full h-fit flex items-center justify-center flex-col">
      <div className="vignette flex w-full max-w-7xl select-none overflow-x-auto overflow-y-hidden">
        <div className="flex w-full" ref={scrollRef}>
          <SponserIcon />
        </div>
      </div>
    </div>
  );
}
