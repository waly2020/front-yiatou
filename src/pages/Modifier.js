import React from 'react';
import { useParams } from 'react-router-dom';
import { ContentHeaderAddBusiness, MiseAJour, SetPassword } from '../components/Conposants';
import Header from '../components/Header';

const Modifier = () => {
    const { page } = useParams();
    // console.log(useParams().page);
    return (
        <div className='page rose modif'>
            <Header classPage="business">
                <ContentHeaderAddBusiness texte={page === "user-demandeur" || page === "password-business" ? "Mise a jour du profil" : "Nouveau mot de passe"} link={page === "user-demandeur" || page === "password-demandeur" ? "/user/demandeur" : "/user/business"} />
            </Header>
            <main className="body">
                {page === "user-demandeur" || page === "user-business" ? <MiseAJour /> : page === "password-demandeur" || "password-business" ? <SetPassword /> : ""}
            </main>
        </div>
    );
};

export default Modifier;