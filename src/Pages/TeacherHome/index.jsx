// import React, { useCallback } from 'react'
import React from 'react'
import './style.css'
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
// import { useNavigate } from 'react-router-dom'
export default function HomePage() {

  // function randomID(len) {
  //   let result = '';
  //   if (result) return result;
  //   var chars = '1234567890',
  //     maxPos = chars.length,
  //     i;
  //   len = len || 5;
  //   for (i = 0; i < len; i++) {
  //     result += chars.charAt(Math.floor(Math.random() * maxPos));
  //   }
  //   return result;
  // }

  // const navigate = useNavigate()


  // const Text = "Kharvesh"
  // const HandleJoinEvent = useCallback(() => {
  //   navigate(`/room/${Text}/${randomID(9)}/Host`)
  // }, [navigate])


  return (
    <>

      <NavBar />
      <SideBar />
      <div className='home-container'>

        <h1 style={{color:"white"}}>Create Meeting</h1>

        <div className='Create-Class-Form'>

          <div style={{gridColumn:"1/3"}}>
            <p className='form-lable'>Class:</p>
            <select name="" className='form-data-selector'>
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div style={{gridColumn:"1/3"}}>
            <p className='form-lable'>Subject:</p>
            <select name="" className='form-data-selector'>
              <option value="science" selected>Science</option>
              <option value="maths">Maths</option>
              <option value="eng">English</option>
              <option value="hindi">Hindi</option>
              <option value="ssc">Social science</option>
              <option value="it">IT</option>
            </select>
          </div>
          <div style={{gridColumn:"1/2"}}>
            <p className='form-lable'>Time:</p>
            <input type="time" className='form-data-selector-datetime' />
          </div>
          <div style={{gridColumn:"2/30"}}>
            <p className='form-lable'>Date:</p>
            <input type="date" className='form-data-selector-datetime' />
          </div>

          
        </div>

        <button style={{marginLeft:"5cm"}} className='form-button'>Join</button>
        <button className='form-button'>Create</button>

        <div className='form-img'></div>




      </div>
    </>
  )
}
