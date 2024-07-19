import './styles/home.css'

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import { Other_panel } from './other'

export function Home(){
    return(
        <>
            <div id="Hero">
                 <img src="../public/sea_oasis.jpg"/>

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
                    <div id='panel_a' className='panel'>

                    </div>
                    <div id='projects_panel_a'>
                        <div id='panel_b' className='panel'>

                        </div>
                        <div id='panel_c' className='panel'>

                        </div>
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
                    <Other_panel id='panel_o_a'src='../public/calculator-minimalistic-svgrepo-com.svg' width='150px' height = '150px' name = 'calculator'
                    descrip = 'Lorem ipsum, dolor sitque voluptatibus aut hic architecto corrupti, dignissimos ut debitis distinctio placeat dicta, impedit consequatur dolore amet odit. Illo, quis odit!' 
                    date = '24.04.23'/>
                    <Other_panel id='panel_o_a'src='../public/calculator-minimalistic-svgrepo-com.svg' width='150px' height = '150px' name = 'calculator'
                    descrip = 'Lorem ipsum, dolor sit amet cous aut hic architecto corrupti, dignissimos ut debitis distinctio placeat dicta, impedit consequatur dolore amet odit. Illo, quis odit!' 
                    date = '24.04.23'/>
                    <Other_panel id='panel_o_a'src='../public/calculator-minimalistic-svgrepo-com.svg' width='150px' height = '150px' name = 'calculator'
                    descrip = 'Lorem ipsum, dolor    dignissimos ut debitis distinctio placeat dicta, impedit consequatur dolore amet odit. Illo, quis odit!' 
                    date = '24.04.23'/>
                    <Other_panel id='panel_o_a'src='../public/calculator-minimalistic-svgrepo-com.svg' width='150px' height = '150px' name = 'calculator'
                    descrip = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque iste atque voluptatibus aut hic architecto corrupti, dignissimos ut debitis distinctio placeat dicta, impedit consequatur dolore amet odit. Illo, quis odit!' 
                    date = '24.04.23'/>
             
                </div>
                
            </div>
        </>
    )
}

