import React, { useState } from "react";
import burger from "./images/burger_icon.svg";
import "./nav.css";

function Nav() {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <nav className={isActive ? 'responsive-nav' : ''}>
        <div className="logo">Weather App</div>
        <ul className="list-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Weather</a>
          </li>
          <li>
            <a href="#">Information</a>
          </li>
        </ul>
        <img
          src={burger}
          width="40"
          className="burger-icon"
          onClick={() => setActive(!isActive)}
        />
      </nav>
    </>
  );
}

export default Nav;
