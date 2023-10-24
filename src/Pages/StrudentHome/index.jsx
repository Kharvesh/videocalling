import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
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

    let live=record.length

  return (
    <div>
      <NavBar/>
      <SideBar/>

      <div style={{display:"grid",gridTemplateColumns:"8.5cm 8.5cm 8.5cm 8.5cm",marginLeft:"3vw"}}>


        <Link to='/student/live class' style={{textDecoration:"none"}}>
        <div className="home-card">
          <h3>Live classes</h3>
          <div className="class-img card-img"><i class="fa-solid fa-chalkboard-user"></i></div>
          <p style={{fontSize:"30px",marginTop:"-1cm",marginLeft:"0.3cm",color:"#f83131"}}>{live}</p>
        </div>
        </Link>

        <div className="home-card">
          <h3>Recorded classes</h3>
          <div className="rec-img card-img"><i class="fa-solid fa-file-video"></i></div>
          <p style={{fontSize:"30px",marginTop:"-1cm",marginLeft:"0.3cm",color:"#f83131"}}>0</p>
        </div>


        <div className="home-card">
          <h3>Assignments</h3>
          <div className="assignment-img card-img"><i class="fa-solid fa-file-pen"></i></div>
          <p style={{fontSize:"30px",marginTop:"-1cm",marginLeft:"0.3cm",color:"#f83131"}}>0</p>
        </div>


        <div className="home-card">
          <h3>Doubts</h3>
          <div className="doubt-img card-img"><i class="fa-solid fa-comments"></i></div>
          <p style={{fontSize:"30px",marginTop:"-1cm",marginLeft:"0.3cm",color:"#f83131"}}>0</p>
        </div>


        <div className="home-card">
          <h3>Examination</h3>
          <div className="exam-img card-img"><i class="fa-regular fa-file-lines"></i></div>
          <p style={{fontSize:"30px",marginTop:"-1cm",marginLeft:"0.3cm",color:"#f83131"}}>0</p>
        </div>


        <div className="home-card">
          <h3>Homework</h3>
          <div className="hw-img card-img"><i class="fa-solid fa-book"></i></div>
          <p style={{fontSize:"30px",marginTop:"-1cm",marginLeft:"0.3cm",color:"#f83131"}}>0</p>
        </div>
      </div>
     
     
    </div>
  )
}
