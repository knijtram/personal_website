import './Section6.scss';

import {FiArrowUpRight} from "react-icons/fi";

function Section6() {
    const email = 'mgakuipers@gmail.com';

    return (
        <section id="contact" className="Section-6">
            <div className="Section-6-wrapper Container">
                <p className="Contact-kicker">04 / contact()</p>
                <h2 className="Contact-title">Let's build something that <span className="Highlight">feels</span> right.</h2>
                <div className="Contact-actions">
                    <a className="Button Light Large" href={`mailto:${email}`}>{email}<FiArrowUpRight className="Icon" aria-hidden="true"/></a>
                    <span className="Contact-note">usually replies within a day</span>
                </div>
            </div>
        </section>
    );
}

export default Section6;
