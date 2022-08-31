import React from 'react';
import './AboutProject.css';

function AboutProject() {

  return (
    <section className='project' id='about-project'>
      <h2 className='project__title project__title_type_main'>О проекте</h2>
      <span className='project__separator'></span>
      <div className='project__wrapper'>
        <div className='project__container'>
          <h3 className='project__title'>Дипломный проект включал 5 этапов</h3>
          <p className='project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='project__container'>
          <h3 className='project__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='project__container project__container_type_bar'>
        <div className='project__bar project__bar_type_back-end'>
          <p className='project__text project__text_type_back-end'>1 неделя</p>
          <p className='project__text project__text_type_sign'>Back-end</p>
        </div>
        <div className='project__bar project__bar_type_front-end'>
          <p className='project__text project__text_type_front-end'>4 недели</p>
          <p className='project__text project__text_type_sign'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;