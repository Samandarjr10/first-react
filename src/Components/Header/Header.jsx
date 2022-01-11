import React from "react";
import "./Header.scss"
import logo from "../../Assets/Images/header-logo.svg"
import Navigator from "../Nav/Nav";

function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <a href="#">
                        <img src={logo} alt="" />
                    </a>
                    <Navigator/>
                </div>

            </header> 
        </>
    )
}
    
export default Header;