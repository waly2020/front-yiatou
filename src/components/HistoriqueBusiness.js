import React from 'react';
import { Article } from './Conposants';

const article = [
    {
        image: "ar1.jpeg",
        prix: 18300,
        texte: "Basket adidas",
        description: "chessue adidas tout terrain",
        date: "aujourd'hui a 12h12min",
    }
]

const HistoriqueBusiness = () => {
    return (
        <>
            <Article date={true} actuelleArticle={article} />
        </>
    );
};

export default HistoriqueBusiness;