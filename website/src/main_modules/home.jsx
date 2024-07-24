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
                        <div className='panel-cons'>
                            <img src='../public/pngtree-map-icon.png' />
                            <h2>Mapping Software</h2>
                            <p>30.04.24</p>
                        </div>
                    </div>
                    <div id='projects_panel_a'>
                        <div id='panel_b' className='panel'>
                            <div className='panel-cons'>

                            </div>
                        </div>
                        <div id='panel_c' className='panel'>
                            <div className='panel-cons'>
                            
                                <img src='../public/computer-icon.png'/>
                                <div id='panel_c_i'>
                                    <h2>Desktop Operating System</h2>
                                    <p>09.05.24</p>
                                </div>
                            </div>
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
                    <Other_panel id='panel_o_a' src='../public/pngtree-calculator.png'  
                    descrip = '"...Extensive Minecraft Engineering Knowledge and Understanding of Computer Architecture to Create a Minecraft Calculator..."' 
                    date = '24.04.23' bg = '#f0f0f0' name = 'MINECRAFT CALCULATOR' dest =''/>
                    
                </div>
                
            </div>
        </>
    )
}

