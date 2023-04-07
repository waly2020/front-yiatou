import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// composants
import Actuelle from './components/Actuelle';
import Confirmer from './components/Confirmer';
import Historique from './components/Historique';
import Atentes from './components/Atentes';
import Valides from './components/Valides';
// sass
import './styles/pages/style.scss';
import './styles/pages/demande.scss';
import './styles/pages/compte.scss';
import './styles/pages/addDemande.scss';
import './styles/pages/business.scss';
import './styles/pages/boutique.scss';
import './styles/pages/activites.scss';
import './styles/pages/logs.scss';
import './styles/pages/modification.scss';
// pages
import Compte from './pages/Compte';
import AddDemande from './pages/AddDemande';
import Business from './pages/Business';
import Boutique from './pages/Boutique';
import Activiter from './pages/Activiter';
import Demande from './pages/Demande';
import Home from './pages/Home';
import Negociation from './pages/Negociation';
import Log from './pages/Log';
import Spashe from './pages/Spashe';
import Reaction from './pages/Reaction';
import DetailleArticle from './pages/DetailleArticle';
import MiseRelation from './pages/MiseRelation';
import Cordonnee from './pages/Cordonnee';
import CompteBusiness from './pages/CompteBusiness';
import Modifier from './pages/Modifier';
import CreateShop from './pages/CreateShop';
import Notifications from './pages/Notifications';
import About from './pages/About';
import ConditionVente from './pages/ConditionVente';
import ConditionUtilisation from './pages/ConditionUtilisation';
import PolitiqueVente from './pages/PolitiqueVente';
import PolitiqueConfi from './pages/PolitiqueConfi';
import Aide from './pages/Aide';
// /negociation
const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/boutique' element={<Boutique />} />
        <Route path='/condition-vente/:back' element={<ConditionVente />} />
        <Route path='/politique-vente/:back' element={<PolitiqueVente />} />
        <Route path='/condition-utilisation/*' element={<ConditionUtilisation />} />
        <Route path='/politique-confi/:back' element={<PolitiqueConfi />} />
        <Route path='/aide/:back' element={<Aide />} />
        <Route path='/about/:back' element={<About />} />
        <Route path='/set-datas/:page' element={<Modifier />} />
        <Route path='/compte/demandeur' element={<Compte />} />
        <Route path='/compte/business' element={<CompteBusiness />} />
        <Route path='/add-demande' element={<AddDemande />} />
        <Route path='/business' element={<Business />} />
        <Route path='/negociation' element={<Negociation />} />
        <Route path='/spashe' element={<Spashe />} />
        <Route path='/reaction' element={<Reaction />} />
        <Route path='/user/:content' element={<Cordonnee />} />
        <Route path='/details-article' element={<DetailleArticle />} />
        <Route path='/mise-en-relation' element={<MiseRelation />} />
        <Route path='/log/:form' element={<Log />} />
        <Route path='/create-shop' element={<CreateShop />} />
        <Route path='/notifications' element={<Notifications />} />

        <Route path='/activites' element={<Activiter />}>
          <Route path='/activites' element={<Atentes />} />
          <Route path='/activites/valide' element={<Valides />} />
          <Route path='/activites/historique' element={<Historique />} />
        </Route>

        <Route path='/demande' element={<Demande />}>
          <Route path='/demande' element={<Actuelle />} />
          <Route path='/demande/confirmer' element={<Confirmer />} />
          <Route path='/demande/historique' element={<Historique />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
};

export default App;