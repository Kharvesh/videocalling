import { useNavigate ,Link} from "react-router-dom"
import React,{useCallback} from 'react'
import './navbar.css'

export default function NavBar() {
  const page = "dashboard" 

    const navigate = useNavigate()

    const MeetingEvent = useCallback(() => {
      navigate(`/`)
    }, [navigate])
    const Text = "Kharvesh"

  return (
    <div className="navbar">
      <Link to='/teacher/dashboard' style={{textDecoration:"none"}}>
        <div className="logocontainer" onClick={MeetingEvent}>
            <div className='logo'></div>
          <h2 className='webname'><span style={{color:"#f43131"}}>Adu</span>Kator</h2>
        </div>
      </Link>
      <h3 style={{marginLeft:"0cm",color:"#e8eaee",textTransform:"capitalize",fontWeight:"100"}}>{page}</h3>
      
        <div style={{marginLeft:"21.5cm",color:"#e8eaee",textTransform:"capitalize",fontWeight:"100",cursor:"pointer"}}><i className="fa-solid fa-message"></i> Notification</div>
        <div className="userlogo">
          <h4 className="username" ><span style={{color:'#f43131'}}>Hi, </span>{Text}&nbsp;&nbsp;</h4> 
          <div className="userimg"></div>
        </div>
      </div>
  )
}
