import React, { useState } from 'react';
import { ContentHeaderAddDemande, newGalerie } from '../components/Conposants';
import Header from '../components/Header';

const AddDemande = () => {
    let imgs = ['ar2.jpeg'];
    let [cpt, setCpt] = useState(1);
    const [desc,setDesc] = useState("");
    const [prix,setPrix] = useState();

    const changement = event =>{
        setDesc(event.target.value);
    }

    const changPrix = event =>{
        setPrix(parseFloat(event.target.value));
    }
    const incremente = () => {
        setCpt(cpt += 1);
    }
    const desIncremente = () => {
        console.log(`incre func`);
        if (cpt >= 2) {
            console.log("incre if");
            setCpt(cpt -= 1);
            
        } else {
            cpt = 1;
            console.log("incre else");
        }
    }
    return (
        <div className="page page-addDemande">
            <Header classPage="addDemande">
                <ContentHeaderAddDemande color='black' />
            </Header>
            <main className="body">
                <form action="#" className='formulaire' encType='multipart/from-data'>
                    <div className="contener-addImage">

                        <div className="image">
                            <div className={"contener-images img-" + imgs.length}>
                                {imgs.length === 0 ? <p>Ajouter jusqu'a 4 photos</p> : newGalerie(imgs, "image")}
                            </div>
                        </div>

                        <div className="button-contener">
                            <div className="button">
                                <input type="file" name="image" id="image" multiple />
                                <div className="display">
                                    <span>
                                        <svg width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M238 136v64a14 14 0 0 1-14 14H32a14 14 0 0 1-14-14v-64a14 14 0 0 1 14-14h48a6 6 0 0 1 0 12H32a2 2 0 0 0-2 2v64a2 2 0 0 0 2 2h192a2 2 0 0 0 2-2v-64a2 2 0 0 0-2-2h-48a6 6 0 0 1 0-12h48a14 14 0 0 1 14 14ZM84.2 76.2L122 38.5V128a6 6 0 0 0 12 0V38.5l37.8 37.7a5.9 5.9 0 1 0 8.4-8.4l-48-48a5.8 5.8 0 0 0-8.4 0l-48 48a5.9 5.9 0 0 0 8.4 8.4ZM198 168a10 10 0 1 0-10 10a10 10 0 0 0 10-10Z" /></svg>
                                    </span>
                                    <p>Ajouter une image</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="contener-inputs">
                        <div className="input">
                            <p>Nom de l'article</p>
                            <input type="text" name="nom" id="nom" />
                        </div>
                        <div className="input">
                            <p>Sélectionné un catégorie</p>
                            <select className="form-select" name='categories' aria-label="Default select example" defaultValue='One'>
                                {/* <option selected>Open this select menu</option> */}
                                <option defaultValue="1">Chaussures</option>
                                <option defaultValue="2">Sacs Homme</option>
                                <option defaultValue="3">Sacs Femme</option>
                                <option defaultValue="3">Electromenager</option>
                                <option defaultValue="3">Appareils Electroniques</option>
                            </select>
                        </div>
                        <div className="input">
                            <p>Prix de l'article</p>
                            <input type="number" value={prix} onChange={changPrix} name="prix" id="prix" />
                        </div>
                        <div className="input">
                            <p>Description de l'article {`(${desc.length}/160)`}</p>
                            <textarea maxLength={160} name="description" id="description" onChange={changement}></textarea>
                        </div>
                    </div>
                    <div className="contener-submit">
                        <div className="quantiter">
                            <button className='set' type='button' onClick={desIncremente}>-</button>
                            <input type="text" name="quantiter" id="quantiter" value={cpt} />
                            <button className='set' type='button' onClick={incremente}>+</button>
                        </div>
                        <button className='send' type='sumbmit'>Demander</button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default AddDemande;