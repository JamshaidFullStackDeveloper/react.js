// import React from 'react'
import "../css/main1.css"
import Protect1 from "../img/img/smart-protect-1.jpg"
import Protect2 from "../img/img/smart-protect-2.jpg"

import Protect3 from "../img/img/smart-protect-3.jpg"

function Main1() {
  return (
    <>
    <aside className="m-contanir1">
    <h1>Smartest protection for your site</h1>
    <div className="chaild-mc">
        <div className="m1-item">
            <img src={Protect1} alt="" width="100" height="100"/>
            <h3>Anti-spam</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
        </div>
        <div className="m1-item">
            <img src={Protect2} alt="" width="100" height="100"/>
            <h3>Phishing Detect</h3>
            <p>Lorem ipsum dolor Quis minima Lorem, ipsum dolor.</p>
        </div >
        <div className="m1-item">
                <img src={Protect3} alt="" width="100" height="100"/>
            <h3>Smart-scan</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
        </div>
     </div>
 </aside>
    </>
  )
}

export default Main1
