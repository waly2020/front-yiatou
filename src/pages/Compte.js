import React from 'react';
import { ContentHeaderNotif, linkImg, NavigationDemandeur } from '../components/Conposants';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Compte = () => {
    // const { compte } = useParams();
    let haveCount = false;
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
                        {/* <div className="user">
                            <img src={linkImg + "assets/image/f-compte.jpg"} alt="fond compte" />
                            <div className="form-user">
                                <img src={linkImg + "assets/image/dave.jpg"} alt="user" />
                            </div>
                        </div>
                        <div className="data-user">
                            <p className="nom">Dave Anguilet Walker</p>
                            <p className="mail">dave@gmail.com</p>
                            <Link to="/user/demandeur">Mes cordonnees</Link>
                        </div> */}
                    </div>
                </div>
                <div className="links">
                    <Link to="/aide/compte">Aide</Link>
                    <Link to="/about/compte">A propos</Link>
                    <Link to="/business">Espace Business</Link>
                    <Link to="/condition-vente/compte">Conditions de vente</Link>
                    <Link to="/condition-utilisation/compte/demandeur">Conditions d'utilisation</Link>
                    <Link to="/politique-vente/compte">Politique de vente du site</Link>
                    <Link to="/politique-confi/compte">Politique de confidentialité</Link>
                </div>
            </main>
            <Navigation menu="home">
                <NavigationDemandeur active="compte" />
            </Navigation>
        </div>

    );
};

export default Compte;