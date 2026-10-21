import './Section5.scss';

import {useRef, useState} from 'react';

import {FiMousePointer} from "react-icons/fi";

function Section5() {
    const codeTools = ['React', 'Vue.js', 'JavaScript', 'HTML', 'CSS / animation', 'PHP', 'SQL', 'C#', 'Python', 'Java'];
    const designTools = ['Typography', 'Layout & grids', 'Motion', 'Prototyping', 'UI / UX'];

    const [isSpinning, setIsSpinning] = useState(false);
    const reelFonts = ['Display', 'Mono', 'Serif', 'Display', 'Mono', 'Serif', 'Display'];

    const prototypeRef = useRef(null);
    const [prototypeSize, setPrototypeSize] = useState('');
    const handles = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'];

    // Measure on hover so the label shows the chip's real size at any screen width
    const measurePrototype = () => {
        const {offsetWidth, offsetHeight} = prototypeRef.current;
        setPrototypeSize(`${offsetWidth} × ${offsetHeight}`);
    };

    const [isClicking, setIsClicking] = useState(false);

    const startClick = () => {
        if (!isClicking) {
            setIsClicking(true);
        }
    };

    const [isMotionHovered, setIsMotionHovered] = useState(false);
    const [isMoving, setIsMoving] = useState(false);

    const startMotion = () => {
        setIsMotionHovered(true);
        setIsMoving(true);
    };

    // Only stop at the end of a loop, so the pulse never cuts off halfway
    const finishMotionLoop = () => {
        if (!isMotionHovered) {
            setIsMoving(false);
        }
    };

    const startSpin = () => {
        if (!isSpinning) {
            setIsSpinning(true);
        }
    };

    function renderToolItem(tool) {
        if (tool.toLowerCase() === 'typography') {
            return (
                <li key={tool} className="Typography" onMouseEnter={startSpin} onClick={startSpin}>
                    <div className="Typography-window">
                        <div className={`Typography-reel ${isSpinning ? 'Spin' : ''}`} onAnimationEnd={() => setIsSpinning(false)}>
                            {reelFonts.map((font, index) => (
                                <span key={index} className={font} aria-hidden={index > 0}>{tool}</span>
                            ))}
                        </div>
                    </div>
                </li>
            );
        }
        if (tool.toLowerCase() === 'layout & grids') {
            return <li key={tool} className="Layout">{tool}</li>;
        }
        if (tool.toLowerCase() === 'motion') {
            return (
                <li key={tool} className={`Motion ${isMoving ? 'Animate' : ''}`} onMouseEnter={startMotion} onMouseLeave={() => setIsMotionHovered(false)} onClick={() => setIsMoving(true)} onAnimationIteration={finishMotionLoop}>
                    {tool}
                </li>
            );
        }
        if (tool.toLowerCase() === 'prototyping') {
            return (
                <li key={tool} ref={prototypeRef} className="Prototyping" onMouseEnter={measurePrototype}>
                    {tool}
                    <span className="Selection" aria-hidden="true">
                        {handles.map((handle) => (
                            <span key={handle} className={`Handle ${handle}`}></span>
                        ))}
                        <span className="Size">{prototypeSize}</span>
                    </span>
                </li>
            );
        }
        if (tool.toLowerCase() === 'ui / ux') {
            return (
                <li key={tool} className={`Interface ${isClicking ? 'Clicking' : ''}`} onMouseEnter={startClick} onClick={startClick}>
                    <span className="Interface-rippleClip" aria-hidden="true">
                        <span className="Ripple"></span>
                    </span>
                    {tool}
                    <FiMousePointer className="Cursor" aria-hidden="true" onAnimationEnd={() => setIsClicking(false)}/>
                </li>
            );
        }

        return <li key={tool}>{tool}</li>;
    }

    return (
        <section id="toolkit" className="Section-5">
            <div className="Section-5-wrapper Container">
                <div className="Section-header">
                    <h2><span className="Number">03</span>Toolkit</h2>
                    <p className="Caption">two halves, one brain</p>
                </div>
                <div className="Toolkit">
                    <div className="Toolkit-card">
                        <div className="Toolkit-card-header">
                            <h3 className="Toolkit-card-title Code">/code</h3>
                            <span className="Toolkit-card-caption">logic, structure</span>
                        </div>
                        <ul className="Toolkit-card-list Code">
                            {codeTools.map((tool) => (
                                <li key={tool}>{tool}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="Toolkit-card">
                        <div className="Toolkit-card-header">
                            <h3 className="Toolkit-card-title Design">Design</h3>
                            <span className="Toolkit-card-caption">feel, rhythm</span>
                        </div>
                        <ul className="Toolkit-card-list Design">
                            {designTools.map((tool) => (
                                renderToolItem(tool)
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section5;
