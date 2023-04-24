import React from 'react';
import { ContentHeaderNotif, NavigationVendeur } from '../components/Conposants';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { Link, Outlet,useParams } from 'react-router-dom';

const Activiter = () => {
    const {active} = useParams();
    return (
        <div className='page rose page-activite'>
            <Header classPage="notif">
                <ContentHeaderNotif texte="Mon activité" link="#" color='black' />
            </Header>
            <main className="body">
                <nav className="onglet">
                    <Link className={active === "act" ? "active" : ""} to="/activites/act"><span>En attentes</span></Link>
                    <Link className={active === "val" ? "active" : ""} to="/activites/valide/val"><span>Validées</span></Link>
                    <Link className={active === "his" ? "active" : ""} to="/activites/historique/his"><span>Historique</span></Link>
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