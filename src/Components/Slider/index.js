import React, { useState, useEffect } from "react";

import contador from "../../assets/imagens/contador.png";
import seta from '../../assets/imagens/left.svg';
import direita from '../../assets/imagens/right.svg';

import './style.css'

const projetos = [
    {
        imagem: `${contador}`,
        descricao: 'Countador de clicks feito com React.js e JavaScript puro'
    },

    {
        imagem: `${''}`,
        descricao: 'Currriculo digital feito com HTML e Css'
    },
]

const Slider = () => {
    const [dados, setDados] = useState();
    const [page, setPage] = useState(0);

    useEffect(() => {
        setDados(projetos);
    }, [page]);

    const avançar = (page) => page < dados?.length - 1 ? setPage(page + 1) : page;

    const volta = (page) => (page > 0 ? setPage(page - 1) : page);



    return (
        <section className="slider">
            {dados && (
                <div className="info-slider">
                    <h1>Minhas Aplicações</h1>
                    <img className="img-projetos" src={dados[page].imagem}></img>
                    <p>{dados[page].descricao}</p>
                    <a href="#" >Veja Agora</a>
                </div>
            )}
            <div className='container-btn'>
                <button className="btn" onClick={() => volta(page)}><img className="setas" src={seta} /></button>
                <button className="btn" onClick={() => avançar(page)}><img className="setas" src={direita} /></button>

            </div>
        </section>
    )
}

export default Slider;