import React, { useContext } from 'react';
import { ContentHeaderCompte, ContentHeaderNotif, linkImg, NavigationDemandeur } from '../components/Conposants';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/context';

const Compte = () => {
    // const { compte } = useParams();
    const {user} = useContext(AppContext);
    // console.log(user);
    let haveCount = user ? true : false;
    return (
        <div className='page page-compte'>
            <Header classPage="cont-compte">
                <ContentHeaderCompte userConnected={haveCount} linkData='/user/demandeur' linkImgUser={`${linkImg}assets/image/icones/${user?.genre === "M" ? "men-user" : "wom-user"}.png`}/>
            </Header>
            <main className="body">
                <div className="user-contente">
                    <div className="fond-compte-user">
                        {/* {haveCount ? <><div className="user">
                            <img src={"/assets/image/icones/formes.jpg"} alt="fond compte" />
                            <div className="form-user">
                                <img src={`${linkImg}assets/image/icones/${user?.genre === "M" ? "men-user" : "wom-user"}.png`} alt="user" />
                            </div>
                        </div>
                            <div className="data-user">
                                <p className="nom">{user?.username ?? null}</p>
                                <p className="mail">{user?.email ?? null}</p>
                            </div></> : <>
                            <div className="cont-btn-compte">
                                <Link to="/log/create"><button>Cree un compte</button></Link>
                                <Link to="/log/login" className='link-cnt'>Se connecter</Link>
                            </div>
                        </>} */}
                        <div className="user">
                            <img src={"/assets/image/icones/formes.jpg"} alt="fond compte" />
                            <div className="form-user">
                                <img src={"/assets/image/dave.jpg"} alt="user" />
                            </div>
                        </div>
                        <div className="data-user">
                            <p className="nom">Dave Anguilet Walker</p>
                            <p className="mail">dave@gmail.com</p>
                            <Link to="/user/demandeur">Mes cordonnees</Link>
                        </div>
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
                <NavigationDemandeur notif={2} active="compte" />
            </Navigation>
        </div>

    );
};

export default Compte;