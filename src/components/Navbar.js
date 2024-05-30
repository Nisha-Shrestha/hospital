import React from 'react'
import "./Navbar.css"
import Logo from "../assets/icon.ico"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faStethoscope,faUserNurse, faUserShield } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <header className="navbar" >
            <div className="Logo">
            <img src={Logo} className="logo" alt="Hospital logo" /> <h1>sudoEMR</h1>
            </div>

            <div className="Records">
            <FontAwesomeIcon icon={faClipboard} className="fa-icon" />
              <h1> Records</h1>
            </div>

            <div className="Doctors">
            <FontAwesomeIcon icon={faStethoscope} className="fa-icon" />
              <h1>Doctors</h1>
            </div>

            <div className="Nursing">
            <FontAwesomeIcon icon={faUserNurse} className="fa-icon" />
              <h1>Nursing</h1>
            </div>

            <div className="Admin">
            <FontAwesomeIcon icon={faUserShield} className="fa-icon" />
              <h1>Admin</h1>
            </div>
            </header>

     
      );
    }

export default Home;
