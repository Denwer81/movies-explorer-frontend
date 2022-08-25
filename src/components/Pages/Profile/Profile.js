import React, { useState } from 'react';
import Header from '../../UI/Header/Header';
import Input from '../../UI/Input/Input';
import { editProfile } from '../../../utils/MainApi';
import { useFormWithValidation } from '../../../hooks/useValidation';
import './Profile.css';

function Profile({ isLoggedIn, logout }) {
  const [isEdit, setIsEdit] = useState(false);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleClick() {
    setIsEdit(true);
  }

  function handleSubmitForm(evt) {
    const { ['register-email']: email, ['register-text']: name } = values

    evt.preventDefault();
    editProfile(name, email);
    resetForm();
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className='profile'>
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
            isEdit={isEdit}
            handleInput={handleChange}
            errors={errors}
          />
          <Input
            formName="login"
            label="E-mail"
            type="email"
            placeholder="Введите ваш E-mail"
            data="profile"
            isEdit={isEdit}
            handleInput={handleChange}
            errors={errors}
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
                <span className='profile__error profile__error_hidden'>При обновлении профиля произошла ошибка.</span>
                <button
                  className='profile__submit'
                  type='submit'
                  onClick={handleSubmitForm}
                  disabled={isValid ? false : true}>
                  Сохранить
                </button>
              </div>
          }
        </form>
      </main>
    </>
  );
}

export default Profile;