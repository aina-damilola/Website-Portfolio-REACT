import './styles/home.css'

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import { Other_panel } from '../Helper modules/other'

export function Home(){
    return(
        <>
            <div id="Hero">
                 <img src="./misc_images/sea_oasis.jpg"/>

                <div id='text'>
                    <h1>
                        damilola aina
                    </h1>
                    <h2>
                        SOFTWARE ENGINEER & FRONT-END DEVELOPER
                    </h2>
                </div>
            </div>
            <div id='bottom_text'>
                <p>
                    "anything worth doing is worth doing well"
                </p>
                <Link className='button' to="/about">LEARN MORE</Link>
            </div>
            <div id='projects_highlight'>
                <h1>
                    my project highlights
                </h1>
                <div id='projects_panel'>
                    <Other_panel width = '23vw' height = '30vw' src = './project_images/Space_dog.jpg' bg = 'white' name = 'Space Dog' descrip = 'Robot Prototype for Space exploration' skills = 'Arduino | C++ | Circuit Design | SOLIDWORKS' dest = '/projects/Space-Dog'/>
                    <div id='projects_panel_a'>
                        <Other_panel width = '30vw' height = '17vw' src = './project_images/map_project_1.png' bg = 'white' name = 'Mapping Software' descrip = 'Mobile Map with live routing and pathfinding' skills = 'C++ | EZGL' dest = '/projects/mobile_map'/>
                        <Other_panel width = '27vw' height = '20vw' src = './project_images/desktop_project.png' bg = 'white' name = 'Desktop Operating System' descrip = 'Operating Sytem with text editor and file manager' skills = 'C Language | NIOS II Assembly Language' dest = '/projects/desktop_OS'/>
                    </div>
                </div>
                <Link className='button' to="/projects">SEE MORE</Link>
            </div>
            <div id='contact_highlight'>
                <h1>
                    let's get in touch!
                </h1>
                <Link className='button' to="/contacts">SEE MORE</Link>
            </div>
            <div id='other_highlights'>
                <h1>
                    other interests
                </h1>
                <div id='other_panel_collection'>
                    <Other_panel id='panel_o_a' src='./project_images/minecraft_project.png'  
                    descrip = 'Simple Calculator created in Minecraft' 
                    skills = 'Minecraft | Circuit Design' bg = '#f0f0f0' name = 'Minecraft Calculator' dest ='/projects/minecraft_calculator'
                    width = '380px' height = '310px'/>
                </div>
                
            </div>
        </>
    )
}

