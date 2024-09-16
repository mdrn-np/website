import Hero from "./components/hero/hero";
import ParticlesComponent from "./components/heroConfig/particles_Config";
import Projects from "./components/projects";
import CardSection from "./components/cardSection";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <ParticlesComponent id="particles" />
      <Hero />
      <CardSection />
      <Projects />
    </>
  );
}

export default App;
