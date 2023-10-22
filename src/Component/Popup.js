import React, { useState } from 'react';
import './Popup.css';
import Navbar from './Navbar'
import axios from 'axios'
import Typewriter from 'typewriter-effect'
// import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
// import Pyq from './Pyq';
// import Navbar from '../components/Navbar';
// import Navbar from '../components/Navbar';

function Popup() {

  const Nav = useNavigate();
   
  const [cmd, setCmd] = useState()
  const [roll, setRoll] = useState('')
  const [Name1, setName1] = useState('')

  const popupDisplay = document.querySelector(".popup")
  // console.log(process.env)
  async function onSubmit(e) {
    e.preventDefault()

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ roll, Name1 }),
        credentials: 'include',
      });
    
      if (response.ok) {
        const data = await response.json();
        console.log(data) ;
        if (data.auth === "exist") {
          Nav(
            "/", { state: { username: data.username, branch: data.branch } }
          );
    
          // The rest of your code here
        } else if (data.auth === "notexist") {
          alert("You are not an authorized USER!");
          Nav.push("/home");
        }
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (

    <>
      {/* <Navbar />
      <main>
        <div className="main-cont">
          <div className="pyq-btn">
            <Link to="/pyq"><p>PYQ</p></Link>
          </div>
          <div className="syll-btn">
            <p>Syllabus</p>
          </div>
          <div className="mat-btn">
            <p>Study Material</p>
          </div>
        </div>
        <div className="prompt-cont">
          <div className="prompt-header">
            <div className="mac">
              <div className="mac-cir"></div>
              <div className="mac-cir"></div>
              <div className="mac-cir"></div>
            </div>
          </div>
          <div id="typedtext">
            {cmd}
          </div>

        </div>
      </main> */}

      <div className="App ">
        <header className="App-header">
          <div className="popup">
            <div className="popup-content">
              <div>
                <h2 className=' tracking-wide'>Enter your details</h2>
                <br></br>
                <form onSubmit={onSubmit} method='POST' className='m-2 p-2'>
                  <label className='flex justify-between align-baseline'>
                    <b className='text-blue-100 mt-2 ml-2 tracking-wide '>Roll No:</b>
                    <input
                      className=" bg-black border border-none w-[245px] rounded-lg text-blue-800 font-normal outline-none ml-4 mb-5"
                     
                      type="text"
                      onChange={(e) => {
                        setRoll(e.target.value)
                      }}
                    />
                  </label>

                  <label className='flex justify-between align-baseline'>
                    <b className='text-blue-100 mt-2 ml-2  tracking-wide'>DOB:</b>
                    <input
                      className="bg-black border border-none w-[245px] rounded-lg outline-none text-blue-800"
                      type="password"
                      onChange={(e) => setName1(e.target.value)}
                    />
                  </label>
                  <br />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </header>

      </div>
    </>
  );

}

export default Popup
