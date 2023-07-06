import React, { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNameTouched(false); //adding this so after the submit and input will be empty, it wont show an error.
    console.log(enteredName);
  };

  const inputInvalidHandler = nameInputInvalid
    ? "border-2 border-red-600 bg-red-200 focus:border-2 focus:border-red-500 focus:bg-red-100"
    : "";

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
            <p className="text-red-500 font-bold text-sm">
              Name must not be empty.
            </p>
          )}
        </div>
        <div className="text-center">
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default SimpleInput;
