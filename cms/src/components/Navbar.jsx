import './Navbar.scss';

import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    const links = [
        {label: '~/about', href: '/#about'},
        {label: '~/work', href: '/#work'},
        {label: '~/toolkit', href: '/#toolkit'},
    ];

    return (
        <header className="Navbar">
            <nav className="Navbar-nav Container">
                <Link className="Navbar-logo" to="/">
                    <span className="Code">&lt;</span>mk<span className="Design">.</span><span className="Code">/&gt;</span>
                </Link>
                <div className="Navbar-links">
                    {links.map((link) => (
                        <a key={link.href} className="Navbar-link" href={link.href}>{link.label}</a>
                    ))}
                    <a className="Navbar-link Highlight" href="/#contact">contact()</a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
