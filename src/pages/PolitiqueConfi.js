import React from 'react';
import Header from '../components/Header';
import { ContentHeaderNotif, linkImg } from '../components/Conposants';
import { useParams } from 'react-router-dom';

const PolitiqueConfi = () => {
    return (
        <div className='page textes-pages'>
            <Header classPage="notif">
                <ContentHeaderNotif texte="Confidentialité" back={true} color="black" backPage={useParams().back === 'compte' ? '/compte/demandeur' : '/compte/business'}></ContentHeaderNotif>
            </Header>
            <main className="body">
                <div className="cont-img-txt-page">
                    <img src={`${linkImg}assets/image/nike.jpg`} alt="ma representation" />
                </div>
                <p className="txt-page-txt-page">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia harum quasi sequi fugiat eveniet quas nobis doloremque voluptas! Sequi aliquid laudantium sit quia laborum voluptatum quis, eaque temporibus, maxime sed alias quos neque veritatis est deleniti reprehenderit placeat cupiditate repellendus saepe et reiciendis illo numquam! Alias dignissimos id voluptatum veniam corrupti recusandae odio accusantium distinctio natus laudantium, nulla aut porro fugiat nemo esse, reprehenderit suscipit voluptas quae non eligendi ab, neque consequatur! Architecto debitis provident officia. Dolor, asperiores beatae itaque cumque fuga officiis deserunt in. Quo distinctio obcaecati voluptate eum sit exercitationem quia soluta qui iure, perferendis velit voluptatem?
                </p>
                <p className="txt-page-txt-page">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia harum quasi sequi fugiat eveniet quas nobis doloremque voluptas! Sequi aliquid laudantium sit quia laborum voluptatum quis, eaque temporibus, maxime sed alias quos neque veritatis est deleniti reprehenderit placeat cupiditate repellendus saepe et reiciendis illo numquam! Alias dignissimos id voluptatum veniam corrupti recusandae odio accusantium distinctio natus laudantium, nulla aut porro fugiat nemo esse, reprehenderit suscipit voluptas quae non eligendi ab, neque consequatur! Architecto debitis provident officia. Dolor, asperiores beatae itaque cumque fuga officiis deserunt in. Quo distinctio obcaecati voluptate eum sit exercitationem quia soluta qui iure, perferendis velit voluptatem?
                </p>
                <div className="cont-img-txt-page">
                    <img src={`${linkImg}assets/image/nike.jpg`} alt="ma representation" />
                </div>
                <p className="txt-page-txt-page">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia harum quasi sequi fugiat eveniet quas nobis doloremque voluptas! Sequi aliquid laudantium sit quia laborum voluptatum quis, eaque temporibus, maxime sed alias quos neque veritatis est deleniti reprehenderit placeat cupiditate repellendus saepe et reiciendis illo numquam! Alias dignissimos id voluptatum veniam corrupti recusandae odio accusantium distinctio natus laudantium, nulla aut porro fugiat nemo esse, reprehenderit suscipit voluptas quae non eligendi ab, neque consequatur! Architecto debitis provident officia. Dolor, asperiores beatae itaque cumque fuga officiis deserunt in. Quo distinctio obcaecati voluptate eum sit exercitationem quia soluta qui iure, perferendis velit voluptatem?
                </p>
                <div className="cont-img-txt-page">
                    <img src={`${linkImg}assets/image/nike.jpg`} alt="ma representation" />
                </div>
                <p className="txt-page-txt-page">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia harum quasi sequi fugiat eveniet quas nobis doloremque voluptas! Sequi aliquid laudantium sit quia laborum voluptatum quis, eaque temporibus, maxime sed alias quos neque veritatis est deleniti reprehenderit placeat cupiditate repellendus saepe et reiciendis illo numquam! Alias dignissimos id voluptatum veniam corrupti recusandae odio accusantium distinctio natus laudantium, nulla aut porro fugiat nemo esse, reprehenderit suscipit voluptas quae non eligendi ab, neque consequatur! Architecto debitis provident officia. Dolor, asperiores beatae itaque cumque fuga officiis deserunt in. Quo distinctio obcaecati voluptate eum sit exercitationem quia soluta qui iure, perferendis velit voluptatem?
                </p>
            </main>
        </div>
    );
};

export default PolitiqueConfi;