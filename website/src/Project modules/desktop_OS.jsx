import { Page } from "./template/page"

import "./template/template.css"

export function Desktop_OS(){
    return(
        <Page img_link = "../project_images/desktop_project.png" img_height = '33.75vw' img_width = '45vw' name = "Operating System" short = "Desktop Operating System with file managing & text editorsystem"

        descrip = {<div>
            The custom Desktop OS project involved developing a functional operating system from the ground up, interfacing with hardware using C and Assembly languages on a DE1-SoC FPGA board. The project focused on creating a basic, yet functional, operating system that can manage essential peripherals such as a mouse, keyboard, and a VGA display through hardware interrupts.
            <br/><br/>
            The operating system includes a fully functioning file management system, where users can navigate directories, create, delete, and manage files. This project showcases deep technical knowledge of low-level hardware interfacing and interrupt handling to ensure smooth communication between the hardware components and the software.
        </div>} 
        
        skills = {<>
        <img className="icons" src="../skills_logos/Assembly.svg"/>
        <img className="icons" src="../skills_logos/C.svg"/>
        <img className="icons" src="../skills_logos/VSCode.svg"/>
        </>}
        
        usage = {<div>Once powered on, the Desktop OS boots up and presents the user with a graphical interface on the VGA display. The user can interact with the system using a connected mouse and keyboard, both of which are managed through hardware interrupts for real-time input handling. The mouse allows for navigation of the interface, while the keyboard serves as a second input for navigation using the arrow, enter, backspace and escape keys.
        <br/><br/>
        The OS features a file manager system that lets the user navigate directories, create new files or folders, and delete or manage existing ones. The interface is simple yet functional, making it easy for the user to perform basic file operations.
        <br/><br/>
        While the system is primarily a proof of concept, it effectively demonstrates the essential components of a fully functional operating system.</div>}
        
        vid = {<source src="../project_videos/Desktop_OS.mp4" type="video/mp4" />}
        
        youtube = {<a target="_blank" href="https://youtu.be/EIrYfBDZ7i8"><img src="../misc_images/youtube-button.svg"/></a>}

        github = {<a target="_blank" href="https://github.com/aina-damilola/Mock-Desktop-in-De1-SoC-Board"><img src="../misc_images/github-button.svg"/></a>}
        
        extra = {<div>The custom desktop OS was built using a combination of C and Assembly language to interface with hardware on the DE1-SoC FPGA board. C handled higher-level logic, while Assembly enabled direct control of the board’s peripherals, including the mouse, keyboard, and VGA display. Hardware interrupts were crucial in ensuring real-time responsiveness, allowing immediate input from the mouse and keyboard without lag. The VGA display provided graphical output, allowing the OS to have a user interface that was clear and functional, showcasing the system's file manager and other operations.</div>}
        />
    )
}