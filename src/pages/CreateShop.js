import React from 'react';

const CreateShop = () => {
    return (
        <div className='page rose modif create-shop'>
            <main className="body">
                <h1 className='titre-form'>CREEZ VOTRE BOUTIQUE</h1>
                <form action="#" className='form-shop' method="post">
                    <div className="inputs">
                        <input type="text" placeholder='Nom de la bourique' />
                        <input type="number" placeholder="Nombre d'eemployés" />
                        <input type="tel" placeholder='Numero de telephone 1' />
                        <input type="tel" placeholder='Numero de telephone 2' />
                        <div>
                            <input className="form-control bg-white" list="datalistOptions" id="exampleDataList" placeholder="Zone géographique" />
                            <datalist id="datalistOptions">
                                <option value="Petit-Paris">
                                </option><option value="Mbolo">
                                </option><option value="Ga. Routière">
                                </option><option value="Mont-Bouet">
                                </option><option value="Centre Ville">
                                </option><option value="Oloumi">
                                </option></datalist>
                        </div>
                        <div>
                            <input className="form-control bg-white" list="datalistOptions" placeholder="Catégorie de produits" />
                            <datalist id="datalistOptions">
                                <option value="Informatique &amp; Accessoires">
                                </option><option value="Appareils Electroniques">
                                </option><option value="Téléphone &amp; Accessoires">
                                </option><option value="Mode homme &amp; Accessoires">
                                </option><option value="Sport &amp; Accessoires">
                                </option><option value="Beauté &amp; Accessoires">
                                </option><option value="Mode femme &amp; Accessoires">
                                </option></datalist>
                        </div>
                    </div>
                    <label className='adresse' htmlFor="adresse">Adresse de la boutique</label>
                    <textarea name="adress" id="adresse"></textarea>
                    <button>JE CREE MA BOUTIQUE</button>
                </form>
            </main>
        </div>
    );
};

export default CreateShop;