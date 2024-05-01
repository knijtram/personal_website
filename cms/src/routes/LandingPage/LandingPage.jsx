import './LandingPage.scss';

import React from 'react';

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

function LandingPage() {
  return (
    <div className="App">
        <Section1/>
        <div className="Section-separatorTop"></div>
        <Section2/>
        <div className="Section-separatorBottom"></div>
        <Section3/>
    </div>
  );
}

export default LandingPage;
