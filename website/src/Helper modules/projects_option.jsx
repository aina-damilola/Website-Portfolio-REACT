import "./styles/projects_option.css"


export function Option(props){
    return(
        <div id="container" onMouseEnter={() => props.onHover(props.image)} onMouseLeave={() => props.onHover('./project_images/image_noise.png')}>
            <div id="primary">
                <h1>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    {props.name}
                </h1>
                <h2>
                    {props.type}
                </h2>
            </div>
            <div id="secondary">
                <p id="stack">
                    {props.stack}
                </p>
            
            </div>
        </div>
    )
}