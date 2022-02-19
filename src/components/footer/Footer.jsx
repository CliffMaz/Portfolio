import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import './footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-copy">
                Cliford Mazibuko &#169; 2022. All rights reserved.
            </div>
            <div className="footer-social">
                <a  href='https://github.com/CliffMaz' target='_blank'><GitHubIcon className='footer-icons'/></a>
                <a  href='https://www.instagram.com/cliff_maz/' target='_blank'><InstagramIcon className='footer-icons'/></a>
                <a  href='https://github.com/CliffMaz' target='_blank'><TwitterIcon className='footer-icons'/></a>
                <a  href='https://www.linkedin.com/in/cliford-mazibuko-00aa31160/' target='_blank'><LinkedInIcon className='footer-icons'/></a>
                <a  href='https://www.facebook.com/cliford.mazibuko/' target='_blank'><FacebookIcon className='footer-icons'/></a>
            </div>
        </div>
    )
}


export default Footer
