import './App.scss';

import React from 'react';
import { ReactComponent as LinkedIn } from './assets/icons/linkedin.svg';
import { ReactComponent as Facebook } from './assets/icons/facebook.svg';
import { ReactComponent as Instagram } from './assets/icons/instagram.svg';

function App() {

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

  return (
    <div className="App">
        <div className="Socials">
            <Instagram className="Instagram"  width="25px" height="25px" onClick={() => openSocialPage('instagram')}/>
            <Facebook className="Facebook"  width="25px" height="25px" onClick={() => openSocialPage('facebook')}/>
            <LinkedIn className="LinkedIn" width="25px" height="25px" onClick={() => openSocialPage('linkedin')}/>
        </div>
        <div className="Lightside">
            <div className="Title">Design</div>
            <div className="Letters">
                <div className="Letter">d</div>
                <div className="Letter">e</div>
                <div className="Letter">s</div>
                <div className="Letter">i</div>
                <div className="Letter">g</div>
                <div className="Letter">n</div>
            </div>
        </div>
        <div className="Darkside">
            <div className="Title">{'</code>'}</div>
            <div className="Letters">
                <div className="Letter">c</div>
                <div className="Letter">o</div>
                <div className="Letter">d</div>
                <div className="Letter">e</div>
            </div>
        </div>
    </div>
  );
}

export default App;
