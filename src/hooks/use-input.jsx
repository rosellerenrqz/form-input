import { useState } from "react";

const UseInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  //   const valueIsValid = enteredName.trim() !== "";
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueInputHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    reset: reset,
    valueInputHandler,
    inputBlurHandler,
  };
};

export default UseInput;
