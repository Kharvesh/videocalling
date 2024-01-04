import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'

export default function SideBar() {




  return (
    <div className='sidebar'>
        
        <Link to='/student/dashboard' style={{textDecoration:"none"}}><div className='home selected' id='home'><i className="fa-solid fa-house"></i><span id='display'> Dashboard</span></div></Link>
        <div className='class notselected' id='class'><i className="fa-solid fa-book"></i><span id="display"> Live Classes</span></div>
        <div className='contact notselected' id='contact'><i className="fa-solid fa-film"></i><span id="display"> Recoded class</span></div>
        <div className='homework notselected' id='homework'><i className="fa-solid fa-sheet-plastic"></i><span id="display"> Assignment</span></div>
        <div className='doubt notselected' id='doubt'><i className="fa-solid fa-comment-dots"></i><span id="display"> Doubt</span></div>
        <div className='contact notselected' id='contact'><i className="fa-solid fa-headset"></i><span id="display"> Contact Us</span></div>
        <Link to={"/"} style={{textDecoration:"none"}}>
          <div className='logout notselected' id='logout'><i className="fa-solid fa-right-from-bracket"></i><span id="display"> Logout  </span></div>
        </Link>
    </div>
    
  )
}
