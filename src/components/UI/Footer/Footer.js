import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <ul className='footer__links'>
          <li>
            <a className='footer__link' href='https://practicum.yandex.ru/' rel="noreferrer" target="_blank">Яндекс.Практикум</a>
          </li>
          <li>
            <a className='footer__link' href='https://github.com/denwer81' rel="noreferrer" target="_blank">GitHub</a>
          </li>
          <li>
            <a className='footer__link' href='https://t.me/demalaron' rel="noreferrer" target="_blank">Telergam</a>
          </li>
        </ul>
        <p className='footer__copyright'>&copy;2022</p>
      </div>
    </footer>
  );
}

export default Footer;