import React from 'react';
// import { Params } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ContentHeaderNotif } from '../components/Conposants';
import Header from '../components/Header';

const About = () => {
    return (
        <div className='page textes-pages'>
            <Header classPage="notif">
                <ContentHeaderNotif notif={false} texte="A propos" back={true} color="black" backPage={useParams().back === 'compte' ? '/compte/demandeur' : '/compte/business'}></ContentHeaderNotif>
            </Header>
            <main className="body">
                {/* <div className="cont-img-txt-page">
                    <img src={`/assets/image/nike.jpg`} alt="ma representation" />
                </div> */}
                <p className="txt-page-txt-page">
                    A l'heure où vous êtes en train de lire ces lignes, des milliers de personnes sont en train de rechercher où ils peuvent acheter X ou Y produit et en fonction de leur budget. Certains trouveront sans effort, d’autres au bout d’un long moment et d'autres quasiment pas, car il est impossible de parcourir toutes les boutiques du marché.
                </p>
                <p className="txt-page-txt-page">
                    Avec Yiatou nous nous sommes donné pour mission d’aider les acheteurs à trouver les vendeurs qui vendent ce qu’ils veulent acheter et qui correspondent à leur budget en quelques minutes en envoyant une simple photo.
                </p>
                {/* <div className="cont-img-txt-page">
                    <img src={`/assets/image/nike.jpg`} alt="ma representation" />
                </div> */}
                <p className="txt-page-txt-page">
                    Il y a 4 ans je devais acheter une chaussure de marque Wallabys et j’avais un budget de 20.000 FCFA. J’avais cette chaussure un peu plus jeune et le budget que j’avais était bon pour l’acheter. Une fois au marché, j’ai cherché dans tout le marché un vendeur qui avait la chaussure que je voulais et qui allait accepter le prix que j’étais prêt à payer.
                </p>
                {/* <div className="cont-img-txt-page">
                    <img src={`/assets/image/nike.jpg`} alt="ma representation" />
                </div> */}
                <p className="txt-page-txt-page">
                    J’ai parcouru plus d’une vingtaine de boutiques de vente de chaussures pendant près de 45 minutes et sans succès. La chaussure était difficile à trouver et quand un vendeur l’avait, le  prix proposé ne cadrait pas avec mon budget de 20.000 FCFA. Les prix que les vendeurs me proposaient allaient de 24.000 FCFA à 29.000 FCFA, ce qui était loin de mon budget.
                </p>
                <p className="txt-page-txt-page">
                    Malgré le soleil, la fatigue et l’urgence, car je voyageais le lendemain j’étais tout de même très enthousiaste et je savais que c’était possible avec mon budget, mais que la seule difficulté était de trouver le vendeur de chaussure qui correspondait à mon budget parmis des milliers d’autres vendeurs.
                </p>
                <p className="txt-page-txt-page">
                    Soudain, nous avons rencontré un démarcheur et il nous a demandé ce que nous voulions acheter (j’étais accompagné de mon ami Kevinn) et je lui ai dit ce qu’on voulait  acheter une Wallabees, en lui donnant les caractéristiques. Après cela, il nous a demandé de l’attendre un moment, ce que nous avions fait.
                </p>
                <p className="txt-page-txt-page">
                    Environs 10 minutes plus tard, le démarcheur était de retour avec la chaussure que je voulais et ses caractéristiques (Wallabees noir, en cuire et pointure 42). Une fois après avoir vu que c’était ce que je recherchais, je lui ai demandé le prix. A ma grande surprise, il m'a dit 18.000 FCA. J’étais stupéfait, mais je ne lui avais pas montré ma stupéfaction et je lui ai dit que j’avais 17.000 FCFA, car les vendeurs demandent généralement un prix qui peut être discuté.
                </p>
                <p className="txt-page-txt-page">
                    Il avait essayé de négocier pour que je paie 18.000 FCFA et moi j’ai insisté pour 17.000 FCFA et vu qu’il semblait y tenir en me le demandant, j’ai accepté 18.000 FCFA, car de toute façon j’avais 2.000 FCFA qui restaient en plus par rapport à ce que j’étais prêt à payé et c’était ma façon d’être aussi reconnaissant de son aide.
                </p>
                <p className="txt-page-txt-page">
                    Quelques jours avant cette expérience, j’avais vécu presque la même chose en essayant de m’acheter un costume. Les 2 expériences combinées m’ont fait réaliser une chose très importante et qui m'a permis de voir une opportunité de solutions.
                </p>
                <p className="txt-page-txt-page">

                </p>
                <p className="txt-page-txt-page">
                    J’ai réalisé qu’il y avait plusieurs vendeurs qui vendaient tous les mêmes choses, mais que chacun d’entre eux avait son propre prix. C'est-à-dire que pour une même chaussure Nike par exemple, sur 30 vendeurs, on trouvera au moins 15 prix différents.
                </p>
                <p className="txt-page-txt-page">
                    C'est de la que le concept de faire une demande est né, car c'est ce qu'on fait à chaque fois qu'on arrive chez un commerçant qui pourrait vendre ce qu'on souhaite acheter. Avec Yiatou, on gagne en temps en faisant la demande depuis son téléphone et sans se déplacer.
                </p>
                <p className="txt-page-txt-page">
                    Une fois qu'on a trouvé un vendeur et qu'on s'est mis d'accord sur le prix, on peut maintenant se déplacer vers lui pour acheter notre article ou demander de se faire livrer sans dépenser de l'énergie.
                </p>
            </main>
        </div>
    );
};

export default About;