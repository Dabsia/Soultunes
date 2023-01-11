import React from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
// import logo from "../../Assets/Logo.png"
import FancyButton from "../FancyButton/FancyButton";
import { useAppDispatch } from '../../Redux/Store'
import { openModal } from '../../Redux/Actions'

const logo = require("../../Assets/Logo.png");

const Header: React.FC = (): JSX.Element => {
  
  const dispatch = useAppDispatch()

  const openTheModal = () => {
        dispatch(openModal())
        
  }
  
  const navigate = useNavigate()

  // const redirectToRequest = ():any => {
  //   navigate('/requests')
  // }

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
        <button onClick={openTheModal}>Open</button>
      </ul>
      <FancyButton
        text="Make a request"
        textColor="#191919"
        color="#FFBB01"
        width="8.339375rem"
        height="2.89875rem"
        borderColor="#000"
        // redirectToRequest = {redirectToRequest}
      />
    </nav>
  );
};

export default Header;
