import { Page } from "./template/page"

import "./template/template.css"

export function Mobile_map(){
    return(
        <Page img_link = "../project_images/map_project_1.png" img_width = '45vw' img_height = '33.75vw' name = "Mobile Map" short = "A map geared for tourism and optimal pathfinding"

        descrip = {<div>This project involved developing an interactive map and pathfinder system using C++ and EZGL to create a seamless and responsive Geographical Information System (GIS) application. The core functionality of the application was built around integrating real-time maps and routing using Open Street Map geodata. The goal was to ensure that the map refreshed quickly, achieving under 100ms per refresh, providing a smooth user experience even in complex navigation scenarios.
        <br/><br/>
        One of the challenges faced was managing the large datasets associated with geospatial data, which required efficient data handling and real-time processing to ensure minimal lag during user interactions. The application’s real-time routing capabilities allowed users to input a start and end point and receive optimized route suggestions almost instantaneously.
        </div>} 
        
        skills = {<>
        <img className="icons" src="../skills_logos/CPlusPlus.svg"/>
        <img className="icons" src="../skills_logos/Git.svg"/>
        <img className="icons" src="../skills_logos/VSCode.svg"/>
        </>}
        
        usage = {<div>The mobile map software allows users to input their location and desired destination, after which it calculates and displays the most efficient route in real-time. Thanks to the low refresh time, users experience minimal delay when interacting with the map, making it a practical tool for navigation in urban environments. The software is ideal for users who need fast, responsive routing and real-time geospatial data.</div>}
        
        vid = {<source src="../.mp4" type="video/mp4" />}
        
        youtube = {<a target="_blank" href=""><img src="../misc_images/youtube-button.svg"/></a>}

        github = {<a target="_blank" href=""><img src="../misc_images/github-button.svg"/></a>}
        
        extra = {<div>
            The project leveraged C++ for the core development of the application, ensuring high performance and efficiency. The user interface was built using the EZGL library, which allowed for a responsive and visually intuitive map interface. Open Street Map geodata was integrated into the system, enabling real-time pathfinding and accurate map rendering.
            <br/><br/>
            Version control was implemented using Git, which enhanced collaboration among team members, reducing code conflicts by 85% and streamlining the development process. Additionally, a comprehensive documentation system was established on a shared wiki page, which provided clear tracking of the project’s progress and contributed to an organized workflow.</div>}
        />
    )
} 