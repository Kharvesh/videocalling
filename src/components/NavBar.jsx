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
          <h2 className='webname'><span style={{color:"#f43131"}}>Website</span> Name</h2>
        </div>
      </Link>

        <div className="userlogo">
          <h3 className="username" ><span style={{color:'#f43131'}}>Hi, </span>{Text}</h3>
          <div className="userimg"></div>
        </div>
      </div>
  )
}
