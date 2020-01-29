import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

function Header() {
    return (
        <header>
            <nav>
                <ul className={styles.menu}>
                    <li className={styles.elem}>
                        <NavLink exact to="/" className={styles.menuButton}>
                            PropertyCross
                        </NavLink>
                    </li>
                    <li className={styles.elem}>
                        <NavLink to="/favorites" className={styles.menuButton}>
                            Favorites
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
