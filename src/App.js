
import React, { useState } from 'react'
// import axios from 'axios'

import Popup from './Component/Popup'
import Pyq from './Component/Pyq'

// import PopupCmd from './Component/PopupCmd';
import "./App.css"
import './Component/Navbar.css'
import MainSection from './Component/MainSection'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  //   const[roll, setRoll] = useState('')
  //   const[Name1, setName1] = useState('')

  //   const RollChange = (e)=>{
  //     setRoll(e.target.value)
  //   }

  //   const DobChange = (e)=>{
  //     setName1(e.target.value)
  //   }

  //   // const xhr = new XMLHttpRequest() ; 
  //   // xhr.open("POST",'http://localhost:4000/form',true); 
  //   // xhr.onload = function(){

  //   // }
  //   // const FormData = new FormData();
  //   // xhr.send(FormData) ;

  //   async function onSubmit(e){
  //     e.preventDefault()

  //     try{
  //         await axios.post('http://localhost:4000/form',{
  //             roll, Name1
  //         }).then(res=>{
  //           if(res.data==="exist"){
  //             alert("Valid User")
  //           }
  //           else if(res.data === "notexist"){
  //             alert("You are not an authorised USER!")
  //           }
  //         }).catch(err=>console.log(err))


  //     }
  //     catch(e){
  //         console.log(e)
  //     }
  // }
  //   console.log(roll)
  //   console.log(Name1)
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<MainSection/>}/>
          <Route path='/home' element={<Popup />} />
          <Route path='/pyq' element={<Pyq />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
