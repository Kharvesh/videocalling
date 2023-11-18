import React, {useEffect, useState} from 'react'
// import { Link } from 'react-router-dom';
import NavBar from '../../../components/NavBar';
import SideBar from '../../../components/SideBar';
import './StuLiveclass.css'
import StudentHome from '../../../components/ClassesCard';

export default function StuLiveclass() {

  const[record , setrecord] = useState([]);

  useEffect(()=>{
      const getUserdata = async()=>{
          const reqData = await fetch("http://localhost:8081/classroom");
          const resData = await reqData.json();
          setrecord(resData);

      }
      getUserdata();

  },[]);    
  return (
    <div>
        <NavBar/>
        <SideBar/>
      
       <div style={{marginTop:"0.1cm",height:"87%", overflowX:"auto",width:"100%"}}>
      
        <div style={{display:"grid",gridTemplateColumns:'7cm 7cm 7cm 7cm',marginLeft:'8vw'}}>
        
          {record.map((element,index)=>(
            <div key={index}>
              <StudentHome sub={element.subject} roomid = {element.roomid} title={element.teacher}/>
            </div>
            ))
          }
      </div>
          <button type="button" style={{color:"white", width:"3cm",height:"1.2cm",backgroundColor:"#FF4E4E",border:"none",borderRadius:"5px",marginLeft:"45%",marginTop:"1cm",cursor:"pointer"}}>More</button>
      </div>
    </div>
  )
}
