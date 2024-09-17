import "./page.css"

export function Page(props){ 
    return(
        <div id="con">
            <div id="con-a">
                <img id="con-a-a" style={{minWidth:'400px',width:props.img_width, minHeight:'300px',height:props.img_height}}
                src = {props.img_link}/>
                <div id="con-a-b">
                    <h1>{props.name}</h1>
                    <h4>{props.short}</h4>
                </div>
            </div>
            <h2>Description</h2>
            <div id="con-b">
                <div id="con-b-a">{props.descrip}</div>
                <div id="con-b-b">{props.skills}</div>
                <div id="con-b-a">
                    {props.extra}
                </div>
            </div>
            
            
            <h2>usage</h2>
            <div id="con-c">{props.usage}</div>

            <div id="con-d">
                <div id="con-d-a">
                    <div id="con-d-a-a">
                        {props.github}
                        {props.youtube}
                    </div>
                </div>
                <video   controls='controls'>
                    {props.vid}
                </video>
            </div>
            
            
        </div>
    )
}