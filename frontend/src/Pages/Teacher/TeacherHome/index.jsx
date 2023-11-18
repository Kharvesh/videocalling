import React, { useState, useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import NavBar from '../../../components/NavBar';
import SideBar from '../../../components/SideBar';
// import { useNavigate } from 'react-router-dom'
export default function HomePage() {

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
    <>

      <NavBar />
      <SideBar />

      <div style={{display:"grid",gridTemplateColumns:"8.5cm 8.5cm 8.5cm 8.5cm",marginLeft:"3vw"}}>



      <Link to='/teacher/live class' style={{textDecoration:"none"}}>
        <div className="home-card">
          <h3>Live classes</h3>
          <div className="class-img card-img"><i className="fa-solid fa-chalkboard-user"></i></div>
          <p style={{fontSize:"30px",marginTop:"-1cm",marginLeft:"0.3cm",color:"#f83131"}}>{live}</p>
        </div>
        </Link>


        <div className="home-card">
          <h3>Assignments</h3>
          <div className="assignment-img card-img"><i className="fa-solid fa-file-pen"></i></div>
          <p style={{fontSize:"30px",marginTop:"-1cm",marginLeft:"0.3cm",color:"#f83131"}}>0</p>
        </div>


        <div className="home-card">
          <h3>Doubts</h3>
          <div className="doubt-img card-img"><i className="fa-solid fa-comments"></i></div>
          <p style={{fontSize:"30px",marginTop:"-1cm",marginLeft:"0.3cm",color:"#f83131"}}>0</p>
        </div>


        <div className="home-card">
          <h3>Examination</h3>
          <div className="exam-img card-img"><i className="fa-regular fa-file-lines"></i></div>
          <p style={{fontSize:"30px",marginTop:"-1cm",marginLeft:"0.3cm",color:"#f83131"}}>0</p>
        </div>


        <div className="home-card">
          <h3>Homework</h3>
          <div className="hw-img card-img"><i className="fa-solid fa-book"></i></div>
          <p style={{fontSize:"30px",marginTop:"-1cm",marginLeft:"0.3cm",color:"#f83131"}}>0</p>
        </div>
      </div>
     

          




      
    </>
  )
}
