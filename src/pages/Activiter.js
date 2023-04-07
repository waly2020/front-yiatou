import React from 'react';
import { ContentHeaderNotif, NavigationVendeur } from '../components/Conposants';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { Link, Outlet } from 'react-router-dom';

const Activiter = () => {
    return (
        <div className='page rose page-activite'>
            <Header classPage="notif">
                <ContentHeaderNotif texte="Mon activité" link="#" color='black' />
            </Header>
            <main className="body">
                <nav className="onglet">
                    <Link to="/activites"><span>En attentes</span></Link>
                    <Link to="/activites/valide"><span>Validées</span></Link>
                    <Link to="/activites/historique"><span>Historique</span></Link>
                </nav>
                <div className="fond-blanc">
                    <Outlet />
                </div>

            </main>
            <Navigation menu="boutique">
                <NavigationVendeur active="activite" />
            </Navigation>
        </div>
    );
};

export default Activiter;