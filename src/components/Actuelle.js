import React from 'react';
import { ActueleArticle } from './Conposants';

const obj = [
    {
        titre: "Basket Adidas",
        prix: 12500,
        reaction: 2,
        image: "ar1.jpeg"
    },
    {
        titre: "Iphone pro",
        prix: 58000,
        reaction: 0,
        image: "phone.jpeg"
    }
]

const Actuelle = () => {
    return (
        <div className='actuelle'>
            <ActueleArticle actuelleArticle={obj}/>
        </div>
    );
};

export default Actuelle;