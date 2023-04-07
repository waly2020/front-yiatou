import React from 'react';
import { Article } from './Conposants';

const article = [
    // {
    //     image: "nike.jpg",
    //     prix: 18300,
    //     texte: "meilleur chessure 2022",
    //     description: "chessue nike tout terrain",
    //     date: "aujourd'ui a 12h12min",
    // },
    // {
    //     image: "nike.jpg",
    //     prix: 18300,
    //     texte: "meilleur chessure 2022",
    //     description: "chessue nike tout terrain",
    //     date: "aujourd'ui a 12h12min",
    // },
    // {
    //     image: "nike.jpg",
    //     prix: 18300,
    //     texte: "meilleur chessure 2022",
    //     description: "chessue nike tout terrain",
    //     date: "aujourd'ui a 12h12min",
    // },
    // {
    //     image: "nike.jpg",
    //     prix: 18300,
    //     texte: "meilleur chessure 2022",
    //     description: "chessue nike tout terrain",
    //     date: "aujourd'ui a 12h12min",
    // }
]

const Historique = () => {
    return (
        <>
            <Article date={true} actuelleArticle={article} />
        </>
    );
};

export default Historique;