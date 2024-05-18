import { Canvas , useFrame } from "@react-three/fiber"

import React ,{ useRef } from 'react'

import './App.css'

const NUM_OF_STARS = 2000;
const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

function getRandomDir(num) {
  return Math.floor(Math.random() * num); // This gives a 0, 1 or 2
}

function Stars(){
  const array = [];
  for (let i = 0; i < NUM_OF_STARS; i++) {
    array.push( {id: i, position: [(Math.random() * 2 * WIDTH)-WIDTH, (Math.random() * 2 * HEIGHT)-HEIGHT, 0 ], direction: [getRandomDir(3)-1, getRandomDir(3)-1]} )
  }

  return(
    array.map(sphere => <Sphere key = {sphere.id} position = {sphere.position} direction = {sphere.direction}></Sphere>)
  )
}

const Sphere = (props) => {
  const curr_sphere = useRef()
  
  useFrame((state,delta) =>{
    if(Math.abs(curr_sphere.current.position.x) >= WIDTH ){
      props.direction[0] = props.direction[0] * -1
    }
    if(Math.abs(curr_sphere.current.position.y) >= HEIGHT ){
      props.direction[1] = props.direction[1] * -1
    }

    curr_sphere.current.position.x += (props.direction[0] * delta * 10)
    curr_sphere.current.position.y += (props.direction[1] * delta * 10)

    if(props.direction[0] == 0 && props.direction[1] == 0){
      props.direction[getRandomDir(2)] = getRandomDir(3)-1
    }
  })

  return(
    <mesh ref={curr_sphere} position={props.position}>
      <sphereGeometry args={[2, 0]} />
      <meshStandardMaterial  color={"white"}/>
    </mesh>
  )
}

function SpotLight(){
  const my_light = useRef()

  useFrame((state, delta) =>{
    my_light.current.position.x = WIDTH*state.pointer.x
    my_light.current.position.y = HEIGHT*state.pointer.y
  })

  return(
    <pointLight decay={1.5} intensity = {1000} position = {[0,0,1]} ref = {my_light}/>
  )
}

function App() {
  return (
    <>
      <Canvas orthographic camera={{left : -WIDTH, right: WIDTH, top: HEIGHT, bottom: -HEIGHT}}>
        <ambientLight intensity={0}/>
        <Stars />
        <SpotLight />
      </Canvas>
    </>
  )
}

export default App
