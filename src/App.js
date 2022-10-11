import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Events from "./Components/Events";
import Stats from "./Components/Stats";
import Merch from "./Components/Merch";
import Team from "./Components/Team";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Events></Events>
      <Gallery></Gallery>
      <Stats></Stats>
      <Merch></Merch>
      <Team></Team>
      <Contact></Contact>
    </>
  );
}

export default App;
