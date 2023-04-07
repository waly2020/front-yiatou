import React from 'react';
import { ArticleReaction, ContentHeaderAddBusiness, ItemPrposition, NavigationDemandeur } from '../components/Conposants';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Reaction = () => {
    return (
        <div className='page reaction'>
            <Header classPage="business">
                <ContentHeaderAddBusiness texte="Réactions" link="/demande" />
            </Header>
            <main className="body">

                <ArticleReaction />

                <ItemPrposition />
                <ItemPrposition propose={false} temp={58} nom="Pierre" />
                <ItemPrposition nom='Jack' />

                <Navigation menu="home">
                    <NavigationDemandeur active="demande" />
                </Navigation>
            </main>
        </div>
    );
};

export default Reaction;