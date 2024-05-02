import './Navbar.scss';

import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as BurgerMenu} from './../assets/icons/burger-menu.svg';
import videoSource from "../assets/videos/background-overlay.mp4";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <>
            <div className="Navbar">
                <Link className="Navbar-title" to="/">
                    <div className="Firstname">Martijn</div>
                    <div className="Lastname">Kuipers</div>
                </Link>
                <BurgerMenu className="Navbar-menuIcon" onClick={() => toggleMenu()}/>
            </div>

            <div className={`Menu-overlay ${isMenuOpen ? 'Show' : ''}`}>
                <video width="100%" height="auto" autoPlay loop muted>
                    <source src={videoSource} type="video/mp4"/>
                </video>
                <div className="Content">
                    <div>Coming</div>
                    <div>Soon</div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
