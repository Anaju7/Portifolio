import React from 'react';
import Style from '../header/style.css';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-menu">
            <input type="checkbox" id="btn-menu" />
            <label for="btn-menu" className="icon-menu"> &#9776;</label>

            <nav className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/potifolio">Portifolio</Link></li>
                    <li><a href="#">Contatos</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;