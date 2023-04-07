import React from 'react';
import { ContentHeaderNotif, linkImg, NavigationVendeur } from '../components/Conposants';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const CompteBusiness = () => {
    const haveCount = false;
    return (
        <div className='page page-compte'>
            <Header classPage="notif">
                <ContentHeaderNotif texte="Mon compte" link="#" color='black' />
            </Header>
            <main className="body">
                <div className="user-contente">
                    <div className="fond-compte-user">
                        {haveCount ? <><div className="user">
                            <img src={linkImg + "assets/image/f-compte.jpg"} alt="fond compte" />
                            <div className="form-user">
                                <img src={linkImg + "assets/image/dave.jpg"} alt="user" />
                            </div>
                        </div>
                            <div className="data-user">
                                <p className="nom">Dave Anguilet Walker</p>
                                <p className="mail">dave@gmail.com</p>
                                <Link to="/user/demandeur">Mes cordonnees</Link>
                            </div></> : <>
                            <div className="cont-btn-compte">
                                <Link to="/log/create"><button>Cree un compte</button></Link>
                                <Link to="/log/login" className='link-cnt'>Se connecter</Link>
                            </div>
                        </>}
                    </div>
                </div>
                <div className="links">
                    <Link to="/aide/business">Aide</Link>
                    <Link to="/about/business">A propos</Link>
                    <Link to="/condition-vente/business">Conditions de vente</Link>
                    <Link to="/condition-utilisation/compte/business">Conditions d'utilisation</Link>
                    <Link to="/politique-vente/business">Politique de vente du site</Link>
                    <Link to="/politique-confi/compte">Politique de confidentialité</Link>
                    <Link to="#">Paramettre de ma boutique</Link>
                </div>
            </main>
            <Navigation menu="boutique">
                <NavigationVendeur active="compte" />
            </Navigation>
        </div>

    );
};

export default CompteBusiness;