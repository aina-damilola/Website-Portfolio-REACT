import './other.css'

export function Other_panel(props){
    return(
        <div id='other_panel'>
            <div id='img_con'>
                <img width = {props.width} height = {props.height} src={props.src}/>
            </div>
            <h1>
                {props.name}
            </h1>
            <h2>
                {props.descrip}
            </h2>
            <p>
                {props.date}
            </p>
        </div>
    )
}