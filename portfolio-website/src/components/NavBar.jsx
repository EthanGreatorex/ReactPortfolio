import { FaSun, FaMoon } from 'react-icons/fa';
import '../css/navbar.css';


function NavBar({theme, onThemeToggle}) {

    return (
        <nav className="navbar">
            <div className="navbar__theme-toggle">
                <button className="theme-toggle__button" onClick={onThemeToggle}>{theme === 'light' ? <FaMoon></FaMoon> : <FaSun></FaSun>}</button>
            </div>
            <ul className="navbar__links">
                <li className='navbar__links-link'><a href="#home">Home</a></li>
                <li className='navbar__links-link'><a href="#about">About</a></li>
                <li className='navbar__links-link'><a href="#projects">Projects</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;