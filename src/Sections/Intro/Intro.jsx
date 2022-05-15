import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import "./Intro.css";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Intro = () => {
    Aos.init({ duration: 2000 });
    return (
        <>
            <div className='background_img'>
                <Navbar />

                <div className="py-5 d-flex justify-content-center align-items-center w-100">
                    <div data-aos="fade-right" className="container intro my-5">
                        <h1>A better way to grow your <br /> creative business</h1>
                        <p>Deploy Secure, Reliable, & Scalable Websites, Apps or Processes with Free <strong>Cloud</strong> Computing.</p>
                        <button className='btn btn-info'>Become a member?</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;