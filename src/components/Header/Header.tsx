import React, {useState} from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
// import logo from "../../Assets/Logo.png"
import FancyButton from "../FancyButton/FancyButton";
import { useAppSelector } from "../../Redux/Store";
import { State } from "../../Redux/Store";

const logo = require("../../Assets/Logo.png");

const Header: React.FC = (): JSX.Element => {
  
  const [isModalActive, setIsModalActive] = useState<boolean>(false)

  const showMusicComp = useAppSelector((state:State)=> state.data.showMusicComp)
  
  const toggleModal = () => {
    setIsModalActive(prevState => !prevState)
  }

  const navigate = useNavigate()

  return (
    <>
    <div className="navParent">
      <nav style={{width: (showMusicComp)? '90%' : '100%' } }>
        <img onClick={() => navigate('/')} className="logo" src={logo} alt="Logo" />
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
        <div className="navButtonContainer" >        
          <FancyButton
            text="Make a request"
            textColor="#191919"
            color="#FFBB01"
            width="8.339375rem"
            height="2.89875rem"
            borderColor="#000"
            // redirectToRequest = {redirectToRequest}
          />
        </div>
        {!isModalActive ? <i onClick={toggleModal} className="ri-menu-3-line menu"></i> :
        <i onClick={toggleModal} className="ri-close-fill menu"></i>}
      </nav>

    </div>
      {/* Responsive Nav */}
      { isModalActive && <div className="responsiveNav">
        <ul className="responsiveUl">
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
        <div className="responsiveBtnContainer" >        
          <FancyButton
            text="Make a request"
            textColor="#191919"
            color="#FFBB01"
            width="8.339375rem"
            height="2.89875rem"
            borderColor="#000"
            // redirectToRequest = {redirectToRequest}
          />
        </div>
      </div>}
    </>
  );
};

export default Header;
