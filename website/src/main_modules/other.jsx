import './other.css'

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

export function Other_panel(props){
    return(
        <div id='other_panel'>
            <div id='other_panel_inner' >
                <div id='other_panel_front' style={{backgroundColor: props.bg}}>
                    <div id='img_con'>
                        <img width = {props.width} height = {props.height} src={props.src}/>
                    </div>
                    <h1>
                        {props.name}
                    </h1>
                    <p>
                        {props.date}
                    </p>
                </div>

                <div id='other_panel_back' style={{backgroundColor: props.bg}}>
                    <h2>
                        {props.descrip}
                    </h2>
                    <Link id='hyperlink' to = {props.dest}>LEARN MORE</Link>
                </div>
            </div>
        </div>
    )
}