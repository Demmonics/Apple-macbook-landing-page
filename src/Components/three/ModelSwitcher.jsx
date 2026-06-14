// this will detect the size 14 and 16 and animate the models using gsap and also has presentation controls which will alllow the user to control and inspect the macbook in 3d
import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import MacbookModel from "../models/Macbook";
import MacbookModel16 from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";
const ModelSwitcher = ({scale, isMobile }) => {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();// these two r from react
    const showLargeMacbook = scale === 0.08 || scale === 0.05 ;
    return(
        <>
        <PresentationControls>
            <group ref={largeMacbookRef}>
                <MacbookModel16 scale = {isMobile ? 0.05: 0.08} />
            </group>
        </PresentationControls>
        <PresentationControls>
            <group ref={smallMacbookRef}>
                <MacbookModel14 scale = {isMobile ? 0.03: 0.06} />
            </group>
        </PresentationControls>
        </>
        
    )
}
export default ModelSwitcher;
// <> this indicates a react fragment 