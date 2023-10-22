import React, { useEffect, useState } from 'react'
import './MainSection.css'
import Typewriter from 'typewriter-effect'
import Navbar from './Navbar'
import { Link,useNavigate, useLocation} from 'react-router-dom'

function MainSection() {
    
     const[data, setData] = useState('')
    const Nav = useNavigate() ;
    const callAboutPage = async() =>{
    try{
         const res =await fetch("http://localhost:4000/",{
            method:"GET",
            headers:{
                Accept:"application/json" , 
                "Content-Type":"application/json"
            },
            credentials:"include"
         })
         const data =await res.json()
         
         console.log(data) ;
         setData(data)
          if(!res.status===200){
            const error = new Error(res.error)
            throw error ;
            Nav("/home") ;
          }
    }catch(err){
       console.log(err) ;
       Nav("/home") ;
    }
   }
    const location = useLocation()
 useEffect(()=>{
   callAboutPage() ;
 },[])
    return (
        <>
            <Navbar />
            <main>
                <div className="main-cont">
                    <Link className='pyq-btn' to="/pyq">
                            <p>PYQ</p>
                        
                    </Link>
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
                        <Typewriter
                            options={{
                                strings: [`<span style="color:white">Welcome,<span style="color:#46E3FF; filter:drop-shadow(0 0 0.75rem #00D8FF)"> ${data.Name} </span>to <strong style="color:#208B81;">PageRoll!</strong> <br><br> Take a look into our Personalized and Modern <strong>Syllabus</strong> <strong>MENU</strong> for <span style="color:#46e3ff">             ${data.branch}</span> <br><br> Practice using our Personalised <strong>PYQ</strong> Dashboard.</span>`],
                                autoStart: true,
                                pauseFor: 10000000,
                                loop: false,
                                delay: 18
                            }}
                        />
                    </div>

                </div>
            </main>
        </>
    );
}

export default MainSection