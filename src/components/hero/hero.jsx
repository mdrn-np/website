import ParticlesComponent from "../heroConfig/particles_Config";
import "./hero.css";

export default function Hero() {
  return (
    <div class="grid place-items-center h-[30rem]">
      <div class=" p-4 ">
        <h1 className="heading font-bold text-center">
          <span>Tech For Tomorrow </span>
          <span className="2">Actions for Today</span>
        </h1>
        <p className="sub-heading text-center">Todo: add about me</p>
      </div>
    </div>
  );
}
