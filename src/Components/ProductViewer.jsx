import useMacbookStore from "../store"
import clsx from 'clsx'
import { Canvas } from "@react-three/fiber";
import {Box, OrbitControls} from "@react-three/drei"
import React, { Suspense } from 'react';
import MacbookModel14 from "./models/Macbook-14";
import Studiolight from "./three/StudioLights.jsx";
import ModelSwitcher from './three/ModelSwitcher.jsx'
import { useMediaQuery } from "react-responsive";


const ProductViewer = () => {
    const {color, scale, setColor, setScale} = useMacbookStore(); // we are using the useMacbookStore hook to get the color, scale, setColor and setScale from our store, we are using destructuring to get these values from the store zustand made it very easy to do this 
    //managing it in a global state
    
    const isMobile = useMediaQuery({query: '(max-width:1024px)'})

    return (
    <section id="product-viewer">
        <h2>Take a closer look</h2>

        <div className="controls">
            <p className="info">MacbookPro 16" in {color}</p>

            <div className="flex-center gap-5 mt-5">
    
                <div className="color-control">
                    <div
                    onClick={()=> setColor('#adb5bd')}
                    className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}
                    />
                    <div
                    onClick= {() => setColor('#2e2c2e')}
                    className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}
                    />
                </div>

                <div className="size-control">
                    <div
                    onClick= {() => setScale(0.06)}
                    className={clsx(scale === 0.06 ? 'bg-white text-black': 'bg-transparent text-white')}
                    >
                        <p>14"</p>
                        </div>
                    <div
                    onClick= {() => setScale(0.08)}
                    className={clsx(scale === 0.08 ? 'bg-white text-black': 'bg-transparent text-white')}
                    >
                    <p>16"</p>
                    </div>

                </div>
            </div>
        </div>

        <Canvas id="canvas" camera = {{ position : [0,2,5], fov:50, near: 0.1, far:100 }}>
            <ambientLight intensity={1} />
            <Studiolight />
            <MacbookModel14 scale ={0.06} position={[0,0,0]} />
        <ModelSwitcher scale={isMobile ? scale - 0.03 : scale}  isMobile={isMobile}/>
        
        </Canvas>

    </section>
)
}
export default ProductViewer
//three js componenets cannot be a dev they either have to be a mesh or a group cause they r always renedred in a canvas rather than anywhere else
//fool scale to make it look better on mobile devices 