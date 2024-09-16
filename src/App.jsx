import Hero from "./components/hero/hero";
import ParticlesComponent from "./components/heroConfig/particles_Config";
import NavBar from "./components/navbar/navBar";
import Projects from "./components/projects";
import CardSection from "./components/cardSection";

function App() {
  return (
    <>
      <NavBar />
      <ParticlesComponent id="particles" />
      <Hero />
      <CardSection />
      <Projects />
    </>
  );
}

export default App;
