import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContentHeaderAddBusiness, Descriptions, Galerie, linkImg } from '../components/Conposants';
import Header from '../components/Header';

const MiseRelation = () => {
    let imgs = ["nike.jpg", "nike.jpg", "nike.jpg"];

    const [activeToggle, activeGalerie] = useState(false);
    const addGalerie = () => {
        activeGalerie(!activeToggle);
    }
    return (
        <div className='page'>
            <Header classPage="business">
                <ContentHeaderAddBusiness texte="Mise en relation" link="/details-article" />
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
                    <Descriptions texte='Lire la description' />
                </div>
                <div className="container pt-3 p mt-2 bg-white desc">
                    <h6 className="fw-bold text-secondary text-uppercase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-triangle-fill text-danger" viewBox="0 0 16 16">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                    </svg>   Recommandations !</h6>

                    <div className="row">
                        <div className="col">
                            <p className="text-sign mt-2">Vous pouvez avoir une totale confiance en Cheick, car nous l'avons choisi avec précaution. Une fois en contact avec lui, prenez rendez-vous le plus vite dans sa boutique, afin d'acheter votre article. Vous pouvez aussi lui demander de vous livrer à domicile s'il fait des livraison. N'envoyez pas d'argent en ligne et optez toujours pour du paiement en cash.</p>
                        </div>
                    </div>
                </div>
                <section className="fixed-bottom bg-white">
                    <div className="container">
                        <div className="row p-3 bottom-nav">

                            <div className="col-2 text-center shadow-sm rounded xl-3 bg-light">
                                <Link to="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-outbound fw-bold text-center text-dark pt-1 mt-2 mb-2" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"></path>
                                </svg></Link>
                            </div>


                            <div className="col ms-1 pay-btn text-center shadow-sm rounded button-w">
                                <Link className="mb-3 text-white fw-bold mt-3" to="https://wa.me/24106616989/?text=Bonjour,%20j'ai%20une%20question%20concernant%20yiatou.com%20s'il vous plaît."> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                                </svg> WhatsApp</Link>
                            </div>




                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default MiseRelation;