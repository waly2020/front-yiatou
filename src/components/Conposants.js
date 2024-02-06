import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import jwtDecode from 'jwt-decode';
import Cookie from 'js-cookie';
import {Splide,SplideSlide} from '@splidejs/react-splide';

let linkImg = "http://localhost:3000/";
// let linkImg = "https://yiatouweb.netlify.app/";

const ContentHeaderNotif = ({ texte, notif = false, back = false, color = "main", backPage = "/" }) => {
    return (
        <>
            {/* <div> */}
            {back ? <Link to={backPage}>
                <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325Q4 12.2 4 12t.062-.375q.063-.175.213-.325l6.6-6.6q.275-.275.687-.288q.413-.012.713.288q.3.275.313.687q.012.413-.288.713L7.4 11h11.175q.425 0 .713.287q.287.288.287.713t-.287.712Q19 13 18.575 13H7.4l4.9 4.9q.275.275.288.7q.012.425-.288.7q-.275.3-.7.3q-.425 0-.725-.3Z" /></svg>
            </Link> : ""}
            {/* </div> */}
            <h1 className={"titre " + color}>{texte}</h1>
            <div className="icones">
                {notif ? <Link to="/notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="35" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                    </svg>
                </Link> : ""}
            </div>
        </>
    );
};
const ContentHeaderCompte = ({texte = "Mon compte",color = "#444",linkImgUser,linkData = "#", userConnected = false}) =>{
    const [display,setDisplay] = useState(false);
    const logOut = () =>{
        // yiatou-token-user yiatou-token-access
        Cookie.remove("yiatou-token-user");
        Cookie.remove("yiatou-token-access");
        window.location.href = "/";
    }
    return (
        <>
        <h1 className='titre' style={{color : color}}>{texte}</h1>
        {userConnected ? <div className='option-user'>
            <img src={linkImgUser} onClick={() => {setDisplay(!display)}} alt='utilisateur non connecter'/>

            <ul className={`link-option-user ${display ? "active" : ""}`}>
              <li><Link to={linkData}><i className="bi bi-person-bounding-box"></i> Mes cordonnees</Link></li>
              <li onClick={logOut}><i className="bi bi-box-arrow-in-left"></i> Deconeexion</li>
            </ul>
        </div> : null}
        </>
    )
}
const ContentHeaderAddDemande = ({ color = "main" }) => {
    return (
        <>
            <Link to="/">
                <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325Q4 12.2 4 12t.062-.375q.063-.175.213-.325l6.6-6.6q.275-.275.687-.288q.413-.012.713.288q.3.275.313.687q.012.413-.288.713L7.4 11h11.175q.425 0 .713.287q.287.288.287.713t-.287.712Q19 13 18.575 13H7.4l4.9 4.9q.275.275.288.7q.012.425-.288.7q-.275.3-.7.3q-.425 0-.725-.3Z" /></svg>
            </Link>
            <h1 className={"titre " + color}>Nouvelle Demande</h1>
        </>
    );
};
const ContentHeaderAddBusiness = ({ texte, link, bool = true, color = "main" }) => {
    return (
        <>
            <Link to={link}>
                <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325Q4 12.2 4 12t.062-.375q.063-.175.213-.325l6.6-6.6q.275-.275.687-.288q.413-.012.713.288q.3.275.313.687q.012.413-.288.713L7.4 11h11.175q.425 0 .713.287q.287.288.287.713t-.287.712Q19 13 18.575 13H7.4l4.9 4.9q.275.275.288.7q.012.425-.288.7q-.275.3-.7.3q-.425 0-.725-.3Z" /></svg>
            </Link>
            <h1 className={"titre " + color}>{texte}</h1>
            {bool ? <div className="icones">
                <Link to="/notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="35" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                    </svg>
                </Link>
            </div> : ""}
        </>
    );
};
/*
donnee acepter pour le carrousel.
 * Tableau d'objets
[{
    image : "nike.jpg",
    titre : "Nike",
    prix : 70000
}]
 */

const Carousel = () => {

    return (
        <>
        <div className='cont-titre-test'>

        
        <h2 className='titre-test'>
           <span className='quote-titre c1'>
               <i className="bi bi-quote"></i>
           </span>
            Temoignages
            <span className='quote-titre c2'>
               <i className="bi bi-quote"></i>
           </span>
        </h2>
        </div>
           <Splide tag='div' aria-label='testimonial' options={{
        type : "loop",
        arrows : false,
        // width : "50%"
        fixedWidth : "90%",
        // gap : 5,
        classes : "carousel-main",
        // clones : 4
        // perPage : 2
      } }>
            <SplideSlide>
                <div className='item-carousel'>
                   <div className='testiMonial'>
                   <div className='design'></div>
                    <div className='quote'>
                    <i className="bi bi-quote"></i>
                    </div>
                    <div className='texte-test'>
                       <p>
                         This article discussed 7 VS Code extensions you can use to develop React apps more quickly and effectively.
                       </p>
                    </div>
                    <div className='user-test'>
                        <div className='user-image'>
                            <img src={`/assets/image/icones/men-user.png`} alt='utilisateur'/>
                        </div>
                        <p className='user-test-name'>WALY LE DEV</p>
                        <p className='user-test-post'>Developpeur web full-stack</p>
                    </div>
                   </div>
                </div>
            </SplideSlide>
            <SplideSlide>
            <div className='item-carousel'>
                <div className='testiMonial'>
                <div className='design'></div>
                    <div className='quote'>
                    <i className="bi bi-quote"></i>
                    </div>
                    <div className='texte-test'>
                       <p>
                         This article discussed 7 VS Code extensions you can use to develop React apps more quickly and effectively.
                       </p>
                    </div>
                    <div className='user-test'>
                        <div className='user-image'>
                            <img src={`/assets/image/icones/men-user.png`} alt='utilisateur'/>
                        </div>
                        <p className='user-test-name'>WALY LE DEV</p>
                        <p className='user-test-post'>Developpeur web full-stack</p>
                    </div>
                </div>
            </div>
            </SplideSlide>
            <SplideSlide>
            <div className='item-carousel'>
                <div className='testiMonial'>
                <div className='design'></div>
                    <div className='quote'>
                    <i className="bi bi-quote"></i>
                    </div>
                    <div className='texte-test'>
                       <p>
                         This article discussed 7 VS Code extensions you can use to develop React apps more quickly and effectively.
                       </p>
                    </div>
                    <div className='user-test'>
                        <div className='user-image'>
                            <img src={`/assets/image/icones/men-user.png`} alt='utilisateur'/>
                        </div>
                        <p className='user-test-name'>WALY LE DEV</p>
                        <p className='user-test-post'>Developpeur web full-stack</p>
                    </div>
                </div>
            </div>
            </SplideSlide>
            <SplideSlide>
            <div className='item-carousel'>
                <div className='testiMonial'>
                <div className='design'></div>
                    <div className='quote'>
                    <i className="bi bi-quote"></i>
                    </div>
                    <div className='texte-test'>
                       <p>
                         This article discussed 7 VS Code extensions you can use to develop React apps more quickly and effectively.
                       </p>
                    </div>
                    <div className='user-test'>
                        <div className='user-image'>
                            <img src={`/assets/image/icones/men-user.png`} alt='utilisateur'/>
                        </div>
                        <p className='user-test-name'>WALY LE DEV</p>
                        <p className='user-test-post'>Developpeur web full-stack</p>
                    </div>
                </div>
            </div>
            </SplideSlide>
           </Splide>
        </>
    )
}
const ContentHeaderBoutique = ({ color = "main" }) => {
    return (
        <>
            <h1 className={"titre " + color}>Vendeur</h1>
            <div className="icones">
                <Link to="/">
                    <svg width="50" height="50" viewBox="0 0 16 16"><path stroke="none" fill='currentColor' d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8A2.37 2.37 0 0 1 8 7.083A2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0a.5.5 0 0 1 1 0a1.375 1.375 0 0 0 2.75 0a.5.5 0 0 1 1 0a1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0a.5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" /></svg>
                </Link>
                <Link to="/notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="35" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                    </svg>
                </Link>
            </div>
        </>
    );
};
const ContentHeaderHome = ({ color = "main", icnNotif = false, icnBoutique = false, icnCompte = false, titre = "YIATOU", link = "/boutique", user = null }) => {
    return (
        <>
            <h1 className={"titre " + color}>{titre}</h1>
            <div className="icones">
                {icnBoutique ? <Link to={link}>
                    <svg width="50" height="50" viewBox="0 0 16 16"><path stroke="none" fill='currentColor' d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8A2.37 2.37 0 0 1 8 7.083A2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0a.5.5 0 0 1 1 0a1.375 1.375 0 0 0 2.75 0a.5.5 0 0 1 1 0a1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0a.5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" /></svg>
                </Link> : ""}
                {icnCompte ? <Link to="/compte/demandeur"> <div className={`addCompte ${user ? "" : "user"}`}>
                    {user ? user.sexe.toLowerCase() === "m" ? <img src={`/assets/image/icones/men-user.png`} alt="Utilisateur Homme" /> : <img src={`/assets/image/icones/wom-user.png`} alt="Utilisateur Femme" /> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="42" fill="#000" className="bi bi-person text-dark" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                        </svg>
                    }
                </div> </Link>: ""}
                {icnNotif ? <Link to="/notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="35" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                    </svg>
                </Link> : ""}
            </div>
        </>
    );
}; 
const NavigationDemandeur = ({ active, notif = 100 }) => {
    return (
        <>
            <Link to="/" className={active === "home" ? "active" : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="42" fill="currentColor" className="bi bi-shop-window active-a" viewBox="0 0 16 16">
                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"></path>
                </svg>
                <p>Accueil</p>
            </Link>
            <Link to="/demande/dem" className={active === "demande" ? "active" : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="42" fill="currentColor" className="bi bi-images text-dark" viewBox="0 0 16 16">
                    <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                    <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"></path>
                </svg>
                {notif > 0 ? <p className='notif-dmd'>{notif >= 10 ? "+9" : notif}</p> : ""}
                <p>Demandes</p>
            </Link>
            <Link to="/compte/demandeur" className={active === "compte" ? "active" : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="42" fill="currentColor" className="bi bi-person text-dark" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                </svg>
                <p>Compte</p>
            </Link>
        </>
    );
}
const NavigationVendeur = ({ active }) => {
    return (
        <>
            <Link to="/boutique" className={active === "demande" ? "active" : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="35" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                </svg>
                <p>Demandes</p>
            </Link>

            <Link to="/activites/act" className={active === "activite" ? "active" : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="35" fill="currentColor" className="bi bi-card-checklist" viewBox="0 0 16 16">
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"></path>
                </svg>
                <p>Activié</p>
            </Link>

            <Link to="/negociation" className={active === "negociation" ? "active" : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="35" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"></path>
                </svg>
                <p>Négotiation</p>
            </Link>
            <Link to="/compte/business" className={active === "compte" ? "active" : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="35" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                </svg>
                <p>Compte</p>
            </Link>
        </>
    );
}

const Descriptions = ({ description = "Aucune description", texte = "Description" }) => {
    const [toggle, settoggle] = useState(false);
    const active = () => {
        settoggle(!toggle);
    }
    return (
        <div className="description">
            <button className={`btn-desc ${toggle}`} onClick={active}>
                <span className='svg'>
                    <svg width="10" height="10" viewBox="0 0 16 16"><path fill="currentColor" d="m12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" /></svg>
                </span>
                {texte}
            </button>
            <div className={`content-desc ${toggle ? "active" : ""}`}>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
};
// les articles
// http://localhost:3000/demande/historique
const Article = ({ actuelleArticle = [] }) => {

    return (
        <>
            {/* --------- */}
            {actuelleArticle.length === 0 ? <ComponentVide nameImg="vide-homme.png" texte="Aucune demande" /> : actuelleArticle.map((article, i, array) => (
                <div key={i} className="article-carte">
                    <div className="header-article">
                        <div className="img">
                            <img src={`/assets/image/${article.image}`} alt="nike" />
                        </div>
                        <div className="texte">
                            <p className='prix'>{article.prix} FCFA</p>
                            <p className='nom'>{article.texte}</p>
                        </div>
                    </div>
                    <Descriptions description={article.description} />
                    {article.attent ? <p className='date a'>{article.status}</p> : ""}
                    {article.date ? <p className='date'>{article.date}</p> : ""}
                </div>
            ))}
            {/* --------- */}
        </>
    );
};

const PopPropose = ({ toggle, active, prix = 10000, date = "12h45" }) => {
    return (
        <div className={`p-shadow ${toggle ? "active" : ""}`}>
            <div className="proposer">
                <p className='new'>
                    <span>Nouveau prix</span>
                    <div className="close" onClick={active}>
                        <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z" /></svg>
                    </div>
                </p>
                <div className="input">
                    <input type="number" name="nouveau" placeholder='Proposer un nouveau prix' />
                </div>
                <p className='plus-faible'>Proposition la plus<br />faible</p>
                <div className="somme">
                    <p>{prix.toLocaleString()} FCFA</p>
                </div>
                <p className="date-demande">
                    Ce produit a ete demander a {date}.
                </p>
                <div className="btn-propose">
                    <button>Proposer mon prix</button>
                </div>

            </div>
        </div>
    );
};
/**
 * @param {Array} array tableau d'images
 * @param {string} folder nom du dossier
 */
function newGalerie(array, folder) {
    return array.map((image, i, a) => (
        <div className={`img-gl i${i + 1} img${(i + 1)}`} key={i}>
            <img src={`/assets/${folder}/${image}`} alt={image} />
        </div>
    ))
}

const Galerie = ({ propose, display, active = false, buttons = true, imgs = ["nike.jpg", "nike.jpg", "nike.jpg", "nike.jpg"] }) => {
    return (
        <div className={active ? "galerie active" : "galerie"}>
            <div className="content-galerie">
                <button className='close' onClick={display}>x</button>
                <div className="imgs-galerie">
                    {newGalerie(imgs, "image")}

                </div>

                {buttons ? <div className="btns-galerie">
                    <button className="ac">Acepter</button>
                    <button className="prop" onClick={propose}>
                        <svg width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" /></svg>
                    </button>
                </div> : ""}

            </div>
        </div>
    );
};

const Carte = ({ imgs = ["nike.jpg", "nike.jpg", "nike.jpg", "nike.jpg"], prix = 700000, nom = "Nike 2021", vues = 130, reaction = 28, description = "Je veux une semmelle..." }) => {
    const [toggle, settoggle] = useState(false);
    const active = () => {
        settoggle(!toggle);
    }
    const [activeToggle, activeGalerie] = useState(false);
    const addGalerie = () => {
        activeGalerie(!activeToggle);
    }
    return (
        <>
            <div className="carte">
                <Galerie propose={active} active={activeToggle} display={addGalerie} imgs={imgs} />
                <PopPropose toggle={toggle} active={active} />
                <div className={`image-array max-img-${imgs.length}`} onClick={addGalerie}>
                    {imgs.map((image, i, array) => (
                        <div className={`img${i}`} key={i}>
                            <img src={`/assets/image/${image}`} alt="articles" />
                        </div>
                    ))}
                </div>
                <div className="texte">
                    <div className="para-prix">
                        <p className="prix">{prix.toLocaleString()} FCFA</p>
                        <div className="prop" onClick={active}>
                            <svg width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" /></svg>
                        </div>
                    </div>
                    <p className="nom">(1) {nom}</p>
                    <span>{vues} vues</span> <span>{reaction} réaction</span>
                    <p className="description">
                        {description}
                    </p>
                </div>
                <div className="btns">
                    <Link to="#">
                        <button className='btn accepter'>Accepter</button>
                    </Link>
                </div>
            </div>
        </>
    );
};
const ComponentVide = ({ nameImg, texte }) => {
    return (
        <div className="vide"><img src={`/assets/image/icones/${nameImg}`} alt="" />
            <p className="titre-vide">Aucun element pour le moment</p>
        </div>
    )
}
/*
{
    titre : "Nike pro Max",
    prix : 320000,
    reaction : 2,
    image : "nike.jpg"
}
 */
const ActueleArticle = ({ actuelleArticle = [] }) => {
    return (
        <>
        <Link className='link-item' to="/reaction">
            {actuelleArticle.length === 0 ? <ComponentVide nameImg="demande-vide.png" texte="Aucune demande" /> : actuelleArticle.map((article, i, array) => (
                <div key={i} className="content-actuelle">
                    <div className="img-actuelle">
                        <img src={`/assets/image/${article.image}`} alt={article.image} />
                    </div>
                    <div className="textes-actuelle">
                        <p className='nom'>{article.titre}</p>
                        <p className='prix'>{article.prix.toLocaleString()} FCFA</p>
                        {article.reaction ? <p className='reaction'>{article.reaction} reactions</p> : ""}
                    </div>
                </div>
            ))}
        </Link>
        </>
    );
};

const ConfirmeArticle = ({ actuelleArticle = [] }) => {
    return (
        <>
            {/*  */}
            <Link className='link-item' to="/mise-en-relation/demande">
            {actuelleArticle.length === 0 ? <ComponentVide nameImg="vide-homme.png" texte="Aucune demande" /> : actuelleArticle.map((article, i, array) => (
                <div key={i} className="contener-confirmer">
                    <div className="img-confirmer c">
                        
                            <img src={`/assets/image/${article.img}`} alt="chessure" />
                    </div>
                    <div className="texte-confirmer c">
                        <p className="prix c">{article.prix.toLocaleString()} FCFA</p>
                        <p className="nom c">{article.nom}</p>

                    </div>
                </div>
                
            ))}
            </Link>
            {/*  */}
        </>
    );
};
// end articles
// login et logOut
// Login

const Login = () => {
    const numero = useRef("");
    const password = useRef("");
    const [erreur, SetErreur] = useState(false);
    const [top, SetTop] = useState(false);

    // Fonction pour gérer la soumission du formulaire de connexion
    const handleForm = async (e) => {
        e.preventDefault(); // Empêche le comportement par défaut de l'événement de soumission

        // Création d'un objet FormData pour stocker les données du formulaire
        const data = {
            username : numero.current.value,
            password : password.current.value
        }
        console.log(data);
        SetTop(!top); // Affichage du spinner de chargement

        // Envoi de la requête de connexion au serveur avec les données du formulaire
        fetch("https://yiatoutest.pythonanywhere.com/api/token", {
        method: "POST",
        body: data,
        headers : {'Accept': 'application/json',
                    'Content-Type': 'application/json'
            },
        }).then(response =>{
             // Récupération des données de réponse du serveur
        let dataUser = response.json();
        console.log(dataUser);
        if (response.ok) { // Si la réponse est valide (status 2xx)
        // Enregistrement du token d'authentification dans un cookie
        Cookie.set(
            "yiatou-token-access",
            JSON.stringify(dataUser),
            { expires: 7, path: "/" }
        );

        // Cookie.set( // stocke le nom d'utilisateur dans un cookie nommé "2f416677-858f-796a-a221-690e5e4ae75a-Cooktoken"
        //     "yiatou-token-user",
        //     JSON.stringify({ nom: username.current.value }),
        //     { expires: 7, path: "/" }
        // );
        
        // Rechargement de la page
        // window.location.reload();
        // } else { // Si la réponse est invalide (status 404 ou 500)
        // SetErreur(true); // Affichage de l'erreur
        // SetTop(false); // Masquage du spinner de chargement
        }
        }).catch(err =>{
            console.log(err);
            SetErreur(!erreur); // Affichage de l'erreur
            SetTop(false); // Masquage du spinner de chargement
        })

       
    };
    return (
        <div>
            <form className='form login'>
                <div className="inputs">
                    <div className="input">
                        <p className="input-desc">Numero de telephone</p>
                        <input ref={numero} type="text" name="numero" id="numero" placeholder='074000000' required={true} />
                    </div>
                    <div className="input">
                        <p className="input-desc">Mot de passe</p>
                        <input ref={password} type="password" name="password" id="password" required={true} />
                    </div>
                </div>
                <div className="button-submit">
                    <button onClick={handleForm} type="submit" className='checked'>Je me connecte</button>
                </div>
            </form>

            <p className='link'>Vous n'avez pas de compte ? <Link to="/log/create">cree un compte</Link></p>
        </div>
    );
};
const Create = () => {
    // Initialisation des états d'erreur et de chargement de la page
    const [erreur, SetErreur] = useState(false);
    const [top, SetTop] = useState(false);

    const [check, setCheck] = useState(false);
    const userName = useRef("");
    const lastName = useRef("");
    // const email = useRef("");
    console.log(lastName.current.value);
    const password = useRef("");
    const genre = useRef("");
    const numero = useRef("");
    /**
     * 
     * {
    "last_name": null,
    "first_name": null,
    "email": "jb@gmail.com",
    "username": "jb",
    "password" : "qbc12345",
    "password2" : "qbc12345"
}
     */
    const handleForm = async (e) => { // déclare une fonction asynchrone qui sera exécutée lors de la soumission du formulaire

        e.preventDefault(); // empêche la soumission du formulaire de se produire par défaut
        // console.log("form");
        const data = {
            last_name: "Mintsa",
            first_name: "Jean-bosco",
            email: "mintsa@gmail.com",
            username: "Le dev",
            password : "qbc12345",
            
            password2 : "qbc12345"
        }
        SetTop(true); // met à jour l'état de la variable "Top" à true

        fetch( // envoie une requête POST à l'endpoint de création de compte utilisateur de l'API
        "https://yiatoubackend2.pythonanywhere.com/v1/users/auth/register/",
        {
            method: "POST",
            body: JSON.stringify(data),
            headers : {'Accept': 'application/json',
                    'Content-Type': 'application/json'
            },
        }
        ).then(response => {
            console.log(response);
            if (response.ok) { // si la réponse est valide (statut 200-299)
                console.log('data :\n',data);
                console.log("utilisateur cree");

                // response.json().then(dataUser => {
                //     console.log(dataUser);
                //     console.log('access \n',dataUser.access);

                //     const {access} = dataUser;

                //     const decode = jwtDecode(access);

                //     Cookie.set( // stocke le jeton d'accès dans un cookie nommé "2f416677-858f-796a-a221-690e5e4ae75a-token"
                //     "yiatou-token-access",
                //     dataUser.access,
                //     { expires: 7, path: "/" }
                //     );
                    

                //     Cookie.set( // stocke le nom d'utilisateur dans un cookie nommé "2f416677-858f-796a-a221-690e5e4ae75a-Cooktoken"
                //     "yiatou-token-user",
                //     JSON.stringify({id : decode.user_id, username : data.username,email : data.email,genre : genre.current.value}),
                //     { expires: 7, path: "/" }
                //     );
                //     window.location.href = "/";
                // }) 
                // récupère les données de réponse sous forme d'objet JSON
       
        console.log(response);
        // window.location.reload(); // recharge la page après avoir stocké les cookies
        }
        }).catch(err =>{
          
            // SetErreur(dataUser); // met à jour l'état de la variable "Erreur" avec les données de réponse de l'API
            SetTop(false); // met à jour l'état de la variable "Top" à false
            SetErreur(err);
            console.log("erreur");
            console.log(err);
        })

        
    };
    

    return (
        <form onSubmit={handleForm} className='form create'>
            <div className="inputs">
            <div className="input">
                    <p className="input-desc">Nom</p>
                    <input ref={userName} onChange={txt => {console.log(userName.current.value);}} type="text" name="prenom" id='prenom' placeholder='Doe' required={true} />
                </div>
                <div className="input">
                    <p className="input-desc">Civilité</p>
                    <select ref={genre} name="civiliter" id="civiliter" required={true}>
                        <option value="M">Monsieur</option>
                        <option value="F">Madame</option>
                    </select>
                </div>
                <div className="input">
                    <p className="input-desc">Numero de telephone</p>
                    <input ref={numero} type="tel" name="numero" id="numero" placeholder='074000000' required={true} />
                </div>
                <div className="input">
                    <p className="input-desc">Mot de passe</p>
                    <input ref={password} type="password" name="password" id="password" required={true} />
                </div>
                <p className='link-conditions'>
                    <Link to="/condition-utilisation/log/create">Lire les conditions d'utilisations</Link>
                </p>
                <div className="input-label">
                    <input type="checkbox" name="conditions" id="conditions" checked={check} onChange={() => {
                        setCheck(!check);
                    }} />
                    <label htmlFor="conditions">J'ai lu les conditions d'utilisations</label>
                </div>
            </div>
            <div className="button-submit">
                <button type={check ? "submit" : "button"} className={check ? "checked" : ""}>Je cree mon compte</button>
            </div>
            <p className='link'>Vous avez deja un compte ? <Link to="/log/login">connectez-vous !</Link></p>
        </form>
    );
};
// page reactions

const ArticleReaction = ({ nom = "Nike tendance 2021", img = "nike.jpg", prix = 55000, heur = "11h30" }) => {
    return (
        <Link to="/details-article/reaction">
        <div className='link-reaction'>
            <div className='article-rection'>
                <div className="img">
                    
                        <img src={"/assets/image/" + img} alt='img' className="img-img" />
                    
                </div>
                <div className="texte-reaction">
                    <p className='nom'>(1) {nom}</p>
                    <p className='prix'>{prix.toLocaleString()} FCFA</p>
                    <p className='notif'>Demande a {heur}.</p>
                </div>
                <span className="icone">
                    <Link to="#">
                        <svg width="16" height="16" viewBox="0 0 20 20"><path fill="currentColor" d="m9.129 0l1.974.005c.778.094 1.46.46 2.022 1.078c.459.504.7 1.09.714 1.728h5.475a.69.69 0 0 1 .686.693a.689.689 0 0 1-.686.692l-1.836-.001v11.627c0 2.543-.949 4.178-3.041 4.178H5.419c-2.092 0-3.026-1.626-3.026-4.178V4.195H.686A.689.689 0 0 1 0 3.505c0-.383.307-.692.686-.692h5.47c.014-.514.205-1.035.554-1.55C7.23.495 8.042.074 9.129 0Zm6.977 4.195H3.764v11.627c0 1.888.52 2.794 1.655 2.794h9.018c1.139 0 1.67-.914 1.67-2.794l-.001-11.627ZM6.716 6.34c.378 0 .685.31.685.692v8.05a.689.689 0 0 1-.686.692a.689.689 0 0 1-.685-.692v-8.05c0-.382.307-.692.685-.692Zm2.726 0c.38 0 .686.31.686.692v8.05a.689.689 0 0 1-.686.692a.689.689 0 0 1-.685-.692v-8.05c0-.382.307-.692.685-.692Zm2.728 0c.378 0 .685.31.685.692v8.05a.689.689 0 0 1-.685.692a.689.689 0 0 1-.686-.692v-8.05a.69.69 0 0 1 .686-.692ZM9.176 1.382c-.642.045-1.065.264-1.334.662c-.198.291-.297.543-.313.768l4.938-.001c-.014-.291-.129-.547-.352-.792c-.346-.38-.73-.586-1.093-.635l-1.846-.002Z" /></svg>
                    </Link>
                </span>
            </div>
        </div>
       </Link>
    );
};

const ItemPrposition = ({ nom = "About", prix = 550000, temp = 79, img = "store-icon.jpg", propose = true,backLink = "reaction", lieu = "Petit paris"}) => {

    const [toggle, settoggle] = useState(false);
    const active = () => {
        settoggle(!toggle);
    }

    return (
        <div className='proposition'>
            {propose ? <PopPropose active={active} toggle={toggle} prix={prix} /> : ""}
            <div className="img">
                <img src={"/assets/image/" + img} alt="images" />
            </div>
            <div className="textes">
                <p className="nom">{nom}</p>

                {propose ? <p className="prix">Prends a <span className='num' onClick={active}>{prix.toLocaleString()} FCFA</span></p> : ""}

                <p className="lieu-temp">
                    {lieu}<br/>il y'a {temp < 60 ? temp + " min" : Math.floor(temp / 60) + " h"}.
                </p>

            </div>
            <div className="btn-props">
                <Link to={`/mise-en-relation/${backLink}`}>
                    <button className={`${propose}`}>Choisir</button>
                </Link>
            </div>
        </div>
    );
};
// coordeonnes

const MiseAJour = () => {
    return (
        <form className='form-profil' action="#" method="post">
            <div className="inputs">
                <input type="text" placeholder='nom' />
                <input type="email" placeholder='email' />
                <input type="number" placeholder='numero de telephone' />
            </div>
            <button>Mettre a jour</button>
        </form>
    );
};

const SetPassword = () => {
    return (
        <form className='form-password' action="#" method="post">
            <div className="inputs">
                <div className="input">
                    <label htmlFor="encien">ANCIEN MOT DE PASSE</label>
                    <input type="password" id="encien" name='' required />
                </div>
                <div className="input">
                    <label htmlFor="nouveau">NOUVEAU MOT DE PASSE</label>
                    <input type="password" id="nouveau" name='' required />
                </div>
            </div>
            <button type='sumbmit'>Mettre a jour</button>
        </form>
    );
};

// Fin des coordonnees
// page de notification
const ItemNotifications = ({ texets = "", image = "nike.jpg", heurs = "12:23", checked = false }) => {
    return (
        <div className={checked ? 'notifications' : 'notifications no-check'}>
            <div className="img-notif">
                <img src={`/assets/image/${image}`} alt="no alt" />
            </div>
            <div className="content-notif">
                <p>{texets}</p>
            </div>
            <div className="heurs">
                <p>{heurs}</p>
            </div>
        </div>
    );
};

export {
    ContentHeaderHome,
    Carousel,
    ContentHeaderNotif,
    ContentHeaderAddDemande,
    ContentHeaderAddBusiness,
    ContentHeaderBoutique,
    NavigationDemandeur,
    NavigationVendeur,
    Article,
    Carte,
    Login,
    Create,
    ArticleReaction,
    ItemPrposition,
    Descriptions,
    MiseAJour,
    ActueleArticle,
    ConfirmeArticle,
    SetPassword,
    ItemNotifications,
    Galerie,
    linkImg,
    newGalerie,
    ContentHeaderCompte
} 