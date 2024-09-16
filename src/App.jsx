import Hero from "./components/hero/hero";
import ParticlesComponent from "./components/heroConfig/particles_Config";
import NavBar from "./components/navBar";

import Projects from "./components/projects";

import cardSection from "./components/cardSection";
import CardSection from "./components/cardSection";


function App() {
  return (
    <>
      <NavBar />
      <ParticlesComponent id="particles" />
      <CardSection/>
      <Projects />

    </>
  );
}

export default App;
