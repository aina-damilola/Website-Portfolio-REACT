import './App.css'
import './Header.css'

import Home from './Home_Section/Home'
import About from './About_Section/About'
import Projects from './Projects_Section/Projects'
import Contacts from './Contacts_Section/Contacts'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"


function App(){
  return(
    <>
      <Router>
        <div id='_header' className='Header'>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/about">About</Link>
          <Link className='link' to="/projects">Projects</Link>
          <Link className='link' to="/contacts">Contacts</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contacts' element={<Contacts/>} />
            
        </Routes>
      </Router>
        
    </>
  )
}

export default App
