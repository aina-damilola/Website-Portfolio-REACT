import './Styles/Home.css'

import Hero_About from './Hero-About'
import Projects from './Projects'
import Contacts from './Contacts'
import Other_Website from './Other_Website'

function Home(){
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <div className='con-a'>
                <Hero_About />
                <div>
                    <Projects />
                    <div style={{display: 'flex'}}>
                        <Contacts />
                        <Other_Website />
                    </div>
                </div>
                
            </div>
            <svg className="ArrowDown" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#b9b9b9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="#b9b9b9"></path> </g></svg>
        </div>
        
        
    )
}

export default Home