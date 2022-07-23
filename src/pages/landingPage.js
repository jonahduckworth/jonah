import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import me from '../images/jonah.jpeg';

import './landingPage.css';
import '../utils/enterButton.css';

function MyLandingPage() {

    // initialize AOS
    useEffect(() => {
        AOS.init({ duration:1800 });
    }, []);

    return (
        <div className='background'>
            <div className='photo-container'>
                <div data-aos='fade-right' data-aos-delay='200'>
                    <img src={me} alt="me" />
                </div>
            </div>
            
            <div className='content-container'>
                <div className='intro'>
                    <h3 data-aos='fade-left' data-aos-delay='1200'>hi, i'm jonah</h3>
                    <p data-aos='fade-left' data-aos-delay='2200'>thanks for visiting my website</p>
                </div>
                <a data-aos='fade-up' data-aos-delay='3000' href='#' className='btn btn-white btn-animate'>click to enter</a>
            </div>
        </div>
        
    )
}

export default MyLandingPage;