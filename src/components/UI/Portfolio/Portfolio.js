import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav className="portfolio__nav">
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://denwer81.github.io/how-to-learn/" rel="noreferrer" target="_blank">
              <p className="portfolio__link-text">Статичный сайт</p>
              <span className="portfolio__link-text portfolio__link-arrow">↗</span>
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://denwer81.github.io/russian-travel/index.html" rel="noreferrer" target="_blank">
              <p className="portfolio__link-text">Адаптивный сайт</p>
              <span className="portfolio__link-text portfolio__link-arrow">↗ </span>
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="http://denwer.nomoredomains.xyz/" rel="noreferrer" target="_blank">
              <p className="portfolio__link-text">Одностраничное приложение</p>
              <span className="portfolio__link-text portfolio__link-arrow">↗ </span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;