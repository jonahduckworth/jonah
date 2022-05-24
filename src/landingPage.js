import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import me from './jonah.jpeg';

import './landingPage.css';
import './enterButton.css';

function MyLandingPage() {

    // initialize AOS
    useEffect(() => {
        AOS.init({ duration:1800 });
    }, []);

    return (

        <div class='container'>  

            <div className='photo' data-aos='fade-right' data-aos-delay='200'>
                    <img src={me} className="photo" alt="me" />
            </div>

            <div className='content' data-aos='fade-left' data-aos-delay='1200'>
                    <h3 class='title'>hi, i'm jonah</h3>
            </div>

            <div className='content' data-aos='fade-left' data-aos-delay='2200'>
                    <p>thanks for visiting my website</p>
            </div>

            <div class='enter' data-aos='fade-up' data-aos-delay='3000'>
                <a href='#' class='btn btn-white btn-animate'>click to enter</a>
            </div>
            
        </div>
        
    )
}

export default MyLandingPage;