import './Styles/Home.css'
import './Styles/Highlight.css'

import { Canvas, useFrame } from "@react-three/fiber"
import React, { useRef } from 'react'

const WIDTH = 6;
const HEIGHT = 6;

function Spinning_Sphere(){
    const sphereref = useRef()

    useFrame((state, delta) =>{
        sphereref.current.rotation.z += delta/8
        sphereref.current.rotation.x += delta/8
        sphereref.current.rotation.y += delta/8
    })

    return(
        <group position={[2,-2,0]}>
            <mesh ref={sphereref}>
                <sphereGeometry args={[2.5, 14, 10]}/>
                <meshStandardMaterial wireframe color="white"/>
            </mesh>
        </group>
    )
}

function Highlight(){
    

    return(
        <div className='Highlight Panel'>
            <div className='text'>
                <p>
                    HIGHLIGHT
                </p>
                <h1>
                    Visit my other site!
                </h1>
                
                <svg viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="icomoon-ignore"/>
                    <path d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z" fill="#8B8A94"/>
                    <path d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z" fill="#8B8A94"/>
                </svg>
            </div>
            <Canvas style={{position:'absolute', width:'inherit', height: 'inherit', zIndex:1}} orthographic camera={{left : -WIDTH/2, right: WIDTH/2, top: HEIGHT/2, bottom: -HEIGHT/2}}>
                <ambientLight intensity={0.5}/>
                <Spinning_Sphere />
                
            </Canvas>
        </div>
    )
}

export default Highlight