import React from "react";

import { Link } from "react-router-dom";
import { MyRoutes } from "../Router";

import useSound from "use-sound";

import sound from "../assets/sounds/pornhub.mp3";
import lolosound from "../assets/sounds/lalolokush.mp3";

import "../assets/css/AppStyle.css";

const Header = () => {
  const [play] = useSound(sound);
  const [playTwo] = useSound(lolosound);
  return (
    <div>
      <div className="HeaderPosition">
        <ul className="HeaderContainer">
          <li>
            <Link to={MyRoutes.LIST}>List</Link>
          </li>
          <li>
            <Link to={MyRoutes.HOME} onClick={play}>
              Home
            </Link>
          </li>
          <li>
            <Link to={MyRoutes.CONTACT} onClick={playTwo}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
