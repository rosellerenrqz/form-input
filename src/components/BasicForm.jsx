import React from "react";
import UseInput from "../hooks/use-input";

const BasicForm = () => {
  const {
    value: fNameValue,
    isValid: fNameIsValid,
    hasError: fNameHasError,
    reset: resetFName,
    valueInputHandler: fNameValueHandler,
    inputBlurHandler: fNameBlurHandler,
  } = UseInput((value) => value.trim() !== "");

  const {
    value: lNameValue,
    isValid: lNameIsValid,
    hasError: lNameHasError,
    reset: resetLName,
    valueInputHandler: lNameValueHandler,
    inputBlurHandler: lNameBlurHandler,
  } = UseInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    reset: resetEmail,
    valueInputHandler: emailValueHandler,
    inputBlurHandler: emailBlutHandler,
  } = UseInput((value) => value !== "" && value.includes("@"));

  let formIsValid = false;
  if (fNameIsValid && lNameIsValid && emailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!fNameIsValid && !lNameIsValid && !emailIsValid) {
      return;
    }
    resetFName();
    resetLName();
    resetEmail();
  };

  const invalidStyle =
    "border-1 border-red-600 bg-red-400 focus:border-red-500 focus:bg-red-300 placeholder-gray-400";

  const fNameInvalidHandler = fNameHasError ? invalidStyle : "";
  const lNameInvalidHandler = lNameHasError ? invalidStyle : "";
  const emailInvalidHandler = emailHasError ? invalidStyle : "";

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[15rem] mb-4">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              placeholder="First Name"
              value={fNameValue}
              className={fNameInvalidHandler}
              onBlur={fNameBlurHandler}
              onChange={fNameValueHandler}
            />
            {fNameHasError && (
              <p className="text-red-600 mb-4 text-sm">
                Invalid Input! First Name should not be empty.
              </p>
            )}
          </div>
          <div className="flex-1 min-w-[15rem] mb-4">
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="name"
              placeholder="Last Name"
              value={lNameValue}
              className={lNameInvalidHandler}
              onBlur={lNameBlurHandler}
              onChange={lNameValueHandler}
            />
            {lNameHasError && (
              <p className="text-red-600 mb-4 text-sm">
                Invalid Input! Last Name should not be empty.
              </p>
            )}
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail Address</label>
          <input
            type="text"
            id="email"
            placeholder="E-mail Address"
            value={emailValue}
            className={emailInvalidHandler}
            onBlur={emailBlutHandler}
            onChange={emailValueHandler}
          />
          {emailHasError && (
            <p className="text-red-600 mb-4 text-sm">
              Invalid Input! Enter a valid Email.
            </p>
          )}
        </div>
        <div className="text-center">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </>
  );
};

export default BasicForm;
