import { Color } from 'three'
import './Hero.css'

function Hero(){
    return(
        <div className='hero_section'>
            <h2>
                Hi, I'm <span style={{color: "#FFE4C4"}}>Dami</span>!
            </h2>
            <h3>
                I'm a <span style={{color: "#FFE4C4"}}>Software</span> Developer
            </h3>
            <div className='nav_bar'>
                <a className='nav_buttons'>
                    ABOUT
                </a>
                <a className='nav_buttons'>
                    EXPERIENCE
                </a>
                <a className='nav_buttons'>
                    CONTACTS
                </a>
            </div>
        </div>
    )
}

export default Hero