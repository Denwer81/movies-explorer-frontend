import React from 'react';
import Form from '../../UI/Form/Form';
import Input from '../../UI/Input/Input';

import './Login.css';

function Login({ login }) {
  const [inputs, setInputs] = React.useState({});
  const [inputData, setinputData] = React.useState({});

  function handleSubmitForm() {
    const { ['login-password']: password, ['login-email']: email } = inputData

    login(password, email);
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
          handleInput={handleInput}
        />
        <Input
          formName="login"
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

export default Login;