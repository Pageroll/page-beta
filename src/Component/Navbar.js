import React from 'react'
import Logo from './Images/Group 10.png'
import './Navbar.css'
import {AiOutlineClose} from 'react-icons/ai'

function Navbar(){

    const openMenu = ()=>{
        let e = document.querySelector(".nav-btn-inner")
        let f = document.querySelector(".one")
        let g = document.querySelector(".two")
        let h = document.querySelector(".three")
        f.style.display="block"
        g.style.display="block"
        h.style.display="block"
        e.style.visibility="visible"
        e.style.width="100px"
        
    }

    const closeMenu = ()=>{
        let e = document.querySelector(".nav-btn-inner")
        let f = document.querySelector(".one")
        let g = document.querySelector(".two")
        let h = document.querySelector(".three")
        setTimeout(()=>{
            f.style.display="none"
        g.style.display="none"
        h.style.display="none"
        }, 200)
        e.style.visibility="hidden"
        e.style.width="0px"
    }
    return(
        <>
        <div className="nav-cont">
        <nav>
            <div className="logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="nav-btn">
                <div className="ham" onClick={openMenu} >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="nav-btn-inner">
                <AiOutlineClose className='close' size='20' onClick={closeMenu}/>
                <a className='one' href="./">Home</a>
                <a className='two' href="./">About Us</a>
                <a className='three' href="./">Connect</a>
                </div>
            </div>
        </nav>
        <hr/>
    </div>
        </>

);

}

export default Navbar