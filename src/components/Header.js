import React from "react";
import logo from "../assets/econotravel-transparent-logo.png"
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <div className='header-section'>
                <img src={logo} className='logo' alt="Logo"/>
                <h1 className='main-title'>Disfruta de la experiencia Econotravel</h1>
            </div>
            <div className='navbar'>
                <Link to="/" className='navbar-link'>INICIO</Link>
                <Link to="/about" className='navbar-link'>ACERCA DE</Link>
                <Link to="/add" className='navbar-link'>AÑADIR EXPERIENCIA</Link>
            </div>

        </div>
    )
}

export default Header