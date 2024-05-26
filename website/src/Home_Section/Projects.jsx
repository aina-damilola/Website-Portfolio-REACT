import './Styles/Home.css'
import './Styles/Projects.css'

import { Canvas } from '@react-three/fiber';
import { Model } from './Models/MODEL_Earth';
import { useHelper } from '@react-three/drei';
import { SpotLightHelper } from 'three';
import React, { useRef } from 'react'

const WIDTH = 2;
const HEIGHT = 1;

function Earth(){
    const spotlighthelper = useRef()

    useHelper(spotlighthelper, SpotLightHelper, 'white')
    return(
        <>
            <spotLight intensity={10} position={[0,0,6]} ref={spotlighthelper}/>
            
        </>
    )
}

function Projects(){
    return(
        <a href='/projects' style={{textDecoration:'none'}}>
        <div className='Projects Panel'>
             <div className='text'>
                <p>
                    PROJECTS
                </p>
                <h1 style={{zIndex: 2}}>
                    Current works
                </h1>
                <p style={{zIndex: 2, fontSize:'1.25vw'}}>
                    C++ | JavaScript | Python | SOLIDWORKS ... and more!
                </p>
            </div>
            
            <Canvas style={{position: 'absolute', height:'inherit', width: 'inherit', borderRadius:'0.5vw'}} orthographic camera={{left : -WIDTH/2, right: WIDTH/2, top: HEIGHT/2, bottom: -HEIGHT/2}}>
                <ambientLight intensity={0.1}/>
                <Model />
                <spotLight intensity={10} position={[0,0,6]} />
            </Canvas>
        </div>
        </a>
    )
}

export default Projects