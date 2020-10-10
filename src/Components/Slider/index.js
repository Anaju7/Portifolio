import React, { useState, useEffect } from "react";

import contador from "../../assets/imagens/contador.png";
import gerador from '../../assets/imagens/gerador.png';
import erro from '../../assets/imagens/404.png'
import seta from '../../assets/imagens/left.svg';
import direita from '../../assets/imagens/right.svg';

import './style.css'

const projetos = [
    {
        imagem: `${contador}`,
        descricao: 'Countador de clicks feito com React.js e JavaScript',
        url: 'https://counter-blue.vercel.app/'
    },

    {
        imagem: `${gerador}`,
        descricao: 'Gerador de Mensagens feito com DOM ',
        url: 'https://anaju7.github.io/Gerador-de-Mensagem/'
    },
    {
        imagem: `${erro}`,
        descricao: 'Pagina Erro404 feita com html e Css/Grid ',
        url: 'https://anaju7.github.io/Erro404/'
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
                    <a href={dados[page].url} target="_black" >Veja Agora</a>
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