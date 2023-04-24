import React from 'react';
import { ArticleReaction, ContentHeaderAddBusiness, ItemPrposition, NavigationDemandeur } from '../components/Conposants';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Reaction = () => {
    return (
        <div className='page reaction'>
            <Header classPage="business">
                <ContentHeaderAddBusiness texte="Réactions" link="/demande/dem" />
            </Header>
            <main className="body">

                <ArticleReaction img='ar1.jpeg' nom='Basket Adidas' prix={12500}/>
                
                <ItemPrposition propose={false} temp={58} nom="Pierre" />
                <ItemPrposition nom='Jean Donald' prix={13000} lieu='Rond point de Nzing'/> 
                {/* <ItemPrposition nom='Jack' /> */}

                <Navigation menu="home">
                    <NavigationDemandeur active="demande" />
                </Navigation>
            </main>
        </div>
    );
};

export default Reaction;