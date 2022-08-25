import { useState } from "react";
import { isEmail } from "validator";

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const input = event.target;
    const name = input.name;
    const value = input.value;

    setValues({ ...values, [name]: value });
    setInputs({ ...inputs, [name]: input })

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

  function resetForm () {
    setValues({});
    setErrors({});
    setIsValid(false);
    setTimeout(() => {
      Object.values(inputs).forEach(input => input.value = '')
    }, 300)
  }

  return { values, handleChange, errors, isValid, resetForm };
}
