import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from './logo.png'

export default function Nav() {
    const [dataVisible, setDataVisible]=React.useState(false)
    function toggleNav(){
        setDataVisible(prevState=>!prevState)
    }
    return (
        <header>
            <div className="logo">
                <h1>Tenzies</h1>
            </div>

            <button 
                className="nav-toggle"
                onClick={toggleNav}
            >
                <img src={logo} alt="hamburger-logo" />
            </button>

            <nav className="nav">
                <ul id="nav-links" data-visible={dataVisible} className="nav--links">
                    <li className="active">
                        <Link onClick={toggleNav} className="link" to="/">
                            <span area-hidden="true">00</span>Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleNav} className="link" to="/about">
                            <span area-hidden="true">01</span>About
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleNav} className="link" to="/rules">
                            <span area-hidden="true">02</span>Rules
                        </Link>
                    </li>
                    <li>
                        <Link onClick={toggleNav} className="link" to="/contact">
                            <span area-hidden="true">03</span>Feedback
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
