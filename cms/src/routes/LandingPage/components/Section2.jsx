import './Section2.scss';

import React from 'react';

import {TiSocialInstagram} from "react-icons/ti";
import {TiSocialFacebook} from "react-icons/ti";
import {TiSocialLinkedin} from "react-icons/ti";

function Section2() {
    const openSocialPage = (code) => {
        let url;
        switch (code) {
            case 'instagram':
                url = 'https://www.instagram.com/mgakuipers';
                break;
            case 'facebook':
                url = 'https://www.facebook.com/mgakuipers';
                break;
            case 'linkedin':
                url = 'https://www.linkedin.com/in/mgakuipers';
                break;
            default:
                url = '#';
        }
        window.open(url, '_blank');
    }

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

    return (
        <div className="Section-2">
            <div className="Section-left">
                <div className="Title">About</div>
                <div className="Content">Hi there! I'm Martijn, a {getAge('2000-06-07')}-year-old software developer
                    with a passion for building innovative solutions. Specializing in both front-end and back-end
                    development, I craft seamless web applications from end to end. My expertise includes crafting
                    intuitive user interfaces using frameworks like React and Vue.js, as well as building scalable
                    server-side architectures using Node.js and Express.js. Proficient in SQL and NoSQL databases, I
                    design robust data models and optimize performance. I thrive on solving complex problems and
                    tackling real-world challenges, constantly learning and adapting to emerging trends. A collaborative
                    team player, I enjoy working alongside talented individuals to deliver high-quality solutions that
                    exceed expectations. Let's connect and discuss how we can work together to bring your ideas to life!
                </div>
                <div className="Socials">
                    <a onClick={(event) => { window.open('mailto:mgakuipers@gmail.com', 'mail'); event.preventDefault();} } href="mailto:mgakuipers@gmail.com" target="_blank" className="Button">Mail me</a>
                    <TiSocialInstagram className="Icon" onClick={() => openSocialPage('instagram')}/>
                    <TiSocialFacebook className="Icon" onClick={() => openSocialPage('facebook')}/>
                    <TiSocialLinkedin className="Icon" onClick={() => openSocialPage('linkedin')}/>
                </div>
            </div>
            <div className="Section-right">
                <img src="./assets/images/profile_picture.jpg" alt="Profile"/>
            </div>
        </div>
    );
}

export default Section2;
