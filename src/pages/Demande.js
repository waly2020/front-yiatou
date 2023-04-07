import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import { Link, Outlet } from 'react-router-dom';
import { ContentHeaderNotif, NavigationDemandeur } from '../components/Conposants';

const Demande = () => {
    return (
        <div className='page demande-page'>

            <main className="body">
                <Header classPage="notif">
                    <ContentHeaderNotif texte="Demandes" link="#" color='black' />
                </Header>
                <nav className="onglet">
                    <Link to="/demande"><span>Actuelles</span></Link>
                    <Link to="/demande/confirmer"><span>Confirmees</span></Link>
                    <Link to="/demande/historique"><span>Historique</span></Link>
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
                    <NavigationDemandeur active="demande" />
                </Navigation>
            </main>
        </div>
    );
};

export default Demande;