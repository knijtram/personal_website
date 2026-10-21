import './Error.scss';

import {Link} from "react-router-dom";
import {FiArrowRight} from "react-icons/fi";

export default function Error() {
    return (
        <>
            <div className="Error-wrapper Container">
                <p className="Error-kicker">404 / page not found</p>
                <div className="Error-title">Oops...</div>
                <div className="Error-subtitle">Seems like this page doesn't exist</div>
                <Link className="Button Primary" to="/">cd ~<FiArrowRight className="Icon" aria-hidden="true"/></Link>
            </div>
        </>
    )
}
