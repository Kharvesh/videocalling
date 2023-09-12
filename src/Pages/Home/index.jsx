import React, { useCallback } from 'react'
import './style.css'
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import { useNavigate } from 'react-router-dom'
export default function HomePage() {

  // let start = false;


  function randomID(len) {
    let result = '';
    if (result) return result;
    var chars = '1234567890',
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }

  const navigate = useNavigate()


  const Text = "Kharvesh"

  // const value = randomID(10)
  //     const [valname , setvalname] = useState()

  const HandleJoinEvent = useCallback(() => {
    // props.nameEntry1(start)
    // start = true
    navigate(`/room/${Text}/${randomID(9)}/Host`)
    // navigate(`/room/${Text}/${value}`)
  }, [navigate])


  return (
    <>
    
      <NavBar/>
      <SideBar/>
    <div className='home-container'>
      <div>
        <div className="joinmeething" onClick={HandleJoinEvent} style={{gridColumn:'2px'}}><i className="fa-solid fa-video"></i></div>
        <p>Create Meeting</p>
      </div>
      <div>
        <div className="but1"><i className="fa-solid fa-plus"></i></div>
        <p>Join Meeting</p>
      </div>
      <div>
        <div className="but2"><i className="fa-regular fa-calendar"></i></div>
        <p>Schedule Meeting</p>
      </div>
      <div>
        <div className="but3"><i className="fa-solid fa-arrow-up"></i></div>
        <p>Share Screen</p>
      </div>



    </div>
    </>
  )
}
