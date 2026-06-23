import Hero from "./Components/hero"
import NavBar from "./Components/NavBar"
import ProductViewer from "./Components/ProductViewer"
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Showcase from "./Components/Showcase";
import Performance from "./Components/three/Performance";
import  Features  from "./Components/three/Features";
import Highlights from "./Components/three/Highlights";
// ScrollTrigger lets us animate things like pinning, scrubbing,
// and triggering animations based on scroll position.

gsap.registerPlugin(ScrollTrigger);
{/*we do this cause gsap has to be registered to be used everywhere */}
const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
    </main>
  )
}

export default App