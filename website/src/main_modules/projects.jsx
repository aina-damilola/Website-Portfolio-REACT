import "./styles/projects.css"

import { Option } from "../Helper modules/projects_option"

import { useState } from "react"


export function Projects(){

    const [currentImage, setCurrentImage] = useState('./project_images/image_noise.png')

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
                    <h2>PROJECTS</h2> <h2 id="projects_num"></h2>
                </div>
                <div id="scroll_box">
                    <Option id = '1' name = 'space dog' dest = "/projects/Space-Dog" type = 'Robotics' stack = 'Arduino | C++ | Circuit Design' onHover={handleMouseEnter} image = './project_images/Space_dog.jpg'/>

                    <Option id = '2' name = 'brain tumor detector' dest = "/projects/brain_tumor_detector" type = 'Machine Learning' stack = 'Python | PyTorch | Google Colab' onHover={handleMouseEnter} image = './project_images/brain_tumour.jpg'/>

                    {/* <Option id = '3' name  = 'prototype SHADOW' dest = "/projects/prototype_SHADOW" type = 'Other' stack = 'SOLIDWORKS | ANSYS | Hands-On Development' onHover={handleMouseEnter} image = './project_images/UTSM_car.png'/> */}

                    <Option id = '4' name  = 'minecraft calculator' dest = "/projects/minecraft_calculator" type = 'Other' stack = 'Circuit Design | Minecraft Redstone' onHover={handleMouseEnter} image = './project_images/minecraft_project.png'/>

                    <Option id = '5' name  = 'mobile map' dest = "/projects/mobile_map" type = 'Software Development' stack = 'C++ | API Integration | EZGL' onHover={handleMouseEnter} image = './project_images/map_project_1.png'/>

                    <Option id = '6' name  = 'desktop OS' dest = "/projects/desktop_OS" type = 'Software Development' stack = 'C Language | De1-SoC FPGA Board | NIOS II Assembly' onHover={handleMouseEnter} image = './project_images/desktop_project.png'/>

                    {/* <Option id = '7' name  = 'SIMON: piano edition' dest = "/projects/SIMON_piano_edition" type = 'Software Development' stack = 'Verilog HDL | De1-SoC FPGA Board ' onHover={handleMouseEnter} image = './project_images/de1soc_board.jpg'/> */}

                    {/* <Option id = '8' name  = 'world-le' dest = "/projects/world_le" type = 'Software Development' stack = 'Python | TKinter' onHover={handleMouseEnter} image = './project_images/wordle_UI.jpeg'/> */}
                    
                    {/*<Option id = '9' name  = 'APS112' type = '' stack = '' onHover={handleMouseEnter} image = ''/> */}

                </div>
            </div>
        </div>
    )
}