import './Styles/Home.css'
import './Styles/About_Panel.css'

import { Canvas, useFrame } from "@react-three/fiber"
import React from 'react'
import { Model } from './Models/MODEL_Bust'

const WIDTH = 33;
const HEIGHT = 30;

function Hero_About(){
    return(
        <div className='Hero_About Panel'>
            <div className='text'>
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
            
            <Canvas style={{position: 'absolute', height:'inherit', width: 'inherit', borderRadius:'0.5vw'}}orthographic camera={{left : -WIDTH/2, right: WIDTH/2, top: HEIGHT/2, bottom: -HEIGHT/2}}>
                <spotLight angle={Math.PI/2}position={[-5,3,1]} intensity={200} />
                <ambientLight intensity={0.1}/>
                <Model  />
            </Canvas>
        </div>
    )
}

export default Hero_About