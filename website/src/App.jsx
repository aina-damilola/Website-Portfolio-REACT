import { Canvas, useFrame } from "@react-three/fiber"

import './App.css'

function Cube(props){
  useFrame(state, delta){
    
  }
  return(
    <mesh position={props.position}>
      <boxGeometry args={props.size} />
      <meshStandardMaterial color={props.color}/>
    </mesh>
  )
}

function App() {
  return (
    <Canvas>
      <directionalLight position={[0,0,5]}/>
      <ambientLight intensity={0.7}/>
      <group>
        <Cube position = {[1,-1,1]} size = {[1,1,1]} color= {"yellow"} />
        <Cube position = {[-1,1,1]} size = {[1,1,1]} color= {"red"} />
        <Cube position = {[-1,-1,1]} size = {[1,1,1]} color= {"blue"} />
        <Cube position = {[1,1,1]} size = {[1,1,1]} color= {"green"} />
      </group>
      

    </Canvas>
  )
}

export default App
