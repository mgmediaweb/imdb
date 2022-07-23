/* import React, {
  Fragment,
  useEffect,
  useRef,
  useState,
} from 'react'; */
import {
  Link,
  NavLink,
} from 'react-router-dom';
import { FiX /* , FiMenu */ } from 'react-icons/fi';
// import logo from '../../assets/images/planet.png';
import './Header.scss';

const Header = () => {
  console.log('header');

  return (
    <>
      <header>
        <div className="container d-flex">
          <Link to="/" className="logo-link">
            {/* <img src={logo} alt="Logo" className="logo-main" /> */}
            <h1>Space Travelers&apos; Hub</h1>
          </Link>

          <div
            className="movil-box"
            role="button"
            tabIndex={-1}
          >
            <FiX className="movil-box-icon" />
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/rockets">
                  Rockets
                </NavLink>
              </li>
              <li>
                <NavLink to="/missions">
                  Missions
                </NavLink>
              </li>
              <li>|</li>
              <li>
                <NavLink to="/profile">
                  My Profile
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
