import React from 'react';
import Tilty from 'react-tilty';
import LogoImg from './Neurio.png';
import './Logo.css';

const Logo = () => {
  return(
    <div className="ma4 mt0">
      <Tilty className="Tilt br2" options={{ max : 30 }} style={{ height: 150, width: 150 }} >
       <div className="Tilt-inner pa3"> <img id='logoImg' src={LogoImg} alt='Logo' /> </div>
      </Tilty>
    </div>
  );
}

export default Logo;