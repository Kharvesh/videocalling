import './App.css';
import {Routes , Route, useNavigate} from 'react-router-dom';
// import Test1 from './Pages/Home/Test1';
import HomePage from './Pages/Home';
// import RoomPageStudent from './Pages/Room/student';
import StuHome from './Pages/StrudentHome';
import RoomPageTeacher from './Pages/Room';
import React,{useState} from 'react';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';


function App() {
  const [name,setname] = useState()
  
  const addList = (inputText)=>{
    console.log(inputText)
    setname(inputText)
  }
  let text = name
  
  if(name==true){
    text = 'clicked'
  }
  else if(name==false){
    text = "not clicked" 
  }
  let x = text
  return (
    <>
        <Routes>
        <Route path='/teacher' element ={<HomePage  nameEntry1={addList}/>} />
        {/* <Route path='/hello' element ={<Test1 name1={x}/>} /> */}
        {/* <Route path='/class' element ={<MeetingPage />} /> */}
        <Route path='/room/:name/:roomId/:role'  element ={<RoomPageTeacher />}/>
        <Route path='/'  element ={<StuHome />}/>
      </Routes>
    

    </>
    
  );
}

export default App;
