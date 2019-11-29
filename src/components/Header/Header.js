import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.css';

function Header() {
    return (
        <header>
            <nav>
                <ul className={style.menu}>
                    <li>
                        <NavLink exact to="/" activeClassName={style.activeButton}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/page1" activeClassName={style.activeButton}>
                            Page 1
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/page2" activeClassName={style.activeButton}>
                            Page 2
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about" activeClassName={style.activeButton}>
                            About project
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
