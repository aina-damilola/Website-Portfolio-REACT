export function Page(props){
    return(
        <div>
            <div>
                <img src={props.img}/>
                <div>
                    <h1>{props.name}</h1>
                    <h3>{props.short}</h3>
                </div>
            </div>
            <h2>CREATION</h2>
            <div>
                <div>{props.creation}</div>
                <div>{props.skills}</div>
            </div>
            
            <h2>USAGE</h2>
            <div>{props.usage}</div>
            <div>
                <div>
                    <h3>Demo Video</h3>
                </div>

            </div>
            <h2>TAKEAWAYS</h2>
            <div>{props.takeaways}</div>





        </div>
    )
}