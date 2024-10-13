import Hero from "./components/hero/hero";
import ParticlesComponent from "./components/heroConfig/particles_Config";
import Projects from "./components/projects/projects";
import CardSection from "./components/cards/cardSection";
import Navbar from "./components/navbar/navbar";
import Timeline from "./components/timeline/timeline";
import Sponsers from "./components/sponsers/sponser";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <ParticlesComponent id="particles" />
      <Hero />
      <CardSection />
      <Projects />
      <Timeline />
      <Sponsers />
      <Footer />
    </>
  );
}

export default App;
