import { Link } from 'react-router-dom';
import { FiMenu, FiSearch } from 'react-icons/fi';
import logo from '../../assets/images/logo.svg';
import './Header.scss';

const Header = () => (
  <>
    <header>
      <div className="container d-flex">
        <Link to="/">
          <img src={logo} alt="IMDB Logo" className="logo-main" />
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/">
                <FiSearch className="iconNav" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FiMenu className="iconNav" />
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  </>
);

export default Header;
