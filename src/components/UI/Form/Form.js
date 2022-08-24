import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../../images/logo.svg';
import './Form.css'

function AuthForm({ children, formName, title, buttonText, text, link, linkText, handleSubmitForm }) {
  const form = React.useRef();
  const [isValid, setIsValid] = React.useState(false);

  function setValidityForm() {
    setIsValid(form.current.checkValidity());
  }

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
        ref={form}
        className='form__main-form'
        onSubmit={(evt) => handleSubmit(evt)}
        onInput={setValidityForm}
        name={`${formName}-form`}
        noValidate >
        {children}
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