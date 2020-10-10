import React from 'react';
import './style.css';

import github from '../../assets/imagens/Github.svg';
import linkedin from '../../assets/imagens/Linkedin.svg';
import condepen from '../../assets/imagens/codepen.svg';

const Contatos = () => {
    return (
        <div className="contacts">
            <div className="dados">
                <h1>Entre em Contato</h1>

                <h3>Redes Sociais</h3>
                <ul>
                    <li><a href="https://github.com/Anaju7" target="_blank"><img src={github} alt="github" /></a></li>
                    <li><a href="https://www.linkedin.com/in/ana-julia-4838201ab/" target="_blank"><img src={linkedin} alt="linkedin" /></a></li>
                    <li><a href="https://codepen.io/anaju07" target="_blank"><img src={condepen} alt="codepen" /></a></li>
                </ul>

                <h3>Email</h3>

                <p>Anajulia.anaju7@gmail.com</p>

                <h3>Fone</h3>
                <p>(81)98846-6282</p>

                <h3>Curriculo Digital</h3>
                <a href="https://ana-julia-curriculo.netlify.app/" className="curriculo" target="_blank">Curriculo</a>
            </div>
        </div>
    )
}

export default Contatos;