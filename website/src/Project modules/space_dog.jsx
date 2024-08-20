import { Page } from "./page"

import "./template.css"

export function Space_dog(){
    return(
        <Page img_link = "../../public/project_images/Space_dog.jpg" img_width = '45vw' 
        name = "Space Dog"
        short = "Robot Prototype for Space exploration"

        descrip = {<div>The primary goal for the project was to design a space rover to overcome difficulties in logistics and delay in operation during space exploration. 
        <br/><br/>The three core aspects are perception, reasoning and actuation. By utilizing a ultrasonic sensor and a pair of photoresistors, our rover is able to prevent obstacle colllision and navigate it towards light. Additionally, our rover implements a PID control loop where the error is the difference in voltage between the two photoresistors, and that allows us to determine which direction to steer in. </div>} 
        skills = {<><img className="icons" src="../../public/skills_logos/Arduino.svg"
        /><img className="icons" src="../../public/skills_logos/CPlusPlus.svg"
        /><img className="icons" src="../../public/skills_logos/VSCode.svg"
        /></>}
        
        usage = {<div>
            On startup, the robot will attempt to lock onto a light source by rotating in circles until a certain
            light threshold is detected by the photoresistors. Following that, our path planning algorithm that
            incorporates the ultrasonic sensor and photoresistors kicks in and allows it to follow said light
            source.</div>}
        
        vid = {<source src="../../public/vid.mp4" type="video/mp4" />}
        
        youtube = {<a><img src="../../public/misc_images/youtube-button.svg"/></a>}

        github = {<a><img src="../../public/misc_images/github-button.svg"/></a>}

        />
    )
}