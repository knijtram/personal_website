import './Navbar.scss';

import {Link} from "react-router-dom";

function Navbar() {
    const links = [
        {label: '~/about', labelShort: '~/a', href: '/#about'},
        {label: '~/experience', labelShort: '~/e', href: '/#experience'},
        {label: '~/toolkit', labelShort: '~/t', href: '/#toolkit'},
    ];

    return (
        <header className="Navbar">
            <nav className="Navbar-nav Container">
                <Link className="Navbar-logo" to="/">
                    <span className="Code">&lt;</span>mk<span className="Design">.</span><span className="Code">/&gt;</span>
                </Link>
                <div className="Navbar-links">
                    {links.map((link) => (
                        <>
                            <a key={link.href} className="Navbar-link" href={link.href}>{link.label}</a>
                            <a key={link.href} className="Navbar-link short" href={link.href}>{link.labelShort}</a>
                        </>
                    ))}
                    <a className="Navbar-link Highlight" href="/#contact">contact()</a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
