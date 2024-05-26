import Sphere from "./Sphere"

const NUM_OF_STARS = 2500;

function getRandomDir(num) {
    return Math.floor(Math.random() * num); // This gives a 0, 1 or 2
}

function Cluster(){
    const array = [];
    for (let i = 0; i < NUM_OF_STARS; i++) {
      array.push( {id: i, position: [(Math.random()  * window.innerWidth)-(window.innerWidth/2), (Math.random() * window.innerHeight)-(window.innerHeight/2), 0 ], direction: [getRandomDir(3)-1, getRandomDir(3)-1]} )
    }
  
    return(
      array.map(sphere => <Sphere key = {sphere.id} position = {sphere.position} direction = {sphere.direction}></Sphere>)
    )
}

export default Cluster