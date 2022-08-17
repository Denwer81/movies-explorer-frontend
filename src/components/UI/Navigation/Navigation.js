import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation({ loggedIn, isOpenBurger }) {

  return (
    <>
      {loggedIn
        ?
        <nav className={`${!isOpenBurger && 'nav_hidden'} ${isOpenBurger && 'nav'}`}>
          <ul className={`nav__list ${isOpenBurger && 'nav__list_active'}`}>
            <li className='nav__elem'>
              <NavLink
                to="/"
                className={`nav__link nav__link_active ${!isOpenBurger && 'nav__link_hidden'}`}>
                Главная
              </NavLink>
            </li>
            <li className='nav__elem'>
              <NavLink
                to="/movies"
                className={`nav__link nav__link_regular ${isOpenBurger && 'nav__link_active'}`}>
                Фильмы
              </NavLink>
            </li>
            <li className='nav__elem'>
              <NavLink
                to="/saved-movies"
                className={`nav__link nav__link_regular ${isOpenBurger && 'nav__link_active'}`}>
                Сохранённые фильмы
              </NavLink>
            </li>
            <li className='nav__elem'>
              <Link
                to="/profile"
                className={`nav__link nav__link_type_profile ${isOpenBurger && 'nav__link_active'}`} >
                Аккаунт
              </Link>
            </li>
          </ul>
        </nav>
        :
        <nav className=''>
          <ul className='nav__list'>
            <li>
              <Link
                to="/sign-up"
                className='nav__link nav__link_active nav__link_unloged' >
                Регистрация
              </Link>
            </li>
            <li>
              <Link
                to="/sign-in"
                className='nav__link nav__link_active nav__link_unloged nav__link_type_login' >
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      }
    </>
  );
}

export default Navigation;