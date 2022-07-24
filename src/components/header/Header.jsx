import {
  Link,
  NavLink,
} from 'react-router-dom';
// import { FiX , FiMenu } from 'react-icons/fi';
import logo from '../../assets/images/logo.svg';
import './Header.scss';

const Header = () => (
  <>
    <header>
      <div className="container d-flex">
        <Link to="/">
          <img src={logo} alt="IMDB Logo" className="logo-main" />
        </Link>

        <Link to="/detail/tt1375666">detail</Link>

        <nav>
          <ul>
            <li>
              <NavLink to="/rockets">Rockets</NavLink>
            </li>
            <li>
              <NavLink to="/missions">Missions</NavLink>
            </li>
            <li>
              <NavLink to="/profile">My Profile</NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  </>
);

export default Header;
