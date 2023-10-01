import { useNavigate ,Link} from "react-router-dom"
import React,{useCallback} from 'react'
import './navbar.css'

export default function NavBar() {

    const navigate = useNavigate()

    const MeetingEvent = useCallback(() => {
      navigate(`/`)
    }, [navigate])
    const Text = "Kharvesh"

  return (
    <div className="navbar">
      <Link to='/teacher' style={{textDecoration:"none"}}>
        <div className="logocontainer" onClick={MeetingEvent}>
            <div className='logo'></div>
          <h2 className='webname'><span style={{color:"#f43131"}}>Adu</span>Kator</h2>
        </div>
      </Link>

      {/* <div className="pages">
        <ul type="none" style={{color:"white",display:"flex", gap:"3vw",fontWeight:"400",marginLeft:"12cm", cursor:"pointer"}}>
          <li style={{color:"#FF4E4E"}}>Home</li>
          <li> Classes</li>
          <li> Homework</li>
          <li> Doubt</li>
          <li> Contact Us</li>
        </ul>
      </div> */}

        <div className="userlogo">
          <h3 className="username" ><span style={{color:'#f43131'}}>Hi, </span>{Text}&nbsp;&nbsp;</h3> 
          <div className="userimg"></div>
        </div>
      </div>
  )
}
