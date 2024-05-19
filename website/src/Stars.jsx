import { Canvas , useFrame } from "@react-three/fiber"
import React ,{ useRef } from 'react'
import './Stars.css'

const NUM_OF_STARS = 2500;
let WIDTH = window.innerWidth
let HEIGHT = window.innerHeight

let mouse_x = 0;
let mouse_y = 0;

function update_light(event){
  mouse_x = event.clientX;
  mouse_y = event.clientY;
}

window.addEventListener("mousemove", update_light);

function getRandomDir(num) {
  return Math.floor(Math.random() * num); // This gives a 0, 1 or 2
}

function Cluster(){
  const array = [];
  for (let i = 0; i < NUM_OF_STARS; i++) {
    array.push( {id: i, position: [(Math.random()  * WIDTH)-(WIDTH/2), (Math.random() * HEIGHT)-(HEIGHT/2), 0 ], direction: [getRandomDir(3)-1, getRandomDir(3)-1]} )
  }

  return(
    array.map(sphere => <Sphere key = {sphere.id} position = {sphere.position} direction = {sphere.direction}></Sphere>)
  )
}

const Sphere = (props) => {
  const curr_sphere = useRef()
  
  useFrame((state,delta) =>{
    if(Math.abs(curr_sphere.current.position.x) >= WIDTH/2 ){
      props.direction[0] = props.direction[0] * -1
    }
    if(Math.abs(curr_sphere.current.position.y) >= HEIGHT/2 ){
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
      <sphereGeometry args={[3, 0]} />
      <meshStandardMaterial  color={"white"}/>
    </mesh>
  )
}

function PointLight(){
  const my_light = useRef()

  useFrame((state, delta) =>{
   
    my_light.current.position.x = mouse_x - WIDTH/2 //+ window.scrollX
    my_light.current.position.y = -(mouse_y - HEIGHT/2) //- window.scrollY
  })

  return(
    <pointLight decay={1} intensity = {25} position = {[0,0,1]} ref = {my_light}/>
  )
}

function Stars() {
  return (
    <div className="canvas-container">
      <Canvas orthographic camera={{left : -WIDTH/2, right: WIDTH/2, top: HEIGHT/2, bottom: -HEIGHT/2}}>
        <ambientLight intensity={0.05}/>
        <Cluster />
        <PointLight />
        <color attach="background" args={["#0f0f0f"]} />
        
      </Canvas>
    </div>
  )
}

export default Stars
