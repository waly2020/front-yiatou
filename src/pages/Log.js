import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Create, linkImg, Login } from '../components/Conposants';

const Log = () => {
    const reqParams = useParams();
    const textPara = reqParams.form === "create" ? "Cree un compte" : "Connexion";
    return (
        <div className='page log'>
            <main className="body">
                <h1>{textPara}</h1>
                {reqParams.form === "create" || reqParams.form === "login" ? reqParams.form === "create" ? <Create /> : <Login /> : ""}
                <div className="icones-login">
                    <p>{textPara} avec</p>
                    <div className='icone-c'>
                        <Link to="#">
                            <div className="icone g">
                                <img src={linkImg + '/assets/svg/gg.svg'} alt="svg google" />
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="icone f">
                                <img src={linkImg + '/assets/svg/fbk.svg'} alt="svg facebook" />
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Log;