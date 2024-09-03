import { Page } from "./template/page"

import "./template/template.css"

export function Desktop_OS(){
    return(
        <Page img_link = "" img_width = '' name = "Operating System" short = "Desktop Operating System with file managing & text editorsystem"

        descrip = {<div></div>} 
        
        skills = {<>
        <img className="icons" src="../skills_logos/Assembly.svg"/>
        <img className="icons" src="../skills_logos/C.svg"/>
        <img className="icons" src="../skills_logos/VSCode.svg"/>
        </>}
        
        usage = {<div></div>}
        
        vid = {<source src="../project_videos/Desktop_OS.mp4" type="video/mp4" />}
        
        youtube = {<a target="_blank" href=""><img src="../misc_images/youtube-button.svg"/></a>}

        github = {<a target="_blank" href=""><img src="../misc_images/github-button.svg"/></a>}
        
        extra = {<div></div>}
        />
    )
}