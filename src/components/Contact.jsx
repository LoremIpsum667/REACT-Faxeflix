import React from "react";

import useSound from 'use-sound';

import sound from '../assets/sounds/lalolokush.mp3';
import lolo from "../assets/img/lorenzoCover.png";

import "../assets/css/AppStyle.css";

function Contact() {

  const [play] = useSound(sound);

  return (
    <div>
      <div className="H1Container">
        <h1>Contact</h1>
      </div>
      <div className="InfoContainer" onClick={play}>
        <img src={lolo} alt="heuheuheu"  className="loloSize"/>
        <div>
        <p>Salut</p>
        <p>C'est Cool</p>
        <p>En Fait Non C'est Pas Trop Cool</p>
        <p>Je Deconne, C'est Juste Trop Cool</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
