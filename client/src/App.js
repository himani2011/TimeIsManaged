import './App.css';
import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'
import React,{useState,useEffect} from 'react';
import { Route,Routes} from 'react-router-dom';
import AddEmp from '../src/components/AddEmp';
import Login from '../src/components/Login';


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

      </Routes>
      
    </div>
  );
}

export default App;
