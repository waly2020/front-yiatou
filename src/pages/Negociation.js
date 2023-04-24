import React from 'react';
import { Carte, ContentHeaderNotif, NavigationVendeur } from '../components/Conposants';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

const Negociation = () => {
    return (
        <div className='page rose'>
            <Header classPage="notif">
                <ContentHeaderNotif texte="Mes négociations" link="#" color='black' />
            </Header>
            <main className="body">
                <Carte imgs={['ar3.jpeg','ar1.jpeg','ar2.jpeg']} prix={12500} nom='Basket Adidas' vues={32} reaction={2}/>
                {/* <Carte /> */}
                {/* <Carte /> */}
                {/* <Carte /> */}
                {/* <Carte /> */}
                {/* <Carte /> */}
            </main>
            <Navigation menu="boutique">
                <NavigationVendeur active="negociation" />
            </Navigation>
        </div>
    );
};

export default Negociation;