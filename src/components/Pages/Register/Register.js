import React from 'react';
import Form from '../../UI/Form/Form';
import Input from '../../UI/Input/Input';
import { userNameRegex } from '../../../utils/constants';
import { useFormWithValidation } from '../../../hooks/useValidation';
import './Register.css';

function Register({ signIn, errorMessage, isLoading }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmitForm() {
    const { ['register-password']: password, ['register-email']: email, ['register-text']: name } = values

    signIn(name, email, password)
    resetForm();
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
        isValid={isValid}
        handleSubmitForm={handleSubmitForm}
        errorMessage={errorMessage}
        isLoading={isLoading}>
        <Input
          formName="register"
          label="Имя"
          type="text"
          placeholder="Введите ваше имя"
          minLength="2"
          maxLength="30"
          pattern={userNameRegex}
          handleInput={handleChange}
          errors={errors}
        />
        <Input
          formName="register"
          label="E-mail"
          type="email"
          placeholder="Введите ваш E-mail"
          handleInput={handleChange}
          errors={errors}
        />
        <Input
          formName="register"
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

export default Register;