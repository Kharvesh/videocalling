import './App.css';
import {Routes , Route} from 'react-router-dom';
import HomePage from './Pages/Teacher/TeacherHome';
import StuHome from './Pages/Student/StrudentHome';
import RoomPageTeacher from './Pages/Teacher/Room';
import Achedemics from './Pages/Student/Achedemics/Achedemics';
import StuLiveclass from './Pages/Student/StuLiveClass/StuLiveclass';
import TeachLiveclass from './Pages/Teacher/TeachLiveClass/TeachLiveclass';
import React from 'react';
import Login from './Pages/Login/login';


function App() {
  return (
    <>

        <Routes>
        <Route path='/teacher/dashboard' element ={<HomePage />} />
        <Route path='/room/:name/:roomId/:role'  element ={<RoomPageTeacher />}/>
        <Route path='/student/dashboard' element ={<StuHome />}/>
        <Route path='/student/achedemics' element ={<Achedemics />}/>
        <Route path='/student/live class' element ={<StuLiveclass />}/>
        <Route path='/teacher/live class' element ={<TeachLiveclass />}/>
        <Route path='/' element ={<Login />}/>
        
      </Routes>
    

    </>
    
  );
}

export default App;
