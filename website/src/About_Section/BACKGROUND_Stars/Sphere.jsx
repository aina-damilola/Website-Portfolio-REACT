import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

function getRandomDir(num) {
    return Math.floor(Math.random() * num); // This gives a 0, 1 or 2
}

const Sphere = (props) => {
    const curr_sphere = useRef()
    
    useFrame((state,delta) =>{
      if(Math.abs(curr_sphere.current.position.x) >= window.innerWidth/2 ){
        props.direction[0] = props.direction[0] * -1
      }
      if(Math.abs(curr_sphere.current.position.y) >= window.innerHeight/2 ){
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

export default Sphere