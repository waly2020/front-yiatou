import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import { Link, Outlet,useParams } from 'react-router-dom';
import { ContentHeaderNotif, NavigationDemandeur } from '../components/Conposants';

const Demande = () => {
    let {active} = useParams();
    console.log(active);
    return (
        <div className='page demande-page'>

            <main className="body">
                <Header classPage="notif">
                    <ContentHeaderNotif texte="Demandes" link="#" color='black' />
                </Header>
                <nav className="onglet">
                    <Link className={active === "dem" ? "active" : ""} to="/demande/dem"><span>Actuelles</span></Link>
                    <Link className={active === "conf" ? "active" : ""} to="/demande/confirmer/conf"><span>Confirmées</span></Link>
                    <Link className={active === "his" ? "active" : ""} to="/demande/historique/his"><span>Historique</span></Link>
                </nav>
                <div className="fond-blanc">
                    <Outlet />
                </div>
                <Link to="/add-demande" className='add-demande'>
                    <div className="cercle-content">
                        <div className="d"></div>
                    </div>
                </Link>
                <Navigation menu="home">
                    <NavigationDemandeur notif={2} active="demande" />
                </Navigation>
            </main>
        </div>
    );
};

export default Demande;