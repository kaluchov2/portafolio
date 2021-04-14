import React, { useState } from 'react'
import './styles/home.scss'

export const Home = () => {
    const [darkmode,setDarkMode]=useState({
        on:true
    })
    const[idioma,setIdioma]=useState({
        ingles:true,
        espagnol:false
    })

    const [work,setWork]=useState({
        turned:false
    })

   

    const showWork = (e) => {  
        e.persist();    
        setWork({...work, turned:!work.turned});  
      } 
    return (
        <div className="body">
            
            <div className="header">
                <div className="intro"><p className="titulo">Hi!✌, My name is Mauricio and I am a student at </p>
                <div className="escom"><a href="https://www.escom.ipn.mx/htmls/oferta/isc2009.php" target="_blank"><p>ESCOM</p></a></div></div>
            </div>
            
            
            <div className="menu">
                <div className="current" onClick={showWork} >
                    <p className="titulo">Current work and projects</p>    
                </div>
                <div className={ work.turned ? "list-active" :"list-inactive" }>
                    <ul>
                        <li>Mobile application aimed at new engineering students, as my final degree work </li>
                        <li>Working at iBibaTech,  developing a platform for pricing different blinds and floors, you can find my repo at GITHUB  </li>
                        <li>Planning a platform for the administration of appointments and health server procedures. </li>
                    </ul>
                </div>
            </div>
            
            
            <div className="content">
                <div className="etc">
                    <div className="b2 tit2">
                        First Certificate in English B2 ✔
                    </div>
                    <div className="b2"> 
                        <p className="obj tit2">My Objective:</p>
                        <p>Collaborate with a company where I can develop and improve my skills in order to contribute to my growth and fulfillment of goals, as well as those of my place of job.</p>
                        <p className= "obj tit2">Short term objective:</p>
                        <p>Keep improving my ReactJS skills, and continue learning about Frontend technologies. Also finish some python courses and start digging into Data Science technologies </p>
                    </div>

                </div>
            </div>
            
            
            <div className="footer">
                <div className="about">
                    <p className="tit2 hov">About Me</p>
                    Im 22 years old, currently studying my eighth semester of computer systemas career. Next semester i will be only missing 1 subject and the second part of my final degree work. I love sports, videogames and learning about technology.
                </div>
                <div className="contact">
                        <p className="tit2 hov">Have a nice day! </p><p>Thank you for visiting my page :) ♥</p> 
                        <p>Contact me:</p>
                        <p className="tit2 hov"> m.maciasc98@gmail.com</p>
                </div>
                
            </div>
        </div>
    )
}
