import './App.css';
import {Routes , Route} from 'react-router-dom';
import HomePage from './Pages/TeacherHome';
import StuHome from './Pages/StrudentHome';
import RoomPageTeacher from './Pages/Room';
import React from 'react';


function App() {
  return (
    <>
        <Routes>
        <Route path='/teacher' element ={<HomePage />} />
        {/* <Route path='/hello' element ={<Test1 name1={x}/>} /> */}
        {/* <Route path='/class' element ={<MeetingPage />} /> */}
        <Route path='/room/:name/:roomId/:role'  element ={<RoomPageTeacher />}/>
        <Route path='/'  element ={<StuHome />}/>
      </Routes>
    

    </>
    
  );
}

export default App;
