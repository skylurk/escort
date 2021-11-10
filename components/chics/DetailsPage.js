import React, { useEffect } from 'react'

export default function DetailsPage() {

    useEffect(() => {
        const M = window.M;
        M.AutoInit();
    })
    return (
        <div className='details-page'>
            <div className="dets-left">
                <div className="dets-nav">
                    <h2>Prev</h2>
                    <h2>Next</h2>
                </div>
            </div>
            <div className="dets-right">
                <div className="dets-name">
                    <h4>Jennifer, <span>25</span></h4>
                </div>
                <div className="dets-collapsible">
                <ul className="collapsible z-depth-0s">
                    <li>
                    {/* <div className="collapsible-header"><i class="material-icons">filter_drama</i>ABOUT</div> */}
                    <div className="collapsible-header">ABOUT</div>
                    <div className="collapsible-body">
                        <span>
                            With me by your side, you can fully relax and let yourself flow. At last, be away 
                            from your everyday issues and embark on a sensual journey. I love to listen to 
                            you and get to know you. <br /><br />
                            I have a calm, relaxed, humorous, as well as adventurous, fun, and sensual side. 
                            What we experience depends on your wishes. I like to try new things and enjoy 
                            the beautiful things in life. I am a lover who lives fully for the moment. <br /><br />
                            I have a calm, relaxed, humorous, as well as adventurous, fun, and sensual side. 
                            What we experience depends on your wishes. I like to try new things and enjoy 
                            the beautifu
                        </span>
                        </div>
                    </li>
                    <li>
                    {/* <div className="collapsible-header"><i class="material-icons">place</i>FIGURES</div> */}
                    <div className="collapsible-header">FIGURES</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    {/* <div className="collapsible-header"><i class="material-icons">whatshot</i>FIGURES</div> */}
                    <div className="collapsible-header">FIGURES</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
                </div>

                <div className="cta">
                    <h4>BOOK A DATE WITH JENNIFFER</h4>
                </div>
            </div>
        </div>
    )
}
