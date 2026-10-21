import './Section4.scss';

import {useState} from 'react';

function Section4() {
    const [log, setLog] = useState('career');

    const career = [
        {
            hash: 'a3f9c1e',
            years: '2020 to now',
            duration: Math.floor((Date.now() - new Date('2020-01-01')) / (1000 * 60 * 60 * 24 * 365)) + ' years',
            role: 'Junior Software Developer',
            company: 'Direct-effect, Drunen',
            text: 'Developing software enhancements in PHP, SQL, JavaScript and Vue.js, working closely in a team and directly with customers.',
            tag: 'HEAD',
        },
        {
            hash: '7d02b4a',
            years: '2023 to 2024',
            duration: '1 year',
            role: 'Intern Web Development',
            company: 'The Line, Nieuwkuijk',
            text: 'During my internship, I developed software enhancements and improved the UI/UX design across the platform. My primary deliverable was creating a dedicated social media connector for CreationHub, enabling users to schedule social posts, review comments, and manage a full calendar view of planned and published content.',
            tag: 'merged',
        },
        {
            hash: 'e81c5f0',
            years: '2022 to 2023',
            duration: '1 year',
            role: 'Intern Web Development',
            company: 'Club-assistent, Drunen',
            text: 'Developed a full replacement for the existing application by building a new Progressive Web Application (PWA) in Vue.js, along with delivering general software enhancements and UI/UX improvements.',
            tag: 'merged',
        },
        {
            hash: '5c7a2d8',
            years: '2015 to 2018',
            duration: '3 years',
            role: 'DKW Employee',
            company: 'Jumbo, Drunen',
            text: 'Customer interaction and relationship management, and a lot of practice in communication skills.',
            tag: 'merged',
        },
        {
            hash: '0b4d9e2',
            years: '2013 to now',
            duration: Math.floor((Date.now() - new Date('2013-01-01')) / (1000 * 60 * 60 * 24 * 365)) + ' years',
            role: 'Trainer / Coach',
            company: 'Mixed Hockey Club Drunen',
            text: 'Where it all started: coaching kids aged 4 to 18, learning how to lead, communicate well, motivate players, and have fun working as a team.',
            tag: 'init',
        },
    ];

    const education = [
        {
            hash: 'f42e8b1',
            years: '2025 to 2027',
            duration: '2 years',
            role: 'Master of Science, Computer Science & Engineering',
            company: 'Technische Universiteit Eindhoven',
            text: 'System architecture and distributed systems.',
            tag: 'HEAD',
        },
        {
            hash: '9a1d3c7',
            years: '2024 to 2025',
            duration: '6 months',
            role: 'Pre-master Computer Science',
            company: 'Technische Universiteit Eindhoven',
            tag: 'merged',
        },
        {
            hash: 'c05b6e3',
            years: '2020 to 2024',
            duration: '4 years',
            role: 'Bachelor, Computer Software Engineering',
            company: 'Avans Hogeschool',
            tag: 'merged',
        },
        {
            hash: '3e7f0a9',
            years: '2019 to 2020',
            duration: '1 year',
            role: 'Bachelor of Science, Computer Science and Engineering',
            company: 'Technische Universiteit Eindhoven',
            tag: 'merged',
        },
        {
            hash: 'd6c2914',
            years: '2017 to 2019',
            duration: '2 years',
            role: 'VWO',
            company: "d'Oultremontcollege",
            tag: 'merged',
        },
        {
            hash: '1b8e5f4',
            years: '2012 to 2017',
            duration: '5 years',
            role: 'HAVO',
            company: "d'Oultremontcollege",
            tag: 'init',
        },
    ];

    const logs = {
        career: {title: 'Work', items: career},
        education: {title: 'Education', items: education},
    };

    return (
        <section id="work" className="Section-4">
            <div className="Section-4-wrapper Container">
                <div className="Section-header">
                    <h2><span className="Number">02</span><span key={log} className="Work-title">{logs[log].title}</span></h2>
                    <div className="Work-toggle" role="group" aria-label="Show work or education">
                        <span className="Work-toggle-command">git log --oneline</span>
                        {Object.keys(logs).map((key) => (
                            <button key={key} type="button" className={`Work-toggle-option ${log === key ? 'Active' : ''}`} aria-pressed={log === key} onClick={() => setLog(key)}>--{key}</button>
                        ))}
                    </div>
                </div>
                <ol key={log} className="Work">
                    {logs[log].items.map((job, index) => (
                        <li key={job.hash} className="Work-item">
                            <div className="Work-item-meta">
                                <span className="Dot-Hash-wrapper">
                                    <span className={`Dot ${index === 0 ? 'Active' : ''}`} aria-hidden="true"></span>
                                    <span className="Hash">{job.hash}</span>
                                </span>
                                <span className="Years-wrapper">
                                    <span className="Years">{job.years}</span>
                                    <span className="Duration">{job.duration}</span>
                                </span>
                            </div>
                            <div className="Work-item-content">
                                <h3 className="Work-item-title">{job.role} <span className="Company">@ {job.company}</span></h3>
                                {job.text && <p className="Work-item-text" dangerouslySetInnerHTML={{ __html: job.text }} />}
                            </div>
                            <span className="Chip">{job.tag}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default Section4;
