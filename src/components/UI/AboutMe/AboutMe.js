import React from 'react';

import foto from '../../../images/foto.jpg'
import './AboutMe.css';

function AboutMe() {

  return (
    <section className='me' id='about-me'>
      <h2 className='me__title'>Студент</h2>
      <span className='me__separator'></span>
      <div className='me__container'>
        <img className='me__photo' src={foto} alt='Фотография студента'></img>
        <div className='me__description'>
          <h3 className='me__subtitle'>Денис</h3>
          <p className='me__text'>Фронтенд-разработчик, 41 год</p>
          <p className='me__text'>Я родился и живу в Москве, закончил РГТУ им Циолковского. У меня есть жена и дочь. Я люблю слушать музыку, и кататься на сноуборде. Недавно начал кодить. После того, как прошёл курс по веб-разработке, решил сменить профессию и уйти с постоянной работы.</p>
          <a className='me__link' href="https://github.com/denwer81/" rel="noreferrer" target="_blank">Github</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;