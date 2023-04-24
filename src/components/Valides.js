import React from 'react';
import { Article } from './Conposants';
// 
const obj = [
    {
        texte: "Basket Adidas",
        prix: 12500,
        image: "ar1.jpeg",
        date : "12 h 38 min",
        description : "Je veux une couleur qui frape, pointure 44"
        // date : "12 mai 2023"
    }
]
const Valides = () => {
    return (
        <div className='oglt'>
            <Article actuelleArticle={obj}/>
        </div>
    );
};

export default Valides;