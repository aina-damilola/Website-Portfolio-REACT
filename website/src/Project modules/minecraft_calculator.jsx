import { Page } from "./template/page"

import "./template/template.css"

export function Minecraft_calculator(){
    return(
        <Page img_link = "" img_width = '' name = "Minecraft Calculator" short = "Logic gates and redstone creating a calculator within minecraft"

        descrip = {<div></div>} 
        
        skills = {<>
        <img className="icons" src="../skills_logos/CircuitDesign.svg"/>
        </>}
        
        usage = {<div></div>}
        
        vid = {<source src="../.mp4" type="video/mp4" />}
        
        youtube = {<a target="_blank" href=""><img src="../misc_images/youtube-button.svg"/></a>}

        github = {<a target="_blank" href=""><img src="../misc_images/github-button.svg"/></a>}
        
        extra = {<div></div>}
        />
    )
} 