import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ContentHeaderAddBusiness } from '../components/Conposants';
import Header from '../components/Header';

const Cordonnee = () => {
    const { content } = useParams();
    return (
        <div className='page rose'>

            <Header classPage="business">
                <ContentHeaderAddBusiness texte="Mes coordonnees" link={"/compte/" + content} />
            </Header>
            <main className="body cord">
                <div className="cord-user c-1">
                    <div className='grid-cord'>
                        <p className='tit'>Nom complet</p>
                        <p className='cont'>Anguilet Walker Dave Berny</p>
                    </div>
                    <div>
                        <p className='tit'>Adresse email</p>
                        <p className='cont'>anguiletwalkerdave@gmail.com</p>
                    </div>
                    <div>
                        <p className='tit'>N de telephone 1 & 2</p>
                        <p className='cont'>074567762 / 066616989</p>
                    </div>
                </div>
                <Link to={`/set-datas/user-${content}`}>
                    <button>Mettre a jour</button>
                </Link>
                <div className="cord-user">
                    <div className='grid-cord'>
                        <p className='tit'>Mot de passe</p>
                        <p className='cont'>**********</p>
                    </div>
                    <div className='link-modif'>
                        <Link to={`/set-datas/password-${content}`}>Modifier</Link>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Cordonnee;