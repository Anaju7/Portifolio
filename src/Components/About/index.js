import React from 'react';
import '../About/style.css';

import img from '../../assets/imagens/julia.jpeg';

const About = () => {
    return (
        <div className="about">
            <img className="img" src={img} alt="" />
            <h1><strong>&lt; </strong>Ana Julia<strong> /&gt;</strong></h1>
            <p>decrição sobre mim</p>
            <a href="#" download=''>Curriculo</a>
        </div>
    )
};

export default About;