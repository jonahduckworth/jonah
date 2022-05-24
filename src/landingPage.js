import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import me from './jonah.jpeg';

import './landingPage.css';

//const FadeLeft = styled.div`animation: .5s ${keyframes`${fadeInLeft}`}`;
//const FadeRight = styled.div`animation: 1s ${keyframes`${fadeInRight}`}`;

function MyLandingPage() {

    // initialize AOS
    useEffect(() => {
        AOS.init({ duration:2000 });
    }, []);

    return (

        <div class="container">  

            <div className='photo' data-aos='fade-right' data-aos-delay='200'>
                    <img src={me} className="photo" alt="me" />
            </div>

            <div className="content" data-aos='fade-left' data-aos-delay='1500'>
                    <h3 class="title">hi, i'm jonah</h3>
            </div>

            <div className="content" data-aos='fade-left' data-aos-delay='3000'>
                    <p>thanks for visiting my website</p>
            </div>

        </div>
        
    )
}

export default MyLandingPage;