import { Page } from "./template/page"

import "./template/template.css"

export function World_le(){
    return(
        <Page img_link = "" img_width = '' name = "World-le" short = "A geography minigame"

        descrip = {<div></div>} 
        
        skills = {<>
        <img className="icons" src="../skills_logos/Python.svg"/>
        <img className="icons" src="../skills_logos/VSCode.svg"/>
        </>}
        
        usage = {<div></div>}
        
        vid = {<source src="../project_videos/Worldle.mp4" type="video/mp4" />}
        
        youtube = {<a target="_blank" href=""><img src="../misc_images/youtube-button.svg"/></a>}

        github = {<a target="_blank" href=""><img src="../misc_images/github-button.svg"/></a>}
        
        extra = {<div></div>}
        />
    )
} 