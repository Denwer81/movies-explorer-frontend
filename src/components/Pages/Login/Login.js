import React from 'react';
import Form from '../../UI/Form/Form';
import Input from '../../UI/Input/Input';

import './Login.css';

function Login({ login }) {

  function handleSubmitForm() {
    login()
  }

  return (
    <main>
      <Form
        formName='login'
        title='Рады видеть!'
        buttonText='Войти'
        text='Ещё не зарегистрированы?'
        link='/sign-up'
        linkText='Регистрация'
        handleSubmitForm={handleSubmitForm}>
        <Input
          formName="login"
          label="E-mail"
          type="email"
          placeholder="Введите ваш E-mail"
        />
        <Input
          formName="login"
          label="Пароль"
          type="password"
          placeholder="Введите ваш пароль"
          minLength="3"
          maxLength="30"
        />
      </Form>
    </main>
  );
}

export default Login;