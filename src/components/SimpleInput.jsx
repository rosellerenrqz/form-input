import React, { useState, useEffect } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";

  const entereEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");

  const nameInputInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputInvalid = !enteredEmail && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && entereEmailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const emailInputHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid && !entereEmailIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNameTouched(false); //adding this so after the submit and input will be empty, it wont show an error.

    setEnteredEmail("");
    setEnteredEmailTouched(false); //adding this so after the submit and input will be empty, it wont show an error.

    console.log(enteredName);
    console.log(enteredEmail);
  };

  const invalidStyle =
    "border-2 border-red-600 bg-red-200 focus:border-2 focus:border-red-500 focus:bg-red-100";

  const inputInvalidHandler = nameInputInvalid ? invalidStyle : "";
  const emailInvalidHandler = emailInputInvalid ? invalidStyle : "";

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
            onBlur={nameInputBlurHandler}
            onChange={nameInputHandler}
          />
          {nameInputInvalid && (
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
            onBlur={emailInputBlurHandler}
            onChange={emailInputHandler}
          />
          {emailInputInvalid && (
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
