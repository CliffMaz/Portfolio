import React, {useEffect, useState} from 'react';
import './scroll.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Scroll() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.pageYOffset > 300){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        });
    };

    useEffect(()=>{
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, []);
    return (
        <div >
            { isVisible && (

                <ArrowUpwardIcon onClick={scrollToTop} className='scroll'/>
            )

                
            }
            
        </div>
    )
}

export default Scroll
