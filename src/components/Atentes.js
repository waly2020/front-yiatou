import React from 'react';
import { Article } from './Conposants';
// 
const obj = [
    {
        texte: "Iphone pro",
        prix: 58000,
        image: "phone.jpeg",
        status : "en attente",
        attent : true,
        description : "Iphone 12 de couleur belge avec 64 GB."
    },
    {
        texte: "Basket Adidas",
        prix: 12500,
        image: "ar1.jpeg",
        attent : true,
        status : "en attente",
        description : "Je la veux avec la pointure 43 et s'il n'y a pas la grise, je prendrais une blanche."
        // date : "12 mai 2023"
    }
]
const Atentes = () => {
    return (
        <div className='oglt'>
            <Article actuelleArticle={obj} />
        </div >
    );
};

export default Atentes;