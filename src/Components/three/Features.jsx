import {Canvas} from "@react-three/fiber";
import Studiolights from "./StudioLights";
import {features, featureSequence} from "../../constants/index.js";
import clsx from "clsx";
import { Html} from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import MacbookModel from "../models/Macbook.jsx";
import { useMediaQuery } from "react-responsive";
import useMacbookStore from "../../store/index.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const ModelScroll =() => {
    const groupRef = useRef(null);
    const isMobile = useMediaQuery({ query:'(max-width: 1024px)'})
    const { setTexture } = useMacbookStore();
    // we are going to preload all feature videos during component mount so that we can automate them automatically later 
    useEffect(() => {
        featureSequence.forEach((feature) => {
            const v = document.createElement('video');

            Object.assign(v,{
                src: feature.videoPath,
                muted:true,
                playsInLine : true,
                preload: 'auto',
                crossOrigin: 'anonymous'
            })
            v.load();
        })
    }, [])

    useGSAP(() => {
        //for the 3d model rotation wala animation
        const modelTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger : '#f-canvas',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                pin: true,
            }
        })
    },[]);
    return(
        <group ref={groupRef}>
            <Suspense fallback ={<Html> <h1 className="text-white text-3xl uppercase">Loading...</h1></Html>} >
            <MacbookModel scale ={isMobile ? 0.05 : 0.1  } position ={[0, -1, 0]} />
            </Suspense>
        </group>
    )
}

const Features = () => {
return (
    <section id="features">
        <h2>See it all in a new light.</h2>

        <Canvas id="f-canvas" camera ={{}}>
        <Studiolights />
        <ambientLight intensity={0.5} />
        <ModelScroll />
        </Canvas>

        <div className="absolute insert-0">
            {features.map((feature,index) =>
            <div className={clsx('box', 'box$(index + 1)', feature.styles)}>
                    {feature.text}
                </div>
                )}

        </div>
    </section>
)
}
export default Features
    