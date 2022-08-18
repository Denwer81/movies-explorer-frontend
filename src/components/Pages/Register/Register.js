import React from 'react';
import Form from '../../UI/Form/Form';
import Input from '../../UI/Input/Input';


import './Register.css';

function Register() {
  return (
    <div className='register__container'>
      <Form
        formName='register'
        title='Добро пожаловать!'
        buttonText='Зарегистрироваться'
        text='Уже зарегистрированы?'
        linkText='Войти'>

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
    </div>
  );
}

export default Register;