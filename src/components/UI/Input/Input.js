import React from "react";
function Input({ popupName, name, inputData }) {

  return (
    <>
      <input
        ref={email}
        // onChange={handleInputData}
        className={`auth__input auth__input_${formName}`}
        id={`${formName}-email`}
        type="email"
        name={`${formName}-email`}
        placeholder="Email"
        required />
      <span
        className='popup__error'
        id={`${popupName}-${name}-input-error`}>
        {inputData[`${popupName}-${name}`]}
      </span>
    </>
  )
}

export default Input;