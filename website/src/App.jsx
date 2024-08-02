import './App.css'

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import { Home } from './main_modules/home'
import { About } from './main_modules/about'
import { Projects } from './main_modules/projects'
import { Contacts } from './main_modules/contacts'

function App(){
  return(
    <>
      <Router>
        <div id='header'>
          <Link id='icon' to="/">[d.]</Link>
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
            
        </Routes>

        <div id='footer'>
          <div id='footer_a'>
            <div style={{display:'flex'}}>
              <Link id='icon' to="/">[d.]</Link>
              <div id='links'>
                <Link className='link foot_a' to="/">HOME</Link>
                <Link className='link foot_a' to="/about">ABOUT</Link> 
                <Link className='link foot_a' to="/projects">PROJECTS</Link>
                <Link className='link foot_a' to="/contacts">CONTACT</Link>  
              </div>
            </div>
            
            <div id='hyperlinks'>
              <a href='https://www.linkedin.com/in/aina-damilola' target='_blank'><img src='../public/linkedin-161-svgrepo-com.svg'/></a>
              <a href='https://github.com/aina-damilola' target='_blank'><img src='../public/github-142-svgrepo-com.svg'/></a>
              <a href='https://youtube.com/@aina-damilola?si=ljHSZcj9Ie8jLJd_' target='_blank'><img src='../public/youtube-168-svgrepo-com.svg'/></a>
            </div>
          </div>
          <div id='footer_b'>
            <p id='credits_a'>
              Damilola Aina | Last Updated: <span style={{color:'rgb(50,50,50)'}}>10.07.24</span>
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
