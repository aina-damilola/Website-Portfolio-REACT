import "./styles/marquee.css"

export function Marquee({children}){
    return(
        <div id="frame">
            {children}
            {children}
            {children}
            {children}
            {children}
        </div>
    )
}