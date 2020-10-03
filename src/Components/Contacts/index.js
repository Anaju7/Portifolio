import React from 'react';

import '../Footer/style.css';
import github from '../../assets/imagens/github.png';
import linkedin from "../../assets/imagens/linkedin.png";

const Contacts = () => {
    return (
        <div className="footer">
            <h2>Contatos</h2>

            <ul>
                <li><a href="#" target="_blank"><img src={github} alt='github' /></a></li>
                <li><a href="#" target="_blank"><img src={linkedin} alt='linkedin' /></a></li>
            </ul>
            <p>Anajulia.anaju7@gmail.com </p>

            <a href="#" download=''>Curriculo</a>
        </div>
    )
};

export default Contacts;