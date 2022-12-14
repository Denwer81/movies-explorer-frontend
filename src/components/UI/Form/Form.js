import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../../images/logo.svg';
import Preloader from '../Preloader/Preloader'
import './Form.css'

function AuthForm({
  children,
  formName,
  title,
  buttonText,
  text,
  link,
  linkText,
  isValid,
  handleSubmitForm,
  errorMessage,
  isLoading }) {

  function handleSubmit(evt) {
    evt.preventDefault()
    handleSubmitForm()
  }

  return (
    <div className='form__container'>
      <div className='form__logo-container'>
        <Link to="/">
          <img className="form__logo" src={mainLogo} alt="logo" />
        </Link>
      </div>
      <h2 className='form__title'>{title}</h2>
      <form
        className='form__main-form'
        onSubmit={(evt) => handleSubmit(evt)}
        name={`${formName}-form`}
        noValidate >
        {children}
        <Preloader isLoading={isLoading} />
        <span className='form__error'>{errorMessage}</span>
        <button className='form__button' type="submit" disabled={isValid ? false : true}>
          {buttonText}
        </button>
      </form>
      <div className='form__redirect-container'>
        <span className='form__redirect-text'>{text}</span>
        <Link to={link}
          className='form__redirect-link'>
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default AuthForm;