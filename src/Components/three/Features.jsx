import {Canvas} from "@react-three/fiber";
import Studiolights from "./StudioLights";
import {features} from "../constants/index.js";
import clsx from "clsx";

const ModelScroll =() =

const Features = () => {
return (
    <section id="Features">
        <h2>See it all in a new light.</h2>

        <Canvas id="f-canvas" camera ={{}}>
        <Studiolights />
        <ambientLight intensity={0.5} />
        {/*3d model */}
        </Canvas>

        <div className="absolte insert-0">
            {features.map((feature) =>
            <div className=" {clsx('box', 'box$(index + 1)', feature.styles)}">
                    {feature.text}
                </div>
                )}

        </div>
    </section>
)
}
export default Features
    