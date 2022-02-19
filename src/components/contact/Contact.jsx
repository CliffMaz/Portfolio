import React from 'react';
import './contact.css';
import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';


  

function Contact() {




    return (
        <div className="c">
      
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <Phone className="c-icon" ></Phone>
              +27 67 017 3408
            </div>
            <div className="c-info-item">
               <Email></Email>
               <a href="mailto:cliff.mz18@gmail.com" target="_blank" class="highlight-link">cliff.mz18@gmail.com</a>
              
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing.
          </p>
          
        </div>
      </div>
    </div>
    )
}

export default Contact
