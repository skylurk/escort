import React from 'react';
import Link from 'next/link';

export default function LSectionTwo() {
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
            <div className="lst-two">
                <img src="/assets/images/landing_02.png" alt="" />
            </div>
            <div className="lst-three">
                <img src="/assets/images/slider_03.png" alt="" />
            </div>
        </div>
    )
}
