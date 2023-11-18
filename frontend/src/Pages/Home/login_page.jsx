import React, {useState , useCallback} from 'react'
import {useNavigate} from 'react-router-dom'

export default function MeetingPage(props) {
    const [Text,setText] = useState()

    function handelChange(event){
      setText(event.target.value)  
  
    }
    const [value , setvalue] = useState()
//     const [valname , setvalname] = useState()
   const navigate = useNavigate()

    const HandleJoinEvent = useCallback(()=>{
        props.nameEntry1(Text)
        navigate(`/room/${value}`)
    }, [navigate , value])


    return (

    <div>
      <input type="text" className='text_area' value={Text} id='text_area' onChange={handelChange} placeholder='Add Your Text'/>
      <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)} placeholder='Enter room code'/>
      {/* <button className='add' onClick={()=>{props.nameEntry1(Text)}}>ADD</button> */}
      <button onClick={HandleJoinEvent}>Create Meeting</button>
    </div>
  )
}
