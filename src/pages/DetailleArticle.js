import React, { useState } from 'react';
import { ContentHeaderAddBusiness, Galerie, ItemPrposition, linkImg } from '../components/Conposants';
import Header from '../components/Header';

const DetailleArticle = () => {
    let imgs = ["nike.jpg", "nike.jpg", "nike.jpg"];

    const [activeToggle, activeGalerie] = useState(false);
    const addGalerie = () => {
        activeGalerie(!activeToggle);
    }
    return (
        <div className='page details-article rose'>
            <Header classPage="business">
                <ContentHeaderAddBusiness texte="Details de l'aricle" link="/reaction" />
            </Header>
            <main className="body details-body">
                <Galerie active={activeToggle} display={addGalerie} imgs={imgs} buttons={false} />
                <div className={`image-array max-img-${imgs.length}`} onClick={addGalerie}>
                    {imgs.map((image, i, array) => (
                        <div className={`img${i}`} key={i}>
                            <img src={`${linkImg}assets/image/${image}`} alt="articles" />
                        </div>
                    ))}
                </div>
                <div className="textes">
                    <p className='prix'>
                        55 000 FCFA
                        <span>
                            <svg width="22" height="22" viewBox="0 0 16 16"><path fill="currentColor" d="M13.5 1a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3z" /></svg>
                        </span>
                    </p>
                    <p className='nom'>(1) Nike tandance 2021</p>
                    <p className='date'>Demande a 11h06.</p>
                    <p className="texte">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas modi alias vero
                        quibusdam pariatur minus at? Nobis quas necessitatibus facilis repellendus et!
                        Provident debitis pariatur temporibus est harum commodi, quisquam iure nihil,
                        enim ipsam culpa eos perferendis maxime facere, rem saepe hic. Ad, velit.
                        Accusantium error nesciunt facilis quisquam minima.
                    </p>
                </div>

            </main>
            <ItemPrposition propose={false} />
        </div>
    );
};

export default DetailleArticle;