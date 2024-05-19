import './About.css'
import { Model } from '../Scene'
import { OrbitControls, useHelper } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'


let WIDTH = window.innerWidth/150
let HEIGHT = window.innerHeight/150





function About(){
    const spotlightref = useRef()
    const spotlightref2 = useRef()
    const spotlightref3 = useRef()
    const spotlightref4 = useRef()

    /*
    useHelper(spotlightref, SpotLightHelper, 0.5, "white")
    useHelper(spotlightref2, SpotLightHelper, 0.5, "white")
    useHelper(spotlightref3, SpotLightHelper, 0.5, "white")
    useHelper(spotlightref4, SpotLightHelper, 0.5, "white")

    */
    
    return(
        <>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.1} />
            <Model />
            <spotLight angle={Math.PI/2}position={[0,0,5]} intensity={5} ref={spotlightref}/>
            <spotLight angle={Math.PI/2}position={[-5,1,3]} intensity={5} ref={spotlightref2}/>
            <spotLight angle={Math.PI/2}position={[5,1,3]} intensity={5} ref={spotlightref3}/>
            <spotLight angle={Math.PI/2}position={[0,6,0]} intensity={20} ref={spotlightref4}/>
            {/* <color attach="background" args={["#0f0f0f00"]} /> */}
        </>
                
        
    )
}

function About2(){
    return(
        <div className='about_container'>
            <Canvas orthographic camera={{left : -WIDTH, right: WIDTH, top: HEIGHT, bottom: -HEIGHT}}>
                <About/>
           
            </Canvas>
           
        </div>
    )
}

export default About2