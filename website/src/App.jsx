import { Canvas, useThree, useFrame } from "@react-three/fiber"

import React ,{ useEffect, useRef, useState} from 'react'

import './App.css'

const NUM_OF_STARS = 10000;
const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight


function Stars(){
  const array = [];
  for (let i = 0; i < NUM_OF_STARS; i++) {
    array.push( {id: i, position: [(Math.random() * 2 * WIDTH)-WIDTH, (Math.random() * 2 * HEIGHT)-HEIGHT, 0 ] } )

  }

  return(
    array.map(sphere => <Sphere key = {sphere.id} position = {sphere.position}></Sphere>)
  )
}

const Sphere = (props) => {
 
 
  return(
    <mesh position={props.position}>
      <sphereGeometry args={[2, 5,5]} />
      <meshStandardMaterial  color={"white"}/>
    </mesh>
  )
}

function SpotLight(){
  const my_light = useRef()

  useFrame((state, delta) =>{
    my_light.current.position.x = WIDTH*state.pointer.x
    my_light.current.position.y = HEIGHT*state.pointer.y
    console.log(state.pointer.x)
  })

  return(
    <pointLight decay={1.5} intensity = {1000} position = {[0,0,1]} ref = {my_light}/>

  )
}


function App() {
  return (
    <Canvas orthographic camera={{left : -WIDTH, right: WIDTH, top: HEIGHT, bottom: -HEIGHT}}>
    
      
      <ambientLight intensity={0.05}/>
      <Stars />

      <SpotLight />
    </Canvas>
  )
}

export default App
