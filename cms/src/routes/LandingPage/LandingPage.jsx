import './LandingPage.scss';

import React from 'react';

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

function LandingPage() {
  return (
    <div className="App">
        <div className="App-loadingWrapper">
            <div className="App-loadingWrapper-backgrounds">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="App-loadingWrapper-textsWrapper">
                <div className="App-loadingWrapper-texts">
                    <div>Hi!</div>
                    <div>I'm</div>
                    <div>
                        <div>Martijn</div>
                        <div>Kuipers</div>
                    </div>
                </div>
            </div>
        </div>
        <Section1/>
        <div className="Section-separatorTop"></div>
        <Section2/>
        <div className="Section-separatorBottom"></div>
        <Section3/>
    </div>
  );
}

export default LandingPage;
