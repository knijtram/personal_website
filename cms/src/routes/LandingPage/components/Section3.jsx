import './Section3.scss';

import {Fragment} from 'react';

import {FiGithub, FiLinkedin} from "react-icons/fi";

function Section3() {
    const socials = [
        {label: 'github', href: 'https://github.com/knijtram', icon: FiGithub},
        {label: 'linkedin', href: 'https://www.linkedin.com/in/mgakuipers', icon: FiLinkedin},
    ];

    function getAge(dateString) {
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const languages = ['React', 'Vue.js', 'PHP', 'SQL', 'CSS', 'HTML', 'JavaScript', 'TypeScript', 'C#', 'python', 'Java'];
    const cares = ['type', 'spacing', 'tiny details'];
    const skills = ['distributed systems', 'web development', 'software architecture', 'DSL', 'LLMs', 'Claude Code', 'Artificial Intelligence', 'docker', 'PWA', 'Laravel'];
    function CodeContent({ items = [] }) {
        const isSingleItem = items.length === 1;

        return (
            <>
                {!isSingleItem && <span>[</span>}
                {items.map((item, index) => (
                    <Fragment key={item}>
                        <span className="String">"{item}"</span>
                        {index < items.length - 1 ? ", " : ""}
                    </Fragment>
                ))}
                {!isSingleItem && <span>]</span>}
            </>
        );
    }

    return (
        <section id="about" className="Section-3">
            <div className="Section-3-wrapper Container">
                <div className="Section-header">
                    <h2><span className="Number">01</span>About</h2>
                    <p className="Caption">
                        whoami
                        <span className="QuestionMark QuestionMark-1">?</span>
                        <span className="QuestionMark QuestionMark-2">?</span>
                        <span className="QuestionMark QuestionMark-3">?</span>
                        <span className="QuestionMark QuestionMark-4">?</span>
                        <span className="QuestionMark QuestionMark-5">?</span>
                    </p>
                </div>
                <div className="About">
                    <figure className="About-portrait">
                        <img src="./assets/images/profile_picture.jpg" alt="Portrait of Martijn Kuipers"/>
                        <figcaption className="About-portrait-caption">
                            <span>profile_picture.jpg</span>
                            <span className="Size">480 x 720</span>
                        </figcaption>
                    </figure>
                    <div className="About-content">
                        <p className="About-lead">Hi, I am Martijn. I like it when something works well <span className="Highlight">and</span> looks good, so I do both.</p>
                        <p className="About-text">I'm a {getAge('2000-06-07')}-year-old software developer with a passion for
                            building innovative solutions. Specializing in both front-end and back-end development, I craft
                            seamless web applications from end to end. I thrive on solving complex problems and enjoy working
                            alongside talented people to deliver high-quality work.
                        </p>
                        <div className="Code-block">
                            <div><span className="Keyword">const</span> <span className="Name">martijn</span> = {'{'}</div>
                            <div>{'  role:   '}<span className="String">"Software Developer"</span>,</div>
                            <div>{'  based:  '}<span className="String">"Drunen, NL"</span>,</div>
                            <div>{'  writes: '}{ CodeContent({ items: languages }) },</div>
                            <div>{'  cares:  '}{ CodeContent({ items: cares }) },</div>
                            <div>{'  skills: '}{ CodeContent({ items: skills }) },</div>
                            <div>{'};'}</div>
                        </div>
                        <div className="About-socials">
                            {socials.map((social) => (
                                <a key={social.label} className="Button Outline Small" href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                                    <social.icon className="Icon" aria-hidden="true"/>{social.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section3;
