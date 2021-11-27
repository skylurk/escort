import React, { useEffect } from 'react'

export default function DetailsPage() {

    useEffect(() => {
        const M = window.M;
        M.AutoInit();
    })
    return (
        <div className='details-page'>
            <div className="dets-left">
            <img src="/assets/images/landing_03.png" alt="" />

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
                    <div className="collapsible-header">Alexandra ON HERSELF</div>
                    <div className="collapsible-body"><span>Hey! Bei mir findest Du all das, was im Leben Spaß macht. Magst Du mit mir in die Oper? Oder ins Theater? Dazu ein gutes Dinner und französischer Wein? Dann lass uns ein Date arrangieren! Mit mir an Deiner Seite hast Du eine Partnerin, die Dir zuhört. Die Deine Wünsche erfüllt und das Beste aus unserer gemeinsamen Zeit macht. Ich liebe die Ferne und suche einen Gentleman der die schönen Orte der Welt, mit mir erkunden will. Am Strand auf einer Insel. Wir beide ganz privat! Oder tief in den Schweizer Alpen, romantisch vor dem Kamin. Ich freue mich riesig Deine Träume bald wahrzumachen!</span></div>
                    </li>
                    <li>
                    {/* <div className="collapsible-header"><i class="material-icons">whatshot</i>FIGURES</div> */}
                    <div className="collapsible-header">ABOUT ALEXANDRA</div>
                    <div className="collapsible-body"><span>Alexandra ist für mich eine höfliche und fantastische Escort Lady, welche ganz genau weiß, wie Sie unseren Kunden den Kopf verdreht. Ich war überrascht, wie Sie beim Shooting mit der Kamera spielte und dabei stets professionell agierte. Diese Dame hat einfach Klasse! Mit Alexandra haben wir eine Escort Lady gefunden, welche Lebensfreude und Sexappeal, mit Leichtigkeit an Ihren Partner weitergibt. Diese Kombination aus Spaß und purer Erotik macht Alexandra zu einer wundervollen Escort Dame International.</span></div>
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
