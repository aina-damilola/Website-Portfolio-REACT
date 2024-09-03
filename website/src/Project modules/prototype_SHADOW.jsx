import { Page } from "./template/page"

import "./template/template.css"

export function Prototype_SHADOW(){
    return(
        <Page img_link = "" img_width = '' name = "SHADOW" short = "A prototype car maximising fuel efficiency and traveled distance"

        descrip = {<div></div>} 
        
        skills = {<>
        <img className="icons" src="../skills_logos/SOLIDWORKS.svg"/>
        </>}
        
        usage = {<div></div>}
        
        vid = {<source src="../.mp4" type="video/mp4" />}
        
        youtube = {<a target="_blank" href=""><img src="../misc_images/youtube-button.svg"/></a>}

        github = {<a target="_blank" href=""><img src="../misc_images/github-button.svg"/></a>}
        
        extra = {<div></div>}
        />
    )
} 