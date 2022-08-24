import React, { useState } from 'react';
import Header from '../../UI/Header/Header';
import Input from '../../UI/Input/Input';
import { editProfile } from '../../../utils/MainApi'
import './Profile.css';

function Profile({ isLoggedIn, logout }) {
  const [isEdit, setIsEdit] = useState(false);
  const [inputs, setInputs] = React.useState({});
  const [inputData, setinputData] = React.useState({});

  const form = React.useRef();
  const [isValid, setIsValid] = React.useState(false);

  function setValidityForm() {
    setIsValid(form.current.checkValidity());
  }

  function handleClick() {
    setIsEdit(true);
  }

  function handleSubmitForm(evt) {
    const { ['register-email']: email, ['register-text']: name } = inputData

    evt.preventDefault();
    editProfile(name, email);
    Object.values(inputs).forEach(input => input.current.value = '');
    setinputData({});
    setIsEdit(false);
  }

  function handleInput(input) {
    setInputs({ ...inputs, [input.current.name]: input })
    setinputData({ ...inputData, [input.current.name]: input.current.value });
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className='profile'>
        <h2 className='profile__title'>Привет, Денис!</h2>
        <form className='profile__form' ref={form} onInput={setValidityForm}>
          <Input
            formName="register"
            label="Имя"
            type="text"
            placeholder="Введите ваше имя"
            minLength="2"
            maxLength="30"
            data="profile"
            isEdit={isEdit}
            handleInput={handleInput}
          />
          <Input
            formName="login"
            label="E-mail"
            type="email"
            placeholder="Введите ваш E-mail"
            data="profile"
            isEdit={isEdit}
            handleInput={handleInput}
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