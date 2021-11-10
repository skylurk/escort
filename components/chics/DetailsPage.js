import React, { useEffect } from 'react'

export default function DetailsPage() {

    useEffect(() => {
        const M = window.M;
        M.AutoInit();
    })
    return (
        <div className='details-page'>
            <div className="dets-left"></div>
            <div className="dets-right">
                <div className="dets-name">
                    <h4>Jennifer, <span>25</span></h4>
                </div>
                <div className="dets-collapsible">
                <ul className="collapsible z-depth-0s">
                    <li>
                    {/* <div className="collapsible-header"><i class="material-icons">filter_drama</i>ABOUT</div> */}
                    <div className="collapsible-header">ABOUT</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
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
            </div>
        </div>
    )
}
