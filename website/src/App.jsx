import './App.css'

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import { Home } from './main_modules/home'
import { About } from './main_modules/about'
import { Projects } from './main_modules/projects'
import { Contacts } from './main_modules/contacts'

import { Space_dog } from './Project modules/space_dog'
import { Brain_tumor_detector } from './Project modules/brain_tumor_detector'
import { Desktop_OS } from './Project modules/desktop_OS'
import { Mobile_map } from './Project modules/mobile_map'
import { Prototype_SHADOW } from './Project modules/prototype_SHADOW'
import { SIMON_piano_edition } from './Project modules/SIMON_piano_edition'
import { World_le } from './Project modules/world_le'
import { Minecraft_calculator } from './Project modules/minecraft_calculator'

function App(){
  return(
    <>
      <Router>
        <div id='header'>
          <Link id='icon' to="/">[d.a]</Link>
          <div id='links'>
            <Link className='link head_a' to="/">HOME</Link>
            <Link className='link head_a' to="/about">ABOUT</Link> 
            <Link className='link head_a' to="/projects">PROJECTS</Link>
            <Link className='link head_a' to="/contacts">CONTACT</Link>  
          </div>

        </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contacts' element={<Contacts/>} />

          <Route path='/projects/space-dog' element={<Space_dog/>} />
          <Route path='/projects/brain_tumor_detector' element={<Brain_tumor_detector />} />
          <Route path='/projects/desktop_OS' element={< Desktop_OS/>} />
          <Route path='/projects/mobile_map' element={<Mobile_map/>} />
          <Route path='/projects/prototype_SHADOW' element={<Prototype_SHADOW/>} />
          <Route path='/projects/SIMON_piano_edition' element={<SIMON_piano_edition/>} />
          <Route path='/projects/world_le' element={<World_le/>} />
          <Route path='/projects/minecraft_calculator' element={< Minecraft_calculator/>} /> 
        </Routes>

        <div id='footer'>
          <div id='footer_a'>
            <div style={{display:'flex'}}>
              <Link id='icon' to="/">[d.a]</Link>
              <div id='links'>
                <Link className='link foot_a' to="/">HOME</Link>
                <Link className='link foot_a' to="/about">ABOUT</Link> 
                <Link className='link foot_a' to="/projects">PROJECTS</Link>
                <Link className='link foot_a' to="/contacts">CONTACT</Link>  
              </div>
            </div>
            
            <div id='hyperlinks'>
              <a href='https://www.linkedin.com/in/aina-damilola' target='_blank'><img src='./footer_icons/linkedin-161-svgrepo-com.svg'/></a>
              <a href='https://github.com/aina-damilola' target='_blank'><img src='./footer_icons/github-142-svgrepo-com.svg'/></a>
              <a href='https://youtube.com/@aina-damilola?si=ljHSZcj9Ie8jLJd_' target='_blank'><img src='./footer_icons/youtube-168-svgrepo-com.svg'/></a>
            </div>
          </div>
          <div id='footer_b'>
            <p id='credits_a'>
              Damilola Aina | Last Updated: <span style={{color:'rgb(50,50,50)'}}>Sept. 8th '24</span>
            </p> 
            <p id='credits_b'>
              image courtesy of <a style={{textDecoration:'none'}}href='https://www.instagram.com/not_aralii/' target='_blank'>@not_aralii</a>
            </p>
          </div>
        </div>
      </Router>     
    </>
  )
}

export default App
