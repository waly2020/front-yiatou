import React from 'react';
import Header from '../components/Header';
import { ContentHeaderNotif, linkImg } from '../components/Conposants';
import {useParams } from 'react-router-dom';


const Aide = () => {
    return (
        <div className='page aide textes-pages'>
            <Header classPage="notif">
                <ContentHeaderNotif texte="Aide" back={true} color="black" backPage={useParams().back === 'compte' ? '/compte/demandeur' : '/compte/business'}></ContentHeaderNotif>
            </Header>
            <main className="body">
                <h3 className='titre-question'>Questions les plus pose :</h3>
                <ul className='liste-question'>
                    <li><a href='#question1'>Question 1</a></li>
                </ul>

                <h3 className='question' id='question1'>Question 1</h3>

                <div className="cont-img-txt-page">
                    <img src={`/assets/image/nike.jpg`} alt="ma representation" />
                </div>
                <p className="txt-page-txt-page">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia harum quasi sequi fugiat eveniet quas nobis doloremque voluptas! Sequi aliquid laudantium sit quia laborum voluptatum quis, eaque temporibus, maxime sed alias quos neque veritatis est deleniti reprehenderit placeat cupiditate repellendus saepe et reiciendis illo numquam! Alias dignissimos id voluptatum veniam corrupti recusandae odio accusantium distinctio natus laudantium, nulla aut porro fugiat nemo esse, reprehenderit suscipit voluptas quae non eligendi ab, neque consequatur! Architecto debitis provident officia. Dolor, asperiores beatae itaque cumque fuga officiis deserunt in. Quo distinctio obcaecati voluptate eum sit exercitationem quia soluta qui iure, perferendis velit voluptatem?
                </p>

                <h3 className='question' id='question2'>Question 2</h3>

                <p className="txt-page-txt-page">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia harum quasi sequi fugiat eveniet quas nobis doloremque voluptas! Sequi aliquid laudantium sit quia laborum voluptatum quis, eaque temporibus, maxime sed alias quos neque veritatis est deleniti reprehenderit placeat cupiditate repellendus saepe et reiciendis illo numquam! Alias dignissimos id voluptatum veniam corrupti recusandae odio accusantium distinctio natus laudantium, nulla aut porro fugiat nemo esse, reprehenderit suscipit voluptas quae non eligendi ab, neque consequatur! Architecto debitis provident officia. Dolor, asperiores beatae itaque cumque fuga officiis deserunt in. Quo distinctio obcaecati voluptate eum sit exercitationem quia soluta qui iure, perferendis velit voluptatem?
                </p>
                <div className="cont-img-txt-page">
                    <img src={`/assets/image/nike.jpg`} alt="ma representation" />
                </div>
                <p className="txt-page-txt-page">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia harum quasi sequi fugiat eveniet quas nobis doloremque voluptas! Sequi aliquid laudantium sit quia laborum voluptatum quis, eaque temporibus, maxime sed alias quos neque veritatis est deleniti reprehenderit placeat cupiditate repellendus saepe et reiciendis illo numquam! Alias dignissimos id voluptatum veniam corrupti recusandae odio accusantium distinctio natus laudantium, nulla aut porro fugiat nemo esse, reprehenderit suscipit voluptas quae non eligendi ab, neque consequatur! Architecto debitis provident officia. Dolor, asperiores beatae itaque cumque fuga officiis deserunt in. Quo distinctio obcaecati voluptate eum sit exercitationem quia soluta qui iure, perferendis velit voluptatem?
                </p>

                <h3 className='question' id='question1'>Question 3</h3>

                <div className="cont-img-txt-page">
                    <img src={`/assets/image/nike.jpg`} alt="ma representation" />
                </div>
                <p className="txt-page-txt-page">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia harum quasi sequi fugiat eveniet quas nobis doloremque voluptas! Sequi aliquid laudantium sit quia laborum voluptatum quis, eaque temporibus, maxime sed alias quos neque veritatis est deleniti reprehenderit placeat cupiditate repellendus saepe et reiciendis illo numquam! Alias dignissimos id voluptatum veniam corrupti recusandae odio accusantium distinctio natus laudantium, nulla aut porro fugiat nemo esse, reprehenderit suscipit voluptas quae non eligendi ab, neque consequatur! Architecto debitis provident officia. Dolor, asperiores beatae itaque cumque fuga officiis deserunt in. Quo distinctio obcaecati voluptate eum sit exercitationem quia soluta qui iure, perferendis velit voluptatem?
                </p>
            </main>
        </div>
    );
};

export default Aide;