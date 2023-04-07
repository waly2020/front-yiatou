import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { Carousel, ContentHeaderHome, NavigationDemandeur } from '../components/Conposants';
import { Link } from 'react-router-dom';
/*
donnee acepter pour le carrousel.
 * Tableau d'objets
[{
    image : "nike.jpg",
    titre : "Nike",
    prix : 70000
}]
 */
// exemple
// const users = {
//     sexe: "M",
// }
const slides = [{
    image: "nike.jpg",
    titre: "Nike",
    prix: 70000
}, {
    image: "nike.jpg",
    titre: "Basket",
    prix: 780000
}, {
    image: "nike.jpg",
    titre: "Chessure",
    prix: 50000
}];

const Home = () => {
    return (
        <>
            <div className="page home-page">
                <Header classPage="home">
                    <ContentHeaderHome icnBoutique={true} icnNotif={false} icnCompte={true} />
                </Header>
                <main className="body">
                    <div className="add-image">
                        <div className="image">
                            <img src="./assets/image/happy-people.png" alt='img' />
                        </div>
                        <h2>Trouvez ce que vous voulez acheter au prix que vous avez.</h2>
                        <p>
                            Envoyez-nous une photo de l'article que vous désirez, ainsi que votre prix et nous vous mettrons en relation avec plus de 700 vendeurs de Libreville, prêts à accepter votre prix.
                        </p>
                        <Link to="/add-demande"><button>ENVOYER UNE PHOTO</button></Link>
                    </div>
                    <div className="pub">
                        <img src="./assets/image/gif.gif" alt="publicite" />
                    </div>

                    <Carousel slides={slides} />

                    <div className="imgs">
                        <div>
                            <img src="./assets/image/ico-1.png" alt="icone" />
                            <p>acheter moins cher</p>
                        </div>
                        <div>
                            <img src="./assets/image/ico-1.png" alt="icone" />
                            <p>acheter moins cher</p>
                        </div>
                        <div>
                            <img src="./assets/image/ico-1.png" alt="icone" />
                            <p>acheter moins cher</p>
                        </div>
                        <div>
                            <img src="./assets/image/ico-1.png" alt="icone" />
                            <p>acheter moins cher</p>
                        </div>
                    </div>
                    <div className="btn-whatsapp">
                        <p className="t-w">
                            SI VOUS AVEZ UNE QUESTION, NOUS SOMMES LÀ POUR VOUS AIDER.
                        </p>
                        <button>
                            <i className="bi bi-whatsapp"></i>
                            Discution sur whatsapp
                        </button>
                    </div>
                </main>
                <Navigation menu="home">
                    <NavigationDemandeur active="home" />
                </Navigation>
            </div>
        </>
    );
};

export default Home;