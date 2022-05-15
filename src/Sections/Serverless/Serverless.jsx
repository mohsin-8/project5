import React from 'react';
import "./Serverless.css";
import Cards from '../../Components/Cards/Cards';
import Footer from '../../Components/Footer/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

import character from "../../images/SVG/character 2.svg";
import mobile_girl from "../../images/mobile_girl.gif";

const Serverless = () => {
    AOS.init({ duration: 2000 });

    return (
        <>
            <div id='serverless' className="container my-5">
                <div className="serverless" data-aos="fade-up">
                    <div className="serverless_text">
                        <h2>
                            Build and run applications without thinking about servers
                        </h2>
                        <p>
                            AWS offers technologies for running code, managing data, and integrating applications,
                            all without managing servers. Serverless technologies feature automatic scaling,
                            built-in high availability, and a pay-for-use billing model to increase agility and
                            optimize costs. These technologies also eliminate infrastructure management tasks like
                            capacity provisioning and patching, so you can focus on writing code that serves your customers.
                            Serverless applications start with AWS Lambda, an event-driven compute service natively
                            integrated with over 200 AWS services and software as a service (SaaS) applications.
                        </p>
                    </div>
                    <div className="serverless_img">
                        <img src={character} width="250px" alt="character" />
                    </div>
                </div>
            </div>

            <div id='Resources' className='container my-5'>
                <div className="newDiv" data-aos="zoom-in">
                    <div className="newDiv_img">
                        <img src={mobile_girl} width="400px" alt="" />
                    </div>
                    <div className="newDiv_text">
                        Eliminate operational overhead so your teams can release quickly, <br /> get feedback, and iterate to get to market faster.
                    </div>
                </div>
            </div>

            <div className="container my-5" id='docs'>
                <Cards />
            </div>

            <Footer />

        </>
    )
}

export default Serverless;