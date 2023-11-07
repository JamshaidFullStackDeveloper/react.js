// import React from 'react'
import "../css/header.css"
import logo from "../img/img/logo.png"
// import icon from "../icon/font-awesome-4.7.0/css/font-awesome.css"
function Header() {
    return (
        <>
            <section>
                <div className="body">

                    <div className="h-contanir">
                        <div className="h-item1">
                            <img src={logo} alt="logo" width="100" height="100" />
                            <p >Get Early Access</p>
                        </div>
                        <h1>A New Way  To  Start Business</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum molestiae neque aperiam laboriosam, facere provident ipsam qui. Libero maxime</p>
                        <button className="btn"> Get started</button>
                    </div>

                    


                </div>
            </section>
        </>
    )
}

export default Header

