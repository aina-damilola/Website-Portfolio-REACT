import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

let mouse_x = 0;
let mouse_y = 0;

function update_light(event){
  mouse_x = event.clientX;
  mouse_y = event.clientY;
}

window.addEventListener("mousemove", update_light);

function PointLight(){
    const my_light = useRef()
  
    useFrame((state, delta) =>{
     
      my_light.current.position.x = mouse_x - window.innerWidth/2 //+ window.scrollX {Uncomment if scrolling enabled in x direction}
      my_light.current.position.y = -(mouse_y - window.innerHeight/2) //- window.scrollY {Uncomment if scrolling enabled in y direction}
    })
  
    return(
      <pointLight decay={1} intensity = {25} position = {[0,0,1]} ref = {my_light}/>
    )
}

export default PointLight