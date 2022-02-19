import React from 'react';
import Button from '@material-ui/core/button'
import './project.css';
function Project({name, img, siteLink, codeLink, desc}) {
    return (
        <div class="card">
  <div class="content">
    <div class="front" >
      <h2 className="front-text">
          {name}
      </h2>
      
        <img src={img} open="uc" alt="" className="card-img" />
    </div>
    <div class="back">
        <div className="back-desc">
            {desc}
        </div>
        <div className="back-buttons">
            <Button variant="outlined" className="backbtn" href={siteLink}>View Site</Button>
            <Button variant="outlined" className="backbtn" href={codeLink}>View Code</Button>
        </div>
    </div>
  </div>
</div>
    )
}

export default Project
