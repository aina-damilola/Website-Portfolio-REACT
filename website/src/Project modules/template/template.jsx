import { Page } from "./template/page"

import "./template/template.css"

export function project_name(){
    return(
        <Page img_link = "" img_width = '' name = "" short = ""

        descrip = {<div></div>} 

        skills = {<>
        <img className="icons" src="../skills_logos/"/>
        <img className="icons" src="../skills_logos/"/>
        </>}
        
        usage = {<div></div>}
        
        vid = {<source src="../.mp4" type="video/mp4" />}
        
        youtube = {<a target="_blank" href=""><img src="../misc_images/youtube-button.svg"/></a>}

        github = {<a target="_blank" href=""><img src="../misc_images/github-button.svg"/></a>}
        
        extra = {<div></div>}
        />
    )
}