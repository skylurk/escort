import React, { useEffect } from 'react';
import Link from 'next/link';
import DetailsPage from '../chics/DetailsPage';

export default function LSectionTwo() {

    useEffect(() => {
        const M = window.M;
        M.AutoInit();
    })
    return (
        <div className='l-section-two'>
            <div className="text-area">
                <h4>Click on a lady to learn more or make a booking.</h4>
            </div>

            <Link href='/'>
                <a>
                <div className="lst-one">
                    <img src="/assets/images/landing_01.png" alt="" />
                </div>
                </a>
            </Link>

            <a href="#modal1" className="modal-trigger">
                <div className="lst-two">
                    <img src="/assets/images/landing_02.png" alt="" />
                </div>
            </a>

            <div className="lst-three">
                <img src="/assets/images/slider_03.png" alt="" />
            </div>

            <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

            <div id="modal1" className="modal">
            <div class="modal-content">
                <DetailsPage />
                {/* <h4>Modal Header</h4>
                <p>A bunch of text</p> */}
            </div>

            </div>
        </div>
    )
}
