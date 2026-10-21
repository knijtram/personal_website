import './Section1.scss';

import {FiArrowRight} from "react-icons/fi";

function Section1() {
    const lineNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

    return (
        <section id="top" className="Section-1">
            <div className="Section-1-wrapper Container">
                <div className="Hero">
                    <div className="Hero-lineNumbers" aria-hidden="true">
                        {lineNumbers.map((number) => (
                            <div key={number}>{number}</div>
                        ))}
                    </div>
                    <div className="Hero-content">
                        <p className="Hero-kicker">{'// Martijn Kuipers, developer & designer'}</p>
                        <h1 className="Hero-title">
                            I write <span className="Hero-title-code"><span className="Brace">{'{'}</span>code<span className="Brace">{'}'}</span></span><br/>
                            and push <span className="Hero-title-pixels">
                                pixels
                                <span className="Handle TopLeft" aria-hidden="true"></span>
                                <span className="Handle TopRight" aria-hidden="true"></span>
                                <span className="Handle BottomLeft" aria-hidden="true"></span>
                                <span className="Handle BottomRight" aria-hidden="true"></span>
                                <span className="Size" aria-hidden="true">412 × 104</span>
                            </span>
                        </h1>
                        <p className="Hero-text">I build websites and interfaces where the code is clean and the details are right. Somewhere between the terminal and the canvas is where I like to work.</p>
                        <div className="Hero-buttons">
                            <a className="Button Primary" href="#work">git log --work<FiArrowRight className="Icon" aria-hidden="true"/></a>
                            <a className="Button Outline" href="#contact">say hello</a>
                        </div>
                    </div>
                </div>

                <div className="Preview">
                    <div className="Preview-bar">
                        <span className="Dot Dot-Red"></span>
                        <span className="Dot Dot-Yellow"></span>
                        <span className="Dot Dot-Green"></span>
                        <span className="Filename">Button.tsx</span>
                        <span className="Label">preview</span>
                    </div>
                    <div className="Code-block Preview-code">
                        <div><span className="Keyword">export const</span> <span className="Name">Button</span> = () =&gt; (</div>
                        <div>{'  '}&lt;<span className="Name">button</span></div>
                        <div>{'    '}radius=<span className="String">"999"</span></div>
                        <div>{'    '}padding=<span className="String">"14 28"</span></div>
                        <div>{'    '}weight=<span className="String">"600"</span>&gt;</div>
                        <div>{'    '}Ship it</div>
                        <div>{'  '}&lt;/<span className="Name">button</span>&gt;</div>
                        <div>)<span className="Cursor"></span></div>
                    </div>
                    <div className="Preview-canvas">
                        <div className="Preview-canvas-element">
                            <span className="Measure Width" aria-hidden="true"><span className="Line"></span>164<span className="Line"></span></span>
                            <span className="Preview-button">Ship it</span>
                            <span className="Measure Height" aria-hidden="true"><span className="Line"></span>52<span className="Line"></span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section1;
