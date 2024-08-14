import "./styles/projects.css"

import { Option } from "./projects_option"

import { useState } from "react"


export function Projects(){

    const [currentImage, setCurrentImage] = useState('../public/image_noise.png')

    const handleMouseEnter = (image) => {
        setCurrentImage(image)
    }

    return(
        <div id="projects">
            <div id="preview">
                <div id="image" style={{backgroundImage:`url(${currentImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                </div>
            </div>
            <div id="catalogue">
                <div id="projects_header">
                    <h2>PROJECTS</h2> <h2 id="projects_num">10</h2>
                </div>
                <div id="scroll_box">
                    <Option id = '1' name = 'space dog' type = 'Robotics' stack = 'Arduino | C++ | Circuit Design' onHover={handleMouseEnter} image = '../public/Space_dog.jpg'/>

                    <Option id = '2' name = 'brain tumor detector' type = 'Machine Learning' stack = 'Python | PyTorch | Google Colab' onHover={handleMouseEnter} image = '../public/brain_tumour.jpg'/>

                    <Option id = '3' name  = 'prototype SHADOW' type = 'Other' stack = 'SOLIDWORKS | ANSYS | Hands-On Development' onHover={handleMouseEnter} image = '../public/UTSM_car.png'/>

                    <Option id = '4' name  = 'minecraft calculator' type = 'Other' stack = 'Circuit Design | Minecraft Redstone' onHover={handleMouseEnter} image = '../public/minecraft_project.png'/>

                    <Option id = '5' name  = 'mobile map' type = 'Software Development' stack = 'C++ | API Integration | EZGL' onHover={handleMouseEnter} image = '../public/map_project_1.png'/>

                    <Option id = '6' name  = 'desktop OS' type = 'Software Development' stack = 'C Language | De1-SoC FPGA Board | NIOS II Assembly' onHover={handleMouseEnter} image = '../public/desktop_project.png'/>

                    <Option id = '7' name  = 'SIMON: piano edition' type = 'Software Development' stack = 'Verilog HDL | De1-SoC FPGA Board ' onHover={handleMouseEnter} image = '../public/de1soc_board.jpg'/>

                    <Option id = '8' name  = 'world-le' type = 'Software Development' stack = 'Python | TKinter' onHover={handleMouseEnter} image = '../public/wordle_UI.jpeg'/>

                    {/* <Option id = '9' name  = 'APS111' type = '' stack = '' onHover={handleMouseEnter} image = ''/>
                    
                    <Option id = '10' name  = 'APS112' type = '' stack = '' onHover={handleMouseEnter} image = ''/> */}

                </div>
            </div>
        </div>
    )
}