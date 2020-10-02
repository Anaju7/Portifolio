import React from 'react';
import Style from '../header/style.css'

const Header = () => {
    return (
        <div className="header-menu">
            <input type="checkbox" id="btn-menu" />
            <label for="btn-menu" className="icon-menu"> &#9776;</label>

            <nav className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Portifolio</a></li>
                    <li><a href="#">Contatos</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;