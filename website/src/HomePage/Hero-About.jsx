import './Styles/Home.css'
import './Styles/About_Panel.css'

import { Canvas, useFrame } from "@react-three/fiber"
import React, { useRef } from 'react'
import { useHelper } from '@react-three/drei'
import { Model } from './MODEL_Bust'
import { SpotLightHelper } from 'three';

const WIDTH = 33;
const HEIGHT = 30;

function Tempr(){
    const spotlightref = useRef()
    

    return(
        <>
            <spotLight angle={Math.PI/2}position={[-5,3,1]} intensity={75} ref={spotlightref}/>
            <ambientLight intensity={0.1}/>
            <Model  />
        </>
    )
}

function Hero_About(){
    return(
        <div className='Hero_About Panel' style={{color: 'white'}}>
            <div className='text' style={{zIndex:2}}>
                <p>
                    ABOUT
                </p>
                <h1>
                    Hi, My Name is <span style={{color:"#ffe4c4"}}>Dami</span> Aina.
                </h1>
                <p className='descrip'>
                    Software Developer | Front-End Developer | Robotics Enthusiast
                </p>
            </div>
            
            <Canvas style={{position: 'absolute', height:'100%', color:'red', height:'inherit', width: 'inherit', zIndex:1}}orthographic camera={{left : -WIDTH/2, right: WIDTH/2, top: HEIGHT/2, bottom: -HEIGHT/2}}>
                <Tempr/>
            </Canvas>
        </div>
    )
}



export default Hero_About