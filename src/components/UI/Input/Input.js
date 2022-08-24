import React from "react";
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
  isEdit
}){
  const [inputValidationMessage, setInputValidationMessage] = React.useState();
  const input = React.useRef(null);

  function handleInputData() {
    setInputValidationMessage(input.current.validationMessage)
    handleInput(input);
  }

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
        disabled={isEdit ? false : true}
        required />
      <span
        className='input__error'
        id={`${formName}-${name}-input-error`}>
        {inputValidationMessage}
      </span>
    </label>
  )
}

export default Input;