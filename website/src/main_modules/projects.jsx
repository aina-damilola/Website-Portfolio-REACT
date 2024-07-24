import "./styles/projects.css"

import { Option } from "./projects_option"

import { useState } from "react"

export function Projects(){

    const [currentImage, setCurrentImage] = useState('')

    const handleMouseEnter = (image) => {
        setCurrentImage(image)
    }

    return(
        <div id="projects">
            <div id="preview">
                <div id="image"
                    style={{backgroundImage: `url(${currentImage})`}}>

                </div>
            </div>
            <div id="catalogue">
                <div id="projects_header">
                    <h2>PROJECTS</h2> <h2 id="projects_num">10</h2>
                </div>
                <div id="scroll_box">
                    <Option id = '1' name = 'space dog' type = 'Robotics' stack = 'Arduino | C++ | Circuit Design' onHover={handleMouseEnter} image = '../public/computer-icon.png'/>

                    <Option id = '2' name = 'brain tumor detector' type = 'Machine Learning' stack = 'Python | PyTorch | Google Colab' onHover={handleMouseEnter} image = ''/>

                    <Option id = '3' name  = 'prototype SHADOW' type = 'Other' stack = 'SOLIDWORKS | ANSYS | Hands-On Development' onHover={handleMouseEnter} image = ''/>

                    <Option id = '4' name  = 'minecraft calculator' type = 'Other' stack = 'Circuit Design | Minecraft Redstone' onHover={handleMouseEnter} image = ''/>

                    <Option id = '5' name  = 'mobile map' type = 'Software Development' stack = 'C++ | API Integration | EZGL' onHover={handleMouseEnter} image = ''/>

                    <Option id = '6' name  = 'desktop OS' type = 'Software Development' stack = 'C Language | De1-SoC FPGA Board | NIOS II Assembly' onHover={handleMouseEnter} image = ''/>

                    <Option id = '7' name  = 'SIMON: piano edition' type = 'Software Development' stack = 'Verilog HDL | De1-SoC FPGA Board ' onHover={handleMouseEnter} image = ''/>

                    <Option id = '8' name  = 'world-le' type = 'Software Development' stack = 'Python | TKinter' onHover={handleMouseEnter} image = ''/>

                    <Option id = '9' name  = 'APS111' type = '' stack = '' onHover={handleMouseEnter} image = ''/>
                    
                    <Option id = '10' name  = 'APS112' type = '' stack = '' onHover={handleMouseEnter} image = ''/>

                </div>
            </div>
        </div>
    )
}