import Hero from "./components/hero/hero";
import ParticlesComponent from "./components/heroConfig/particles_Config";
import NavBar from "./components/navBar";
import Projects from "./components/projects";

function App() {
  return (
    <>
      <NavBar />
      <ParticlesComponent id="particles" />
      <Hero />
      <Projects />
    </>
  );
}

export default App;
