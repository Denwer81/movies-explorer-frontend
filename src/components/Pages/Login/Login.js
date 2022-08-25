import React from 'react';
import Form from '../../UI/Form/Form';
import Input from '../../UI/Input/Input';
import { useFormWithValidation } from '../../../hooks/useValidation'
import './Login.css';

function Login({ login, errorMessage, isLoading }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmitForm() {
    const { ['login-password']: password, ['login-email']: email } = values

    login(email, password);
    resetForm();
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
        isValid={isValid}
        handleSubmitForm={handleSubmitForm}
        errorMessage={errorMessage}
        isLoading={isLoading}>
        <Input
          formName="login"
          label="E-mail"
          type="email"
          placeholder="Введите ваш E-mail"
          handleInput={handleChange}
          errors={errors}
        />
        <Input
          formName="login"
          label="Пароль"
          type="password"
          placeholder="Введите ваш пароль"
          minLength="3"
          maxLength="30"
          handleInput={handleChange}
          errors={errors}
        />
      </Form>
    </main>
  );
}

export default Login;