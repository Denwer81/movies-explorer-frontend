import React, { useState, useContext } from 'react';
import Header from '../../UI/Header/Header';
import Input from '../../UI/Input/Input';
import { useFormWithValidation } from '../../../hooks/useValidation';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import Preloader from '../../UI/Preloader/Preloader'
import './Profile.css';

function Profile({
  isLoggedIn,
  handleLogout,
  handleEditProfile,
  errorMessage,
  isLoading
}) {
  const currentUser = useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(false);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleClick() {
    setIsEdit(true);
  }

  function handleSubmitForm(evt) {
    let { ['register-email']: email, ['register-text']: name } = values

    evt.preventDefault();
    handleEditProfile(
      name ? name : currentUser.name,
      email ? email : currentUser.email);
    resetForm();
    setTimeout(() => {
      setIsEdit(false)
    }, 1500)
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className='profile'>
        <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
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
                <button className='profile__logout' type='button' onClick={() => handleLogout()}>Выйти из аккаунта</button>
              </div>
              :
              <div className='button__container'>
                <div className='profile__preloader'>
                  <Preloader isLoading={isLoading} />
                </div>
                <span className='profile__error'>{errorMessage}</span>
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