import React from 'react';
import { ConfirmeArticle } from './Conposants';
// import { Link } from 'react-router-dom';
// import img from '../image/nike.jpg';
// img = "nike.jpg", nom = "Jordan", prix = 55000,
const article = [
    // {
    //     img: "nike.jpg",
    //     nom: "jordan",
    //     prix: 12700
    // },
    // {
    //     img: "nike.jpg",
    //     nom: "jordan",
    //     prix: 12700
    // },
    // {
    //     img: "nike.jpg",
    //     nom: "jordan",
    //     prix: 12700
    // },
    // {
    //     img: "nike.jpg",
    //     nom: "jordan",
    //     prix: 12700
    // },
    // {
    //     img: "nike.jpg",
    //     nom: "jordan",
    //     prix: 12700
    // }
]

const Confirmer = () => {
    return (
        <div className='confirmer'>
            <ConfirmeArticle actuelleArticle={article} />
        </div>
    );
};

export default Confirmer;