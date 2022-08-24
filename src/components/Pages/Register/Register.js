import React from 'react';
import Form from '../../UI/Form/Form';
import Input from '../../UI/Input/Input';
import { register } from '../../../utils/MainApi'

import './Register.css';

function Register() {
  const [inputs, setInputs] = React.useState({});
  const [inputData, setinputData] = React.useState({});

  function handleSubmitForm() {
    const { ['register-password']: password, ['register-email']: email, ['register-text']: name } = inputData

    register(name, email, password);
    Object.values(inputs).forEach(input => input.current.value = '');
    setinputData({});
  }

  function handleInput(input) {
    setInputs({ ...inputs, [input.current.name]: input})
    setinputData({ ...inputData, [input.current.name]: input.current.value });
  }

  return (
    <main>
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
          handleInput={handleInput}
        />
        <Input
          formName="register"
          label="E-mail"
          type="email"
          placeholder="Введите ваш E-mail"
          handleInput={handleInput}
        />
        <Input
          formName="register"
          label="Пароль"
          type="password"
          placeholder="Введите ваш пароль"
          minLength="3"
          maxLength="30"
          handleInput={handleInput}
        />
      </Form>
    </main>
  );
}

export default Register;