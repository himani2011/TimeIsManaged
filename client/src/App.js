import './App.css';
import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'
import React,{useState,useEffect} from 'react';
import { Route,Routes} from 'react-router-dom';
import AddEmp from '../src/components/AddEmp';
import Login from '../src/components/Login';
import ChangeAvail from '../src/components/ChangeAvail';
import EditEmp from '../src/components/EditEmp';
import ViewSchedule from '../src/components/ViewSchedule';


function App() {

  const [auth,setAuth] = useState()

  useEffect(()=>{
    setAuth(localStorage.getItem("TOKEN"))
  },[])
  return (
    <div>
      <Navbar auth={auth}/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addEmp' element={<AddEmp/>}></Route>
        <Route path='/login' element={<Login setAuth={setAuth}/>}></Route>
        <Route path='/changeAvail' element={<ChangeAvail/>}></Route>
        <Route path='/editEmp' element={<EditEmp/>}></Route>
        <Route path='/viewSchedule' element={<ViewSchedule/>}></Route>


      </Routes>
      
    </div>
  );
}

export default App;
