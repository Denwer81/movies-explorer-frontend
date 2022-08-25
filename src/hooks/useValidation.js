import React, { useCallback } from "react";
import { isEmail } from "validator";

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const input = event.target;
    const name = input.name;
    const value = input.value;

    setValues({ ...values, [name]: value });

    setErrors(() => {
      if (input.type === 'email' && !isEmail(input.value)) {
        return { ...errors, [name]: 'почта должна быть формата email@ya.ru' }
      } else if (input.validity.patternMismatch) {
        return { ...errors, [name]: 'Имя может содержать только латиницу, кириллицу, пробел или дефис' }
      }

      return { ...errors, [name]: input.validationMessage }
    });

    setIsValid(() => {
      const form = input.closest("form");

      if (input.type === 'email') {
        return (isEmail(input.value) && form.checkValidity())
      }
      return form.checkValidity()
    });
  };

  const resetForm = useCallback(() => {
    setValues({});
    setErrors({});
    setIsValid(false);
  },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
