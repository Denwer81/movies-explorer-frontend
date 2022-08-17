import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import useWindowSize from '../../../hooks/useWindowSize';
import { lockScroll, unlockScroll } from '../../../utils/scroll';

import mainLogo from '../../../images/logo.svg';
import './Header.css';

function Header() {
  const [isOpenBurger, setIsOpenBurger] = React.useState(false);
  const [loggedIn] = React.useState(false);
  const { width } = useWindowSize()

  function handleBtnClick() {
    setIsOpenBurger(!isOpenBurger);
    isOpenBurger ? unlockScroll() : lockScroll()
  }

  useEffect(() => {
    if (width >= 768) {
      setIsOpenBurger(false);
      unlockScroll();
    }
  }, [width])

  return (
    <>
      <header className="header">
        <Link to="/">
          <img className="header__logo" src={mainLogo} alt="logo" />
        </Link>
        <button
          className={`burger-btn ${loggedIn && 'burger-btn_active'} ${isOpenBurger && 'burger-btn_on'}`}
          type='button'
          onClick={handleBtnClick}>
          <span className={`burger-btn__item ${isOpenBurger ? 'burger-btn__item_close' : ''}`}></span>
        </button>
        <Navigation loggedIn={loggedIn} isOpenBurger={isOpenBurger} />
      </header>
      {/* <button onClick={() => setLoggedIn(!loggedIn)}>войти</button> */}
    </>
  );
}

export default Header;