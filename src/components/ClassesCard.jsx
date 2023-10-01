import React ,{useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import "./ClassesCard.css"
import physics from "../Images/physics.avif"
import maths from "../Images/maths.avif"
import chemistry from "../Images/chemistry.avif"
import bio from "../Images/bio.avif"


export default function StudentHome(props) {

    const navigate = useNavigate()
    const Text = "Kharvesh Ballabh"
    const handleclick = useCallback(() => {
        navigate(`/room/${Text}/${props.roomid}/Audince`)
      }, [navigate,props.roomid])
  return (
    <div>
        {/* <button onClick={handleclick}>{props.sub}</button> */}
        <div className='roomcard' onClick={handleclick}>
            <div><img src={props.sub==="physics"?physics:props.sub==="maths"?maths:props.sub==="chemistry"?chemistry:props.sub==="biology"?bio:""} alt="" /></div>
            <div className='roomcard-title'>{props.title}
                <div><i className="fa-solid fa-play" ></i></div>
            </div>
        </div>

    </div>
  )
}
