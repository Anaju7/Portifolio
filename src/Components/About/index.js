import React from 'react';
import '../About/style.css';

import img from '../../assets/imagens/julia.jpeg';

const About = () => {
    return (
        <div className="container" >
            <div className="about">
                <img className="img" src={img} alt="" />
                <h1><strong>&lt; </strong>Ana Julia<strong> /&gt;</strong></h1>
                <p>Hello meu nome é Ana Julia,
                     sou estudante de Front-End. Gosto muito de filmes e series e de estar junto da minha familia e amigos, sou extremamente curiosa procuro sempre aprender coisas novas e me reinventar, Estou no inicio da minha carreira e tenho muito potencial para se aflorar.</p>
            </div>
        </div>
    )
};

export default About;