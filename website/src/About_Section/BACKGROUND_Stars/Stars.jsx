import { Canvas } from "@react-three/fiber"
import './Stars.css'

import PointLight from "./PointLight";
import Cluster from "./Cluster";

function Stars() {
  return (
    <div className="canvas-container">
      <Canvas orthographic
      camera={{left : -window.innerWidth/2, right: window.innerWidth/2, top: window.innerHeight/2, bottom: -window.innerHeight/2}}>

        <ambientLight intensity={0}/>
        <Cluster />
        <PointLight />
        <color attach="background" args={["#000000"]} />
        
      </Canvas>
    </div>
  )
}

export default Stars
