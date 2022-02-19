import React from 'react';
import Me from '../../img/cliff.png';
import './about.css';
function About() {
    return (
        <div className='about'>
            
            <div className='about-left'>

                    <div className='about-card'>
                    <img className='about-img' 
                        src={Me} 
                        alt=''/>
                </div>
                
                
            </div>
            <div className='about-right'>

                <h1 className='about-title'>About Me</h1>
                <p className='about-sub'>
                    It has been a journey and still is!
                </p>
                <p className='about-desc'>
                My name is Cliford Mazibuko, A software developer based in Johannesburg, South Africa.
                I'm more of a backend developer who uses either Spring Boot or Nodejs to develop 
                my backend, but I can also do frontend work using frameworks like React and Angular. 
                I'm still a work in progress and working on improving my skills as much as I can. 
                </p>

            </div>
        </div>
    )
}

export default About
