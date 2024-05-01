import './Footer.scss';

import React from 'react';
import {DateTime} from "luxon";

function Navbar() {

    return (
        <>
            <div className="Section-separatorTop"></div>
            <div className="Footer">
                <div>&copy; 2000 - {DateTime.now().year} | Martijn Kuipers</div>
            </div>
        </>
    );
}

export default Navbar;
