import Hero from "./components/hero/hero";
import ParticlesComponent from "./components/heroConfig/particles_Config";
import NavBar from "./components/navBar";
import cardSection from "./components/cardSection";
import CardSection from "./components/cardSection";

function App() {
  return (
    <>
      <NavBar />
      <Hero/>
      <CardSection/>
      <ParticlesComponent id="particles"/>
    </>
  );
}

export default App;