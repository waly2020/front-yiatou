import React from 'react';
import { Carte, ContentHeaderHome, NavigationVendeur } from '../components/Conposants';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Boutique = () => {
    return (
        <div className='page page-boutique'>
            <Header classPage="home">
                <ContentHeaderHome titre='YIATOU' icnNotif={true} color='blue' icnBoutique={true} link="/" icnCompte={false} />
            </Header>
            <main className="body">
                {/* --------------------------------- */}
                <Carte imgs={["phone.jpeg"]} prix={25000} nom='Iphone pro' reaction={0} vues={12} description='Iphone 12 de couleur belge avec 64 GB.'/>
                <Carte imgs={["ar2.jpeg", "ar1.jpeg", "ar3.jpeg"]} prix={12500} nom='Basket Adidas' reaction={2} vues={32} description="Je la veux avec la pointure 43 et s'il n'y a pas la grise, je prendrais une blanche."/>
                {/* ------------------------------------- */}
            </main>
            <Navigation menu="boutique">
                <NavigationVendeur active="demande" />
            </Navigation>
        </div>
    );
};

export default Boutique;