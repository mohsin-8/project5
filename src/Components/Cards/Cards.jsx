import React from 'react';
import "./Cards.css";


import AOS from 'aos';
import 'aos/dist/aos.css';

import character1 from "../../images/SVG/character 1.svg";
import character8 from "../../images/SVG/character 8.svg";
import character3 from "../../images/SVG/character 3.svg";
import character4 from "../../images/SVG/character 4.svg";
import character10 from "../../images/SVG/character 10.svg";
import character6 from "../../images/SVG/character 6.svg";

const Cards = () => {
    AOS.init({ duration: 1000 });

    return (
        <>
            <div className="container my-5" data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0">
                <h1 className='text-center py-4'>Our Services</h1>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100 aos-init aos-animate" data-aos="zoom-in-up">
                            <img src={character1} class="card-img-top" alt="al-khubz-rice" />
                            <div class="card-body">
                                <h5 class="card-title">AL-KHUBZ CHAKKI GOLD</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 aos-init" data-aos="zoom-in-up">
                            <img src={character3} class="card-img-top" alt="al-khubz-atta" />
                            <div class="card-body">
                                <h5 class="card-title">AL-KHUBZ CHAKKI ATTA</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 aos-init" data-aos="zoom-in-up">
                            <img src={character3} class="card-img-top" alt="fine-atta-khubz" />
                            <div class="card-body">
                                <h5 class="card-title">AL-KHUBZ FINE ATTA</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 aos-init" data-aos="zoom-in-up">
                            <img src={character10} class="card-img-top" alt="al-khubz-suji" />
                            <div class="card-body">
                                <h5 class="card-title">AL-KHUBZ SUJI</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100 aos-init" data-aos="zoom-in-up">
                            <img src={character6} class="card-img-top" alt="al-khubz-maida" />
                            <div class="card-body">
                                <h5 class="card-title">AL-KHUBZ MAIDA</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100 aos-init" data-aos="zoom-in-up">
                            <img src={character10} class="card-img-top" alt="al-khubz-cornflour" />
                            <div class="card-body">
                                <h5 class="card-title">AL-KHUBZ CORNFLOUR</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;