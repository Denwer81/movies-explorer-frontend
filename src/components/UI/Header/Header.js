import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import useWindowSize from '../../../hooks/useWindowSize';
import { lockScroll, unlockScroll } from '../../../utils/scroll';
import mainLogo from '../../../images/logo.svg';
import './Header.css';

function Header({ isLoggedIn }) {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const { width } = useWindowSize()

  function handleBtnClick() {
    setIsOpenBurger(!isOpenBurger);
    isOpenBurger ? unlockScroll() : lockScroll()
  }

  useEffect(() => {
    unlockScroll()
  }, [])

  useEffect(() => {
    if (width >= 768) {
      setIsOpenBurger(false)
      unlockScroll()
    }
  }, [width])

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={mainLogo} alt="logo" />
      </Link>
      <button
        className={`burger-btn ${isLoggedIn && 'burger-btn_active'} ${isOpenBurger && 'burger-btn_on'}`}
        type='button'
        onClick={handleBtnClick}>
        <span className={`burger-btn__item ${isOpenBurger ? 'burger-btn__item_close' : ''}`}></span>
      </button>
      <Navigation isLoggedIn={isLoggedIn} isOpenBurger={isOpenBurger} setIsOpenBurger={setIsOpenBurger} />
    </header>
  );
}

export default Header;