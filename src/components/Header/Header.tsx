import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
// import logo from "../../Assets/Logo.png"
import FancyButton from "../FancyButton/FancyButton";

const logo = require("../../Assets/Logo.png");

const Header: React.FC = (): JSX.Element => {
  

  return (
    <nav>
      <img className="logo" src={logo} alt="Logo" />
      <ul>
        <li>
          <NavLink className={({ isActive }) =>
              isActive ? 'activeLink' : "notActiveLink"
            } to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink  to="/soundtracks" className={({ isActive }) =>
              isActive ? 'activeLink' : "notActiveLink"
            } >
            Soundtracks
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
              isActive ? 'activeLink' : "notActiveLink"
            } to="/requests">
            Request
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
              isActive ? 'activeLink' : "notActiveLink"
            } to="/about">
            About
          </NavLink>
        </li>
      </ul>
      <FancyButton
        text="Make a request"
        textColor="#191919"
        color="#FFBB01"
        width="8.339375rem"
        height="2.89875rem"
        borderColor="#000"
      />
    </nav>
  );
};

export default Header;
