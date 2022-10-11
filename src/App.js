import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Events from "./Components/Events";
import Stats from "./Components/Stats";
import Merch from "./Components/Merch";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Merch></Merch>
      <Events></Events>
      <Stats></Stats>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
}

export default App;
