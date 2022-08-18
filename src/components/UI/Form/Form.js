import React from 'react';
import { Link } from 'react-router-dom';

import mainLogo from '../../../images/logo.svg';
import './Form.css'

function AuthForm({ children, formName, title, buttonText, text, linkText }) {

  return (
    <div className='form__container'>
      <Link to="/">
        <img className="form__logo" src={mainLogo} alt="logo" />
      </Link>
      <h2 className='form__title'>{title}</h2>
      <form className='form__main-form' name={`${formName}-form`} noValidate >
        {children}
        <button className='form__button' type="submit">
          {/* // disabled={isValid ? false : true} */}
          {buttonText}
        </button>
      </form>
      <div className='form__redirect-container'>
        <span className='form__redirect-text'>{text}</span>
        <Link to="/sign-in"
          className='form__redirect-link'>
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default AuthForm;