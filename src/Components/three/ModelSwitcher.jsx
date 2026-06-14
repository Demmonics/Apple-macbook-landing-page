// this will detect the size 14 and 16 and animate the models using gsap and also has presentation controls which will alllow the user to control and inspect the macbook in 3d
import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import MacbookModel from "../models/Macbook";
import MacbookModel16 from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";
import gsap from "gsap";

const ANIMATION_DURATION =1;
const OFFSET_DISTANCE=5;// this is how far one model will move off screen when its hidden

const fadeMeshes =(group,opacity) => {
    if(!group) return;

    group.traverse((child)) => {
        if(child.isMesh) {
            child.material.transparent = true; // we set the material to transparent at the start then we slowly animate it to make it come to life
            gsap.to(child.material, {opacity,duration:ANIMATION_DURATION})
        }
    }
}

const ModelSwitcher = ({scale, isMobile }) => {

    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();// these two r from react

    const showLargeMacbook = scale === 0.08 || scale === 0.05 ;

    const controlsConfig ={
        snap: true,
        speed:1,
        zoom:1,
        polar: [-Math.PI,Math.PI],
        azimuth: [-Infinity,Infinity]
        config = {mass:1 , tension:0 ,friction:26}
    }

    return(
        <>
        <PresentationControls { ...controlsConfig}>
            <group ref={largeMacbookRef}>
                <MacbookModel16 scale = {isMobile ? 0.05: 0.08} />
            </group>
        </PresentationControls>
        <PresentationControls { ...controlsConfig}>
            <group ref={smallMacbookRef}>
                <MacbookModel14 scale = {isMobile ? 0.03: 0.06} />
            </group>
        </PresentationControls>
        </>
        
    )
}
export default ModelSwitcher;
// <> this indicates a react fragment
//polar: [-Math.PI,Math.PI] This adds rotation limits which helps us see below of the macbook when the user rotates the macbook
//azimuith is the horizontal scroll which helps us set a restriction or remove restrictions from our scroll
//config adds realistic phsyics with mass tension and friction it tries to imitate it best