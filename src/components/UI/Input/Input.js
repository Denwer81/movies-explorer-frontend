import React from "react";

import './Input.css'

function Input({ formName, label, name, type, placeholder, minLength, maxLength }) {
  const [inputData, setinputData] = React.useState({});

  function handleInputData(evt) {
    setinputData({ ...inputData, [evt.target.name]: evt.target.validationMessage });
  }

  return (
    <label className="input__label">
      { label }
      <input
        onChange={handleInputData}
        className={`input input__${formName}`}
        id={`${formName}-${type}`}
        type={type}
        name={`${formName}-${type}`}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        required />
      <span
        className='input__error'
        id={`${formName}-${name}-input-error`}>
        {inputData[`${formName}-${type}`]}
      </span>
    </label>
  )
}

export default Input;