import React, { useEffect, useRef, useContext } from "react";
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import './Input.css'

function Input({
  formName,
  label,
  name,
  type,
  placeholder,
  minLength,
  maxLength,
  data,
  handleInput,
  isEdit,
  pattern,
  errors,
}) {
  const currentUser = useContext(CurrentUserContext);
  const input = useRef();

  function handleInputData(evt) {
    handleInput(evt);
  }

  useEffect(() => {
    if (input.current.name === 'register-text') {
      input.current.value = currentUser.name || ''
    }
    if (input.current.name === 'register-email') {
      input.current.value = currentUser.email || ''
    }
  }, [isEdit])

  return (
    <label className='input__label'>
      <span className={`input__label-${data}`}>
        {label}
      </span>
      <input
        ref={input}
        onChange={handleInputData}
        className={`input input__${formName} input__${data}`}
        id={`${formName}-${type}`}
        type={type}
        name={`${formName}-${type}`}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        disabled={(isEdit === undefined || isEdit === true) ? false : true}
        pattern={pattern}
        required />
      <span
        className='input__error'
        id={`${formName}-${name}-input-error`}>
        {errors[`${formName}-${type}`]}
      </span>
    </label>
  )
}

export default Input;