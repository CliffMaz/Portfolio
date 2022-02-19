import React from 'react';
import Project from '../project/Project';
import './projectList.css';
import { projects } from "../../data";
function ProjectList() {
    return (
        <div className='projectList'>
            <div className="div projectList-texts">
                <p className="projectList-title">My Projects </p>
            </div>
            <div className="projectList-list">
            {projects.map((item) => (
          <Project key={item.id} name={item.name} img={item.img} siteLink={item.siteLink} codeLink={item.codeLink} desc={item.desc} />
        ))}
                
            </div>
            
        </div>
    )
}

export default ProjectList
