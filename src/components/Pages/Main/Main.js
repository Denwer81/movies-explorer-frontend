import React from 'react';
import Header from '../../UI/Header/Header';
import Promo from '../../UI/Promo/Promo';
import AboutProject from '../../UI/AboutProject/AboutProject';
import Techs from '../../UI/Techs/Techs';
import AboutMe from '../../UI/AboutMe/AboutMe';
import Portfolio from '../../UI/Portfolio/Portfolio';
import Footer from '../../UI/Footer/Footer';

import './Main.css';

function Main({ isLoggedIn }) {

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;