import './styles/home.css'

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import { Other_panel } from '../Helper modules/other'

export function Home(){
    return(
        <>
            <div id="Hero">
                 <img src="../public/misc_images/sea_oasis.jpg"/>

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
                    "achieving life through dedication and commitment"
                </p>
                <Link className='button' to="/about">LEARN MORE</Link>
            </div>
            <div id='projects_highlight'>
                <h1>
                    my project highlights
                </h1>
                <div id='projects_panel'>
                    <Other_panel width = '23vw' height = '30vw' src = '../public/project_images/Space_dog.jpg' bg = 'white' name = 'Space Dog' descrip = 'lorem ipsum' date = '00.00.00' dest = '/projects/space-dog'/>
                    <div id='projects_panel_a'>
                        <Other_panel width = '30vw' height = '17vw' src = '../public/project_images/map_project_1.png' bg = 'white' name = 'Mapping Software' descrip = 'lorem ipsum' date = '30.04.24' dest = '/'/>
                        <Other_panel width = '27vw' height = '20vw' src = '../public/project_images/desktop_project.png' bg = 'white' name = 'Desktop Operating System' descrip = 'lorem ipsum' date = '09.05.24' dest = '/'/>
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
                    <Other_panel id='panel_o_a' src='../public/project_images/minecraft_project.png'  
                    descrip = '"...Extensive Minecraft Engineering Knowledge and Understanding of Computer Architecture to Create a Minecraft Calculator..."' 
                    date = '24.04.23' bg = '#f0f0f0' name = 'Minecraft Calculator' dest =''
                    width = '380px' height = '310px'/>
                    
                </div>
                
            </div>
        </>
    )
}

