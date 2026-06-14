import Hero from "./Components/hero"
import NavBar from "./Components/NavBar"
import ProductViewer from "./Components/ProductViewer"
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all"; {/*Scroll tigger lets us animate things like pinning scrubing and triggering based on the scroll trigger*/}

gsap.registerPlugin{ScrollTrigger}{/*we do this cause gsap has to be registered to be used everywhere */}
const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
    </main>
  )
}

export default App