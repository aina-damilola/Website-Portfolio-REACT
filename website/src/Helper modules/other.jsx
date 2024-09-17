import './styles/other.css'

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

export function Other_panel(props){
    return(
        <div id='other_panel' style={{minWidth:props.minwidth, minHeight:props.minheight, width:props.width, height:props.height}}>

            <div id='other_panel_inner' style={{minWidth:props.minwidth, minHeight:props.minheight, width:props.width, height:props.height}}>

                <div id='other_panel_front' style={{backgroundImage: `url(${props.src})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minWidth:props.minwidth, minHeight:props.minheight, width:props.width, height:props.height}}>
                    
                    
                    
                </div>

                <div id='other_panel_back' style={{backgroundColor: props.bg, minWidth:props.minwidth, minHeight:props.minheight, width:props.width, height:props.height}}>
                    <h1>
                        {props.name}
                    </h1>
                    
                    <h2>
                        {props.descrip}
                    </h2>
                    <p>
                        {props.skills}
                    </p>
                    <Link id='hyperlink' to = {props.dest}>LEARN MORE</Link>
                </div>
            </div>
        </div>
    )
}