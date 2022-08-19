import React, { useState } from 'react';
import Header from '../../UI/Header/Header';
import Input from '../../UI/Input/Input';

import './Profile.css';

function Profile({ isLoggedIn, logout }) {
  const [isEdit, setIsEdit] = useState(false)

  function handleClick() {
    setIsEdit(true)
  }

  function handleSubmitForm(evt) {
    evt.preventDefault()
    setIsEdit(false)
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className='profile'>
        <h2 className='profile__title'>Привет, Денис!</h2>
        <form className='profile__form'>
          <Input
            formName="register"
            label="Имя"
            type="text"
            placeholder="Введите ваше имя"
            minLength="2"
            maxLength="30"
            data="profile"
          />
          <Input
            formName="login"
            label="E-mail"
            type="email"
            placeholder="Введите ваш E-mail"
            data="profile"
          />
          {
            !isEdit
              ?
              <div className='button__container'>
                <button className='profile__edit' type='button' onClick={handleClick}>Редактировать</button>
                <button className='profile__logout' type='button' onClick={logout}>Выйти из аккаунта</button>
              </div>
              :
              <div className='button__container'>
                <span className='profile__error'>При обновлении профиля произошла ошибка.</span>
                <button className='profile__submit' type='submit' onClick={handleSubmitForm}>Сохранить</button>
              </div>
          }
        </form>
      </section>
    </>
  );
}

export default Profile;