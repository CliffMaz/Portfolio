import React from 'react'
import './skill.css'

function Skill() {
    return (
        <div className='skill'>
            <div className="skill-title">
                <h1>Skills</h1>
                
            </div>
            <div className="skill-body">

                <div className="skill-lang">
                    <h2 className='skill-heading'>LANGUAGES</h2>
                    <h3>Java</h3>
                    <h3>JavaScript</h3>
                    
                </div>
                <div className="skill-frame">
                    <h2 className='skill-heading'>FRAMEWORKS</h2>
                    <h3>Spring Boot</h3>
                    <h3>Node</h3>
                    <h3>Angular</h3>
                    <h3>React</h3>
                    <h3>Wordpress</h3>
                </div>
                <div className="skill-tools">
                    <h2 className='skill-heading'>TOOLS</h2>
                    <h3>Git & Github</h3>
                    <h3>Chrome Dev tools</h3>
                    <h3>Postman</h3>
                </div>
            </div>
        </div>
    )
}

export default Skill
