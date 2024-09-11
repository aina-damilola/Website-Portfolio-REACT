import { Page } from "./template/page"

import "./template/template.css"

export function Minecraft_calculator(){
    return(
        <Page img_link = "../project_images/minecraft_project.png" img_width = '45vw' name = "Minecraft Calculator" short = "Logic gates and redstone creating a calculator"

        descrip = {<div>The goal of this project was to create a functional calculator in Minecraft using logic gates and redstone circuits. By leveraging the basic principles of binary logic and circuitry, the calculator is able to perform simple arithmetic operations such as addition and subtraction. This project showcases how fundamental computing concepts can be visualized within a game environment.
        <br/><br/>
        The main challenges included designing compact and efficient logic gates, minimizing the latency between operations, and ensuring the accuracy of the calculations. The final product consists of multiple interconnected modules, each handling a different aspect of the calculator's operation, such as input processing, arithmetic logic (mainly ripple carry adders and a binary to binary coded decimal converter), and result display.
        </div>}
        skills = {<>
        <img className="icons" src="../skills_logos/CircuitDesign.svg"/>
        </>}
        
        usage = {<div>To use the calculator, players first power it on by clicking a designated button. The calculator is designed with memory capabilities, meaning it will remember any inputted numbers even if the power is turned off and back on again.
        <br/><br/>
        The input process is intuitive: the calculator allows you to select the first digit of your number using a set of labeled buttons. After the first digit is selected, the calculator automatically switches to the next digit, prompting you to select the second digit. Once both digits have been input, you can choose an operation (either addition or subtraction) by pressing a corresponding button.
        <br/><br/>    
        If you want to reset your input or clear the current result, there is a clear button that resets all selections and outputs, allowing you to start fresh. The memory capability ensures that if you accidentally power off the system, all your previous inputs will remain intact until the clear button is pressed. The calculator's design is user-friendly, with clear visual feedback using redstone lamps to display the current input status and results, making it easy to track what step you’re on in the calculation process.</div>}
        
        vid = {<source src="../.mp4" type="video/mp4" />}
        
        youtube = {<a target="_blank" href=""><img src="../misc_images/youtube-button.svg"/></a>}

        github = {<a target="_blank" href=""><img src="../misc_images/github-button.svg"/></a>}
        
        extra = {<div>Each input is converted into binary through a series of redstone circuits, which then feed into the logic gates responsible for performing the actual calculations. The results are displayed using a simple redstone-powered visual interface, making the operation of the calculator easy to follow and understand.
        </div>}
        />
    )
} 