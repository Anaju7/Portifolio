import React, { useState, useEffect } from "react";
import contador from "../../assets/imagens/contador.png";
import curriculo from '../../assets/imagens/curriculo.png'

import './style.css'

const projetos = [
    {
        imagem: `${contador}`,
        descricao: 'Countador de clicks feito com React.js e JavaScript puro'
    },

    {
        imagem: `${curriculo}`,
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
                    <img className="img-projetos" src={dados[page].imagem}></img>
                    <p>{dados[page].descricao}</p>
                </div>
            )}
            <div className='container-btn'>
                <button className="btn" onClick={() => volta(page)}>aaaa</button>
                <button className="btn" onClick={() => avançar(page)}>bbbb</button>

            </div>
        </section>
    )
}

export default Slider;