import './Styles/Home.css'
import './Styles/About_Panel.css'

import { Canvas } from "@react-three/fiber"
import React from 'react'

import { Model } from './MODEL_Bust'

function Hero_About(){
    return(
        <div className='Hero_About Panel' style={{color: 'white'}}>
            <div className='text'>
                <p>
                    ABOUT
                </p>
                <h1>
                    Hi, My Name is <span style={{color:"#ffe4c4"}}>Dami</span>.
                </h1>
                <p className='descrip'>
                    Software Developer | Front-End Developer | Robotics Enthusiast
                </p>
            </div>
            
            <Canvas>
                <ambientLight intensity={1}/>
                <Model />
            </Canvas>
        </div>
    )
}

export default Hero_About