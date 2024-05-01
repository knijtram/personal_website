import './Section1.scss';

import React from 'react';
import Spline from "@splinetool/react-spline";

function Section1() {

  return (
    <div className="Section-1">
        <div className="Quote">8 Billion People to Impress</div>
        <Spline className="Earth-animation" scene="https://prod.spline.design/lZ0phsmZGuR1mLDM/scene.splinecode"/>
        <div className="Text-patternWrapper">
            <div className="Text-pattern"></div>
        </div>
    </div>
  );
}

export default Section1;
