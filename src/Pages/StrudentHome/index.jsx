import React, {useEffect, useState} from 'react'
import StudentHome from '../../components/StudentHome';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';

export default function StuHome() {

    const[record , setrecord] = useState([]);

    useEffect(()=>{
        const getUserdata = async()=>{
            const reqData = await fetch("https://video5743call.000webhostapp.com/Classroom.php");
            const resData = await reqData.json();
            setrecord(resData);
  
        }
        getUserdata();

    },[]);    

    console.log(record.length)

  return (
    <div>
      <NavBar/>
      <SideBar/>
      <div style={{marginTop:"0.1cm",height:"87%",position:'absolute',overflowX:"auto",width:"100%"}}>
      
        <div style={{display:"grid",gridTemplateColumns:'7cm 7cm 7cm 7cm',marginLeft:'18vw'}}>
        
          {record.map((element,index)=>(
            <div key={index}>
              <StudentHome sub={element.subject} roomid = {element.roomid} title={element.teacher}/>
            </div>
            ))
          }
      </div>
      </div>
    h
    </div>
  )
}
