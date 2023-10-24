import React, {useEffect, useState} from 'react'
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';

import './TeachLiveclass.css'
export default function TeachLiveclass() {

  const[record , setrecord] = useState([]);

  useEffect(()=>{
      const getUserdata = async()=>{
          const reqData = await fetch("https://video5743call.000webhostapp.com/Classroom.php");
          const resData = await reqData.json();
          setrecord(resData);

      }
      getUserdata();

  },[]);  

  return (
    <>
    <NavBar/>
    <SideBar/>
    <div style={{marginLeft:"5vw"}}>
      <button className='addclassbut'><i className="fa-solid fa-plus"></i> Add Class</button>
      <div>
        
      </div>
      <table>
        <tr>
          <th style={{width:"1cm"}}>Sno</th>
          <th style={{width:"2cm"}}>Date</th>
          <th style={{width:"4cm"}}>Time</th>
          <th style={{width:"3cm"}}>Subject</th>
          <th style={{width:"8cm"}}>Description</th>
          <th style={{width:"2cm"}}>Class</th>
          <th style={{width:"3cm"}}>Teacher</th>
          <th style={{width:"3cm"}}>Action</th>
        </tr>
      {record.map((element,index)=>(
        <tr key={index}>
          <td>{index+1}</td>
          <td>02-10-23</td>
          <td>10:20AM - 11:20AM</td>
          <td>{element.subject}</td>
          <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt harum nostrum est</td>
          <td>11 PCM</td>
          <td>{element.teacher}</td>
          <td>
            <button className='actionbut' style={{width:"1cm",height:"1cm",color:"white",backgroundColor:"#327e45",border:"1px solid #327e45",borderRadius:"4px",fontSize:"18px"}}><i className="fa-solid fa-arrow-up-right-from-square"></i></button> 
          
            <button className='actionbut' style={{width:"1cm",height:"1cm",color:"white",backgroundColor:"#f43131",border:"1px solid #f43131",borderRadius:"4px",marginLeft:"0.1cm"}}><i className="fa-solid fa-trash"></i></button>
          
          </td>
        </tr>
          ))
        }
      </table>


    </div>
    </>
  )
}