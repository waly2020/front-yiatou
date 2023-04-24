import React from 'react';
import { Article } from './Conposants';

const article = [
    {
        image: "ar1.jpeg",
        prix: 13000,
        texte: "Basket Adidas",
        description: "Je la veux avec la pointure 43 et s'il n'y a pas la grise, je prendrais une blanche.",
        date: "aujourd'hui a 11h00min",
    },
    {
        image: "phone.jpeg",
        prix: 25000,
        texte: "Iphone pro",
        description: "Iphone 12 de couleur belge avec 64 GB.",
        date: "Hier a 12h12min",
    }
    // {
    //     image: "nike.jpg",
    //     prix: 18300,
    //     texte: "meilleur chessure 2022",
    //     description: "chessue nike tout terrain",
    //     date: "aujourd'hui a 12h12min",
    // },
    // {
    //     image: "nike.jpg",
    //     prix: 18300,
    //     texte: "meilleur chessure 2022",
    //     description: "chessue nike tout terrain",
    //     date: "aujourd'hui a 12h12min",
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