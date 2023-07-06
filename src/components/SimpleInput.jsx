import React, { useState } from "react";
import UseInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    reset: resetNameInput,
    valueInputHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = UseInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    reset: resetEmailInput,
    valueInputHandler: emailInputHandler,
    inputBlurHandler: emailBlurHandler,
  } = UseInput((value) => value.trim() !== "" && value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();

    console.log(enteredName);
    console.log(enteredEmail);
  };

  const invalidStyle =
    "border-2 border-red-600 bg-red-200 focus:border-2 focus:border-red-500 focus:bg-red-100";

  const inputInvalidHandler = nameInputHasError ? invalidStyle : "";
  const emailInvalidHandler = emailInputHasError ? invalidStyle : "";

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="mt-4">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={enteredName}
            className={inputInvalidHandler}
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
          />
          {nameInputHasError && (
            <p className="text-red-500 font-bold text-sm mb-4">
              Name must not be empty.
            </p>
          )}
          <label htmlFor="email">E-mail Address</label>
          <input
            type="text"
            id="email"
            placeholder="E-mail Address"
            value={enteredEmail}
            className={emailInvalidHandler}
            onBlur={emailBlurHandler}
            onChange={emailInputHandler}
          />
          {emailInputHasError && (
            <p className="text-red-500 font-bold text-sm mb-4">
              Enter a valid E-mail.
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

export default SimpleInput;
