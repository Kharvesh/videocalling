import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'

export default function SideBar() {




  return (
    <div className='sidebar'>
        
        <Link to='/' style={{textDecoration:"none"}}><div className='home selected' id='home'><i className="fa-solid fa-house"></i> Home</div></Link>
        <div className='class notselected' id='class'><i className="fa-solid fa-book"></i> Classes</div>
        <div className='homework notselected' id='homework'><i className="fa-solid fa-sheet-plastic"></i> Homework</div>
        <div className='doubt notselected' id='doubt'><i className="fa-solid fa-comment-dots"></i> Doubt</div>
        <div className='contact notselected' id='contact'><i className="fa-solid fa-headset"></i> Contact Us</div>
        <div className='logout notselected' id='logout'><i className="fa-solid fa-right-from-bracket"></i></div>
    </div>
  )
}