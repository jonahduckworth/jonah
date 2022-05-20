import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import me from './jonah.jpeg';

import './landingPage.css';

//const FadeLeft = styled.div`animation: .5s ${keyframes`${fadeInLeft}`}`;
//const FadeRight = styled.div`animation: 1s ${keyframes`${fadeInRight}`}`;

function MyLandingPage() {

    useEffect(() => {
        AOS.init({ duration:2000 });
    }, []);

    return (

        <div class="post-container">  

            <div className='photo' data-aos='fade-right'>
                    <img src={me} className="photo" alt="me" />
            </div>

            <div className="post-content" data-aos='fade-left'>
                    <h3 class="post-title">hi, i'm jonah</h3>
                    <p>thanks for visiting my website</p>
            </div>

        </div>
        
    )
}

export default MyLandingPage;