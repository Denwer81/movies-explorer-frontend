import React from 'react';

import './Promo.css';

function Promo() {

  return (
    <section className="promo">
      <div className='promo__container'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <ul className='promo__nav'>
          <li className='promo__item'>
            <a className='promo__link' href='#about-project'>О проекте</a>
          </li>
          <li className='promo__item'>
            <a className='promo__link' href='#techs'>Технологии</a>
          </li>
          <li className='promo__item'>
            <a className='promo__link' href='#about-me'>Студент</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Promo;
