import './App.css';
import {Routes , Route} from 'react-router-dom';
import HomePage from './Pages/TeacherHome';
import StuHome from './Pages/StrudentHome';
import RoomPageTeacher from './Pages/Room';
import StuLiveclass from './Pages/StuLiveClass/StuLiveclass';
import TeachLiveclass from './Pages/TeachLiveClass/TeachLiveclass';
import React from 'react';
import Login from './Pages/Login/login';


function App() {
  return (
    <>

        <Routes>
        <Route path='/teacher/dashboard' element ={<HomePage />} />
        <Route path='/room/:name/:roomId/:role'  element ={<RoomPageTeacher />}/>
        <Route path='/student/dashboard' element ={<StuHome />}/>
        <Route path='/student/live class' element ={<StuLiveclass />}/>
        <Route path='/teacher/live class' element ={<TeachLiveclass />}/>
        <Route path='/' element ={<Login />}/>
        
      </Routes>
    

    </>
    
  );
}

export default App;
