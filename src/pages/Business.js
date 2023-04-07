import React from 'react';
import { ContentHeaderAddBusiness } from '../components/Conposants';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Business = () => {
    return (
        <div className='page page-business'>
            <Header classPage="business">
                <ContentHeaderAddBusiness bool={false} texte="Business" link="/compte/demandeur" />
            </Header>

            <main className="body">
                <h1>Bienvenue sur Yiatou</h1>
                <p>Vendez à des milliers de clients et gagnez plus d'argent sans efforts. Il vous suffit de créer une boutique gratuitement sur Yiatou et c'est tout.</p>
                <img src="./assets/image/icones/business.png" alt="business" />
                <Link to="/create-shop">
                    <button>CRÉE MA BOUTIQUE</button>
                </Link>
                <Link to="#">
                    <p>Critères d'éligibilités</p>
                </Link>
            </main>

        </div>
    );
};

export default Business;