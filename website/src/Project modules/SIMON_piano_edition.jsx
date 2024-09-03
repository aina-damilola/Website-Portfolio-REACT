import { Page } from "./template/page"

import "./template/template.css"

export function SIMON_piano_edition(){
    return(
        <Page img_link = "" img_width = '' name = "SIMON piano" short = "A 'simon' game created solely through Verilog hardware interfacing"

        descrip = {<div></div>} 
        
        skills = {<>
        <img className="icons" src="../skills_logos/Git.svg"/>
        <img className="icons" src="../skills_logos/VerilogHDL.svg"/>
        <img className="icons" src="../skills_logos/VSCode.svg"/>
        </>}
        
        usage = {<div></div>}
        
        vid = {<source src="../.mp4" type="video/mp4" />}
        
        youtube = {<a target="_blank" href=""><img src="../misc_images/youtube-button.svg"/></a>}

        github = {<a target="_blank" href=""><img src="../misc_images/github-button.svg"/></a>}
        
        extra = {<div></div>}
        />
    )
} 