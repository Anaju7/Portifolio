import React from 'react';
import './style.css';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-menu">
            <input type="checkbox" id="btn-menu" />
            <label for="btn-menu" className="icon-menu"> &#9776;</label>

            <nav className="menu">
                <ul>
                    <li><Link exact to="/">Home</Link></li>
                    <li><Link to='/portifolio'>Portifolio</Link></li>
                    <li><Link to="/contatos">Contatos</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;