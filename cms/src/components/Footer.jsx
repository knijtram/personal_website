import './Footer.scss';

import {DateTime} from "luxon";

function Footer() {

    return (
        <footer className="Footer">
            <div className="Footer-bar Container">
                <div className="Footer-group">
                    <span><span className="Branch">●</span> main</span>
                    <span>&copy; {DateTime.now().year} Martijn Kuipers</span>
                </div>
                <div className="Footer-group">
                    <span>designed &amp; coded by hand</span>
                    <span>UTF-8</span>
                    <span>Ln 404, Col 1</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
