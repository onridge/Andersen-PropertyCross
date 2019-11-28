import React from "react";
import {Link} from "react-router-dom";
import style from "./Header.css"

function Header() {
    return(
        <header>
            <nav>
                <ul className={style.menu}>
                    <li>
                        <Link to={'/'}> Home </Link>
                    </li>
                    <li>
                        <Link to={'/page1'}> Page 1 </Link>
                    </li>
                    <li>
                        <Link to={'/page2'}> Page 2 </Link>
                    </li>
                    <li>
                        <Link to={'/about'}> About project </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;