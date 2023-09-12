import './App.css';
import {Routes , Route} from 'react-router-dom';
// import Test1 from './Pages/Home/Test1';
import HomePage from './Pages/Home';
// import RoomPageStudent from './Pages/Room/student';
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
