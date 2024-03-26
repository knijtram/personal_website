import './Root.scss';

import React, { useState } from "react";

import videoSource from "./../assets/videos/background-overlay.mp4";
import { ReactComponent as BurgerMenu } from './../assets/icons/burger-menu.svg';
import {Link, Outlet} from "react-router-dom";

export default function Root() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <>
            <Link className="Web-title" to="/">
                <div className="Firstname">Martijn</div>
                <div className="Lastname">Kuipers</div>
            </Link>

            <BurgerMenu className="Menu-icon" onClick={() => toggleMenu()}/>
            <div className={`Menu-overlay ${isMenuOpen ? 'Show' : ''}`}>
                <video width="100%" height="auto" autoPlay loop muted>
                    <source src={videoSource} type="video/mp4" />
                </video>
                <div className="Content">
                    <div>Coming</div>
                    <div>Soon</div>
                </div>
            </div>

            <Outlet />
        </>
    )
}