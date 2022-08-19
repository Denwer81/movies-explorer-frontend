import React from 'react';
import Form from '../../UI/Form/Form';
import Input from '../../UI/Input/Input';

import './Register.css';

function Register() {
  function handleSubmitForm() {
  }
  return (
    <Form
      formName='register'
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      text='Уже зарегистрированы?'
      link='/sign-in'
      linkText='Войти'
      handleSubmitForm={handleSubmitForm}>
      <Input
        formName="register"
        label="Имя"
        type="text"
        placeholder="Введите ваше имя"
        minLength="2"
        maxLength="30"
      />
      <Input
        formName="register"
        label="E-mail"
        type="email"
        placeholder="Введите ваш E-mail"
      />
      <Input
        formName="register"
        label="Пароль"
        type="password"
        placeholder="Введите ваш пароль"
        minLength="3"
        maxLength="30"
      />
    </Form>
  );
}

export default Register;